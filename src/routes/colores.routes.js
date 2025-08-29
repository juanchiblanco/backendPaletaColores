import { Router } from "express";

const router = Router()

router.use('/test',(req,res)=>{
    res.status(200)
    res.send('Primera prueba desde Backend')
})

router.route('/')
router.route('/:id')

export default router;