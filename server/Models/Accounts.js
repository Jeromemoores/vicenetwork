const CaPosts = require('./CaPosts')
module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define('Accounts', {
        email: {
            type: DataTypes.STRING(70),
            allowNull: false,
            unique: true
        },
        account_data: {
            type: DataTypes.JSON(),
            allowNull: true,
            defaultValue: '{}'
        },
        token: {
            type: DataTypes.STRING(400)
        },
        auth: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1
        },
        roles: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
            defaultValue: '{"roles" : "Guest"}'
        },
        password: {
            type: DataTypes.STRING(70),
            allowNull: false
        }
    })
    Accounts.associate = models => {
        Accounts.hasMany(models.CaPosts, {
            foreignKey: "account_Id",
            onUpdate: "cascade",
            onDelete: "cascade",
        })
        Accounts.hasMany(models.NyPosts, {
            foreignKey: "account_Id",
            onUpdate: "cascade",
            onDelete: "cascade"
        })
    }
    return Accounts
}