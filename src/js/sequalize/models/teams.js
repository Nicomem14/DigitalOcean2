const Model = Sequelize.Model;

class teams extends Model { }
teams.init({
    // component of the model.
}, {
        sequelize,
        modelName: 'teams'
        // options
    });