const Model = Sequelize.Model;

class leagues extends Model { }
leagues.init({
    // component of the model.
}, {
        sequelize,
        modelName: 'leagues'
        // options
    });
