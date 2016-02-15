Images = new Mongo.Collection("images");
Numbers = new Mongo.Collection("numbers");

Router.route("/", {
    template: "welcome"
});

Router.route("bingo", {
    template: "bingo_game"
});

Router.route("boards", {
    template: "boards"
});

if (Meteor.isClient) {
  Meteor.subscribe("images");
  Meteor.subscribe("numbers");

    Template.welcome.events({
        "click .lets_play": function () {
            Meteor.call("resetExcludes");
        }
    });

    Template.boards.events({
        "submit .number_of_boards": function(event) {
            event.preventDefault();

            var numberOfBoards = event.target.numberOfBoards.value;

            Session.set("numberOfBoards", numberOfBoards);

            event.target.numberOfBoards.value = "";
        },

        "click .make_board": function () {
            var numberOfBoards = Session.get("numberOfBoards");

            var selectedImages = [];
            var usedImageIds = [];

            for (var i=0; i<25; i++) {
                var possibleImages = Images.find({_id: {$nin: usedImageIds}}).fetch();
                var imageId = Math.floor( Math.random() * possibleImages.length );
                var image = possibleImages[imageId];

                selectedImages.push(image);
                usedImageIds.push(image._id);
            }

            // TODO: manipulate selectedImages for position 12 to be free space

            Session.set("selectedImages", selectedImages);
        }
    });

    Template.boards.helpers({
        boardImages: function () {
            var boardImages = Session.get("selectedImages");
            return boardImages;
        }
    });

}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
    // console.log("resettingDatabases");
    Meteor.call("resetImagesDatabase");
    Meteor.call("resetNumbersDatabase");
    Meteor.call("insertImages");
    Meteor.call("insertNumbers");

  });
}
