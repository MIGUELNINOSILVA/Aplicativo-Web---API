import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((DB) => console.log('DB is connected'))
.catch(err => console.log(err));