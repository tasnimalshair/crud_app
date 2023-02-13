const mongoose = require('mongoose');



const connectDb = async() => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL, {
            // userNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}

module.exports = connectDb;