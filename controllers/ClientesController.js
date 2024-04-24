import express from "express"
const router = express.Router()
import Cliente from "../models/Cliente.js"
import { where } from "sequelize"

// ROTA CLIENTES
router.get("/clientes", (req, res) => {
    Cliente.findAll().then(clientes => {
        res.render("clientes", {
            clientes : clientes
        })
    })
})

//ROTA CADASTRO CLIENTE
router.post("/clientes/new", (req,res) => {
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco

    Cliente.create({
        nome : nome,
        cpf : cpf,
        endereco : endereco
    }).then(() => {
        res.redirect("/clientes")
    }).catch(erro => {
        console.log(erro)
    })
})

//ROTA DELETE
router.get("/clientes/delete/:id", (req,res) => {
    const id = req.params.id
    Cliente.destroy({
        where: {
            id : id
        }
    }).then(() => {
        res.redirect("/clientes")
    }).catch(erro => {
        console.log(erro)
    })
})

//ROTA EDITAR
router.get("/clientes/edit/:id", (req,res) => {
    //const id = req.params.id
})

// EXPORTANDO O MÓDULO DE ROTAS
export default router