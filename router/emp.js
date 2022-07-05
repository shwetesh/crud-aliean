import express from "express";
import Alien from '../models/alien.js';
const router = express.Router();


router.get('/', async(req,res)=>{
    try{
        const aliens=await Alien.find();
        res.json(aliens);
    }
    catch(err){
        res.send('error'+err)
    }
} );

router.get('/:id', async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id);
        res.json(alien);
    }
    catch(err){
        res.send('error'+err)
    }
} );

router.post('/',async(req,res)=>{
    const alien=new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub

    })
    try {
        const a1=await alien.save()
        res.json(a1)
    }
    catch(err){res.send("Error")}
})

router.delete('/:id',async(req,res)=>{
    
    try{
        const alien=await Alien.findById(req.params.id);
        await alien.delete();
        res.json(alien);
    }
    catch(err){
        res.send("error");
    }
})
export default router;
