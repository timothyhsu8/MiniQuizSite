import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user.js'

export const getUsers = async (req, res) => {
    try {
        console.log("Attempted Get")
        const user = User.find();

        res.status(200).json(user);
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