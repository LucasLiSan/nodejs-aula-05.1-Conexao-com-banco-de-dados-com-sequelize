// Importando o Express com ES6 Modules
import express from 'express'
// Iniciando o Express na variável app
const app = express()
// Importando os Controllers (onde estão as rotas) 
import ClientesController from "./controllers/ClientesController.js" 
import ProdutosController from "./controllers/ProdutosController.js"
import PedidosController from "./controllers/PedidosController.js"  
import connection from './config/sequelize-config.js'

//Realiza conexao com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexão feita com sucesso!")
}).catch((error) => {
    console.log(error)
})

//criando o banco de dados se ele não exisitr
connection.query(`CREATE DATABASE IF NOT EXISTS loja;`).then(() => {
    console.log("Banco de dados criado.")
}).catch((error) => {
    console.log(error)
})

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))
//Configurando o Express para receber dados vindo de formulários
app.use(express.urlencoded({extended: false}))

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController)
app.use("/", PedidosController)
app.use("/", ProdutosController)

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})


// INICIA O SERVIDOR NA PORTA 8080
app.listen(4000,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})