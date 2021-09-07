const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            // Validates that the value is a decimal
            validate: {
                isDecimal: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // Set a default value of 10.
            defaultValue: 10,
            // Validates that the value is numeric.
            validate: {
                isNumeric: true
            }

        },
        // category_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //       model: 'category',
        //       key: 'id',
        //     },
        //   },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
)

module.exports = Product;