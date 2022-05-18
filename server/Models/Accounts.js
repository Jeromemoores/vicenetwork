module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define('Accounts', {
        email: {
            type: DataTypes.STRING(70),
            allowNull: false,
            unique: true
        },
        auth: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1
        },
        token: {
            type: DataTypes.STRING(900)
        },
        password: {
            type: DataTypes.STRING(70),
            allowNull: false
        }
    })
    return Accounts
}