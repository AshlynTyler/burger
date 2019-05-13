

const connection = require("./connection");

const mysql = require("mysql");


var orm = {

    selectAll: function(params){
        connection.query("select * from burgers where ?","burgers",params,function(err,res){
            if(err)
                throw err;

            return res
        })
    },

    insertOne: function(params){
        connection.query("insert into burgers (burger_name,devoured) values (?,1)",params,function(err,res){
            if(err)
                throw err;
        })
    },

    updateOne(params){
        connection.query("update burgers set devoured = 0 where id = ?",params,function(err,res){
            if(err)
                throw err;
        })
    }
}

module.exports = orm;