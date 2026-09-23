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




//app use routes
app.use('/admin', adminRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
