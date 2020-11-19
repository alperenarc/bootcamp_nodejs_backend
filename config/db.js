const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect();

}