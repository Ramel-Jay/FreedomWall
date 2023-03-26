module.exports = (sequelize, DataType) => {
    const Post = sequelize.define("Post", {
        dear: {
            type: DataType.STRING,
            allowNull: false,
        },
        message: {
            type: DataType.STRING,
            allowNull: false,
        },
        from: {
            type: DataType.STRING,
            allowNull: false,
        },
    });
    return Post;
}