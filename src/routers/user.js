import Express  from "express";




const router = Express.Router()

router.post('/create', (req,res)=>{
    res.send('Ruta de creacion de usuarios');
})



export default router