const express = require("express");
const contactRouter = require('./routes/contacts');
const usersRouter = require('./routes/users')
const app = express();
const PORT = 3001;

// midđlewares
app.use(express.json());

app.use("/contacts", contactRouter);
app.use("/users", usersRouter);

app.listen(PORT, ()=>{
    console.log(`Sever is listtening at PORT ${PORT} `);
})
