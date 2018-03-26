const Teste = require('./teste')
//const errorHandler = require('../common/errorHandler')

Teste.methods(['get', 'post', 'put', 'delete'])
Teste.updateOptions({new: true, runValidators: true})
//Teste.after('post', errorHandler).after('put', errorHandler)

/*Teste.route('count', (req, res, next) => {
    Teste.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

Teste.route('summary', (req, res, next) => {
    //res.send('teste ok')
    Teste.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})*/

module.exports = Teste