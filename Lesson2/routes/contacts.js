const express = require("express");
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const contacts =
[
    {
      id: "d03ae9b2-062f-4b02-a071-9c071dade389",
      name: "Jill Johnson",
      email: "jill@gmail.com",
      phone: "111-111-1111",
      type: "personal",
    },
    {
      id: "01514458-942d-4e7b-ab08-af36a67ce7ec",
      name: "Sara Watson",
      email: "sara@gmail.com",
      phone: "222-222-2222",
      type: "personal",
    },
    {
      id: "7d6a960c-ac86-43cc-9720-d39b5c372a71",
      name: "Harry White",
      email: "harry@gmail.com",
      phone: "333-333-3333",
      type: "professional",
    },
];

// GET: get all contacts
router.get('/',(req, res) => {
    res.json({
        data: contacts,
        statuscode: 200,
    });
});
// GET: get a contacts
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const contact = contacts.find((contact) => contact.id === id);
    if(!contact){
        return  res.json({
            msg: "Contact is not exist",
            data: {},
        })
    }
    res.json({
        data: contact,
        msg:"Successfully",
    });
});

// POST: post all contacts
router.post('/', (req, res) => {
    const { name , phone , type , email} = req.body;
    //  1 .validation
    if( !name || !phone || !type || !email){
        return res.json({
            msg: "mesing required keys",
            statuscode: 400,
        });
    }

    //  2. does this record exisst in DB?
    const isExist = contacts.findIndex((contact) => contact.phone === phone);
    if(isExist !== -1){
        return res.json({
            msg:"can not upload contact this number",
            statuscode: 400,
        });
    }

    const newContacts = {
        ...req.body,
        id: uuidv4(),
    };
    contacts.push(newContacts);

    res.json({
        msg: "Add new contact successfully",
        data: contacts,
    })
})

// PUT: put all contacts
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const isExist = contacts.findIndex((contact) => contact.id === id);
    if(isExist < 0 ){
        return res.json({
            msg: "not update a contact",
            statuscode: 400,
        })
    }else {
        const newContacts = { ...contacts[isExist], ...req.body }
        contacts.splice(isExist, 1 , newContacts);

        res.json({
            msg: "Update new contact Successsfully",
            data: contacts,
        });
    }
})

// DELETE: delete all contacts
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const isExist = contacts.findIndex((contact) => contact.id === id);
    if(isExist < 0 ){
        return res.json({
            msg: "not delete a contact",
            statuscode: 400,
        })
    }else {
        contacts.splice(isExist, 1);
        res.json({
            msg: "Delete new contact Successsfully",
            data: contacts,
        });
    }
})

module.exports = router;



