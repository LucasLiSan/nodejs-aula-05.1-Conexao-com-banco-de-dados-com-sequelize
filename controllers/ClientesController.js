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
    const id = req.params.id
    Cliente.findByPk(id).then(cliente => {
        res.render("clientesEdit", {
            cliente : cliente
        })
    }).catch(erro => {
        console.log(erro)
    })
})

// ROTA DE ALTERAÇÃO DO CLIENTE
router.post ("/clientes/update/:id", (req, res) => {
    const id = req.body.id
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Cliente.update(
        {
            nome : nome,
            cpf : cpf,
            endereco : endereco
        },
        {where: {id : id}}
    ).then(() => {
        res.redirect("/clientes")
    }).catch(erro => {
        console.log(erro)
    })
})

// EXPORTANDO O MÓDULO DE ROTAS
export default router