module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define('Application', {
        application_group: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        application_type: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        application_data: {
            type: DataTypes.JSON(),
            allowNull: false,
            defaultValue: '{}'
        },
        application_status: {
            type: DataTypes.STRING(70),
            allowNull: false,
            defaultValue: 'Pending'
        }
    })
    return Application
}