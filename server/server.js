const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app');

dotenv.config();

mongoose.connect(process.env.MONGOURL).then(() =>{
    console.log('server connected');
}).catch(() =>{
    console.log('Oooo... something went wrong in connection');
});




const port = 8900;
app.listen(port, () =>{
    console.log('server start success-fully :)');
})