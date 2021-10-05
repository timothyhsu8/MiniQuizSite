import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user.js'

export const getUsers = (req, res) => {
    try {
        User.find({}, function(err, users) {
            var userMap = {};
        
            users.forEach(function(user) {
              userMap[user._id] = user;
            });

            console.log(userMap)
            res.send(userMap);  
          });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createUser = (req, res) => {
    const { name, score } = req.body;

    const newUser= new User({ name, score })

    try {
        newUser.save();

        res.status(201).json(newUser );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}