import User from '../models/user.js'
import mongoose from 'mongoose';

export const getUsers = (req, res) => {
    try {
        User.find({}, function(err, users) {
            var userMap = [];
        
            users.forEach(function(user) {
              userMap.push(user);
            });

            res.send(userMap);  
          });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createUser = (req, res) => {
    const { name, score } = req.body;

    const newUser = new User({ name, score })

    try {
        newUser.save();

        res.status(201).json(newUser );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, score } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedUser = { name, score };
    const finalUser = await User.findByIdAndUpdate(id, updatedUser, { new: true });
    res.json(finalUser);
}