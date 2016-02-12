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

            var possibleImages = Images.find().fetch();
            console.log("possibleImages", possibleImages);
            var imageIdx = Math.floor( Math.random() * possibleImages.length );
            var image = possibleImages[imageIdx];
            selectedImages.push(image);
            console.log("imageIdx", imageIdx);
            console.log("image", image);

            imageIdx = Math.floor( Math.random() * possibleImages.length );
            image = possibleImages[imageIdx];
            selectedImages.push(image);
            console.log("imageIdx", imageIdx);
            console.log("image", image);
            console.log("selectImages", selectedImages);
            Session.set("boardImages", selectedImages);
            console.log("sessionImages");
            console.log(Session.get("boardImages"));
        }
    });

    Template.boards.helpers({
        boardImages: function () {
            var boardImages = Session.get("boardImages");
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
