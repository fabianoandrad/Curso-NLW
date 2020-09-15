// servidor
const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses} = require("./pages")

// Configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true,  
})


//inicio e configuração do servidor
server
// Configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aploicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

//start do servidor
.listen(5500)
