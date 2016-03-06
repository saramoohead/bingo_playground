Images = new Mongo.Collection("images");
Numbers = new Mongo.Collection("numbers");
Boards = new Mongo.Collection("boards");

Router.route("/", {
    template: "welcome"
});

Router.route("bingo", {
    template: "bingo_game"
});

Router.route("boards", {
    template: "boards"
});

Router.route("upload", {
    template: "upload"
});

if (Meteor.isClient) {
  Meteor.subscribe("images");
  Meteor.subscribe("numbers");
  Meteor.subscribe("boards");

    Template.welcome.events({
        "click .call_bingo": function () {
            Meteor.call("resetExcludes");
            Session.set("currentImage", "");
            Session.set("firstNumber", "");
            Session.set("secondNumber", "");
        }
    });

    Template.bingo_game.events({
        "click .call_bingo": function () {
            Meteor.call("resetExcludes");
            Session.set("currentImage", "");
            Session.set("firstNumber", "");
            Session.set("secondNumber", "");
        }
    });

}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
    // console.log("resettingDatabases");
    Meteor.call("resetImagesDatabase");
    Meteor.call("resetNumbersDatabase");
    Meteor.call("resetBoardsDatabase");
    Meteor.call("insertImages");
    Meteor.call("insertNumbers");

  });
}
