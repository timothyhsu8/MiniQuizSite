import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    score: Number,
    createdAt: {
        type: Date,
        default: new Date()  
    },
});

export default mongoose.model('User', userSchema);
