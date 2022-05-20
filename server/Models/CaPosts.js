module.exports = (sequelize, DataTypes) => {
    const CaPosts = sequelize.define('CaPosts', {
        post_type: {
            type: DataTypes.STRING(70),
            defaultValue: 'Text',
            allowNull: false,
        },
        post_title: {
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        post_description: {
            type: DataTypes.TEXT('LONG'),
            allowNull: false
        }
    })
    return CaPosts
}