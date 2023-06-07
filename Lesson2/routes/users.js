const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const users = [
  {
    id: "ad8aa002-00fd-11ee-be56-0242ac120002",
    usersname: "huy1",
    phone: "111-111-1111",
  },
  {
    id: "ad8aa43a-00fd-11ee-be56-0242ac120002",
    usersname: "huy2",
    phone: "222-222-2222",
  },
  {
    id: "ad8aa64c-00fd-11ee-be56-0242ac120002",
    usersname: "huy3",
    phone: "333-333-3333",
  },
];
// GET: get all usres
router.get("/", (req, res) => {
  res.json({
    data: users,
    statuscode: 200,
  });
});

// GET: get a usres
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id ===id);
  if(!user){
    return res.json({
      msg: "User is not exist",
      data: {},
    })
  }
  res.json({
    data: user,
    msg: "Successfully",
  })
});

// POST: post all contacts
router.post("/", (req, res) => {
  const {usersname , phone} = req.body;
  // 1.validation
  if( !usersname || !phone ) {
      return res.json({
        msg: "mesing required keys",
        statuscode: 400,
      });
  }

  // 2. Does this record exisst in DB? 
  const isExist = users.findIndex((user) => user.phone === phone)
  if(isExist !== -1){
    return res.json({
      msg: "Can not upload users this number",
      statuscode: 400,
    });
  }

  const newUsers = {
    ...req.body,
    id: uuidv4(),
  };
  users.push(newUsers);

  res.json({
    msg: " Add new user seccessfully",
    data: users,
  });
});


// Put user 
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const isExist = users.findIndex((user) => user.id === id);
  if(isExist < 0 ){
    return res.json({
      msg:"not update a user",
      statuscode: 400,
    });
  } else {
    const newUsers = { ...users[isExist], ...req.body}
    users.splice(isExist, 1 , newUsers);

    res.json({
      msg:"Update new contact Successfully",
      data: users,
    });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const isExist = users.findIndex((user) => user.id === id);
 if(isExist < 0) {
  return res,json({
    msg: " Not Delete a ueser",
    statuscode: 400,
  })
 }else{
  users.splice(isExist , 1);
  res.json({
    msg: "Delete new usere Successsfully",
    data: users,
  });
 }
});
module.exports = router;
