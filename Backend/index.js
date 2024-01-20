const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb+srv://WhosOnBreak:<password>@whoonbreak.exiasix.mongodb.net/')

app.get('/test', (req,res) => {

    res.json('test ok');
});


app.listen(4000); 