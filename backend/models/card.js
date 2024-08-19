const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Card = sequelize.define('Card', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'cards',
    timestamps: false,
});

module.exports = Card;
