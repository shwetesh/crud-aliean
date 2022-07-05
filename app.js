//const express = require ('express');
import express from "express";
import mongoose from "mongoose";
import emprouter from "./router/emp.js";

const url ='mongodb://mongohost/shwetadb'; //:27017

const app = express();
mongoose.connect(url,{useNewUrlParser:true});

app.use(express.json())
const con=mongoose.connection
con.on('open', () => console.log('mongodb connected...'))

app.use('/emp', emprouter)
app.listen(8000,() =>console.log('server started'));