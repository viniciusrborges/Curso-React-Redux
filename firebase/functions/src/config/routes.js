const express = require('express')

module.exports = function(server) {

    // API Routes: Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de Teste
    const Teste = require('../api/teste/testeService')
    Teste.register(router, '/testes')
}