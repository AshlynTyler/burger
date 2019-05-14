const orm = require("./../config/orm");


const burger = {
    selectAllBurgers: function(){
        orm.selectAll("");
    },

    createBurger: function(burgerName){
        orm.insertOne(burgerName);
    },

    eatBurger: function(id){
        orm.updateOne(id)
    }
}


module.exports = burger;