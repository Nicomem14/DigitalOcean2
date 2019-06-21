const Model = Sequelize.Model;

class seasons extends Model { }
seasons.init({
    // component of the model.
}, {
        sequelize,
        modelName: 'seasons'
        // options
    });