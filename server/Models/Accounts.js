module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define('Accounts', {
        email: {
            type: DataTypes.STRING(70),
            allowNull: false,
            unique: true
        },
        account_data: {
            type: DataTypes.TEXT('long'),
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
            defaultValue: '{"Guest"}'
        },
        password: {
            type: DataTypes.STRING(70),
            allowNull: false
        }
    })
    return Accounts
}