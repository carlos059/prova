const express = require("express")
const routes = require("./rotas")

const serve = express()

serve.use(express.json())
serve.use(express.urlencoded({extended:true}))
serve.use(routes)

serve.listen(3000,()=>{
    console.log("Servidor em execução...")
})
