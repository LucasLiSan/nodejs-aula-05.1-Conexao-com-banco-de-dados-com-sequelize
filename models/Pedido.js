import Sequelize from 'sequelize'
import connection from '../config/sequelize-config.js'

const Pedidos = connection.define('Pedidos', {
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    icon: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Pedidos.sync({force:false})
export default Pedidos