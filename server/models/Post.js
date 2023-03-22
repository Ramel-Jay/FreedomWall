module.exports = (sequelize, DataType) => {
    const Post = sequelize.define("Post", {
        username: {
            type: DataType.STRING,
            allowNull: false,
        },
        message: {
            type: DataType.STRING,
            allowNull: false,
        }
    });
    return Post;
}