module.exports = (sequelize, DataTypes) => {
    const NyPosts = sequelize.define('NyPosts', {
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
        },
        post_picture: {
            type: DataTypes.TEXT('LONG'),
            allowNull: true
        }
    })
    return NyPosts
}