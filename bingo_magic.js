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
        "click .make_board": function () {
            var selectedImages = [];
            var usedImageIds = [];

            for (var i=0; i<5; i++) {
                var possibleImages = Images.find({_id: {$nin: usedImageIds}}).fetch();
                var imageId = Math.floor( Math.random() * possibleImages.length );
                var image = possibleImages[imageId];

                selectedImages.push(image);
                usedImageIds.push(image._id);
            }

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
