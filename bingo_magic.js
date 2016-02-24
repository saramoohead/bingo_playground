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

if (Meteor.isClient) {
  Meteor.subscribe("images");
  Meteor.subscribe("numbers");
  Meteor.subscribe("boards");

    Template.welcome.events({
        "click .play_bingo": function () {
            Meteor.call("resetExcludes");
        }
    });

    Template.boards.events({
        "submit .number_of_boards": function(event) {
            event.preventDefault();

            var numberOfBoards = event.target.numberOfBoards.value;

            console.log("numberOfBoardsInSubmitEvent", numberOfBoards);

            Session.set("numberOfBoards", numberOfBoards);

            event.target.numberOfBoards.value = "";
        },

        "click .make_board": function () {
            Meteor.call("resetBoardsDatabase");

            var numberOfBoards = Session.get("numberOfBoards");

            console.log("numberOfBoardsInsideMakeBoard", numberOfBoards);

            for (var n=0; n<numberOfBoards; n++) {

            var selectedImages = [];
            var usedImageIds = [];

                for (var i=0; i<25; i++) {
                    var possibleImages = Images.find({_id: {$nin: usedImageIds}}).fetch();
                    var imageId = Math.floor( Math.random() * possibleImages.length );
                    var image = possibleImages[imageId];

                    selectedImages.push(image);
                    usedImageIds.push(image._id);
                }

            Meteor.call("saveBoard", selectedImages);

            }

            // TODO: manipulate selectedImages for position 12 to be free space

        }
    });

    Template.boards.helpers({
        boardImages: function () {

            var boardImages = Boards.find().fetch();

            if (boardImages) {
                console.log("boardImages", boardImages);
                return boardImages;
            }
        },
        pageBreak: function (index) {

            if (index % 2 !== 0) {
                return true;
            } else {
                return false;
            }
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
