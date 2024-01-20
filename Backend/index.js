const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Students = require('./models/Students');
const app = express();


mongoose.connect('mongodb+srv://WhosOnBreak:<password>@whoonbreak.exiasix.mongodb.net/')

app.get('/test', (req,res) => {

    res.json('test ok');
});


app.post('/register', async (req, res) => {
    mongoose.connect("mongodb+srv://WhosOnBreak:<password>@whoonbreak.exiasix.mongodb.net/")
    const { name, email, password} = req.body;
    try {
      const studentDoc = await Student.create({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, bcryptSalt),
      });
      res.json({ studentDoc })
    }
    catch (e) {
      if (e.code !== '11000') {
        res.status(422).json({ error: "Registration failed. Please try again later" });
      }
    }
  })



app.listen(4000); 