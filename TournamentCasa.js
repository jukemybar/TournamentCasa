Players = new Meteor.Collection("Players");


//Players.remove({});
//Tournament.insert({Category:"Billard", players:[{pos:"1", firstName:"Nicolas", lastName:"Gumy", points:"12"},{pos:"2", firstName:"Fabrice", lastName:"Clerc", points:"14"}]})

if (Meteor.isClient) {



    Template.listPlayers.Players = function() {
        return Players.find({}, {
            sort: {
                Name: 1
            }
        });
    }

Template.listPlayers.Players_with_index = Players.find().map(function(document, index){
    document.index = index;
    return document;
});





    //AddPlayer
    Template.new_player.events = {
        'click input.add': function() {
            var new_player_firstName = document.getElementById("new_player_firstName").value;
            var new_player_lastName = document.getElementById("new_player_lastName").value;
            var new_player_score = document.getElementById("new_player_score").value;


            Players.insert({
                Name: new_player_firstName,
                lastName: new_player_lastName,
                score: new_player_score
            });
        }
    }









} // End isClient









if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
} // End isServer
