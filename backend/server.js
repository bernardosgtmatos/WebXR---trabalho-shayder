require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const {dotenv} = require('dotenv');

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//import routes 
const OwenerRoute = require('./src/routes/OwenerRoute.js')



//app use routes
app.use('/admin', OwenerRoute.OwnerRoute);

//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
