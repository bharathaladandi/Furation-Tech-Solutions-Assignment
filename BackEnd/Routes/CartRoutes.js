const express = require("express");
const Cart = require("../models/CartModel");
const CartRouter = express.Router();


CartRouter.get("/", async(req, res) => {

    try {
        
        let cart = await Cart.find();

        res.status(200).send(cart);

    } catch (error) {
        console.log(error.message);
    }

});


CartRouter.post("/", async(req, res) => {

    try {

        let cart = new Cart.create(req.body);

        res.status(200).send(cart);

        console.log("Post Cart Successfull");
        
    } catch (error) {
        
        console.log(error.message);
    }

});

module.exports = {CartRouter};