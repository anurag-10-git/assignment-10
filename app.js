const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');

app.use(cors());

app.use(express.json());

app.use(contactRoutes);

mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://anurag:R3DfiPAZnt78pkg8@clusters.nmumkwm.mongodb.net/contactapp?retryWrites=true').then(result => {
    app.listen(3000,()=> {
        console.log(`server running`);
    });
}).catch(err => {
    console.log(err);
})

