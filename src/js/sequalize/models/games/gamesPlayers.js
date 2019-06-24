const Model = Sequelize.Model;

class gamesPlayers extends Model { }
gamesPlayers.init({
    // component of the model.
}, {
        sequelize,
        modelName: 'gamesPlayers'
        // options
    });
