import express from 'express'
const router = express.Router()
import Pedidos from '../models/Pedido.js'

// ROTA PEDIDOS
router.get("/pedidos", (req, res) => {
    Pedidos.findAll().then(pedidos => {
        res.render("pedidos", {
            pedidos : pedidos
        })
    })
})

export default router