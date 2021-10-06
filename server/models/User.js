import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    score: Number
});

export default mongoose.model('User', userSchema);
