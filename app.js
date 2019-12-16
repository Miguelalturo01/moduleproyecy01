const saludar = require('./saludar')
const saludar_param = require('./saludar_param')
const operaciones =require('./operaciones')
console.log(saludar());
console.log(saludar_param('David!'))
console.log(operaciones.restar(2,3))
console.log(operaciones.sumar(2,3))
console.log(operaciones.dividir(2,3))
console.log(operaciones.multiplicar(2,3))