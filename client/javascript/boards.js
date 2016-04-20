Template.boards.created = function () {
    Tracker.autorun(function() {
        Meteor.subscribe('images2');
    });
};

Template.boards.events({
    "submit .number_of_boards": function(event) {
        event.preventDefault();

        var number_of_boards = event.target.number_of_boards.value;
        var organisation = Session.get("organisation");

        event.target.number_of_boards.value = "";

        Meteor.call("resetBoardsDatabase");

        for (var n=0; n<number_of_boards; n++) {

        var selectedImages = [];
        var usedImageIds = [];

            for (var i=0; i<25; i++) {
                var possibleImages = Images2.find().fetch();
                // var possibleImages = Images2.find({_id: {$nin: usedImageIds}, organisation: organisation, isCropped: 1}).fetch();
                var imageId = Math.floor( Math.random() * possibleImages.length );
                var image = possibleImages[imageId];

                selectedImages.push(image);
                usedImageIds.push(image._id);
                console.log("usedImageIds", usedImageIds);
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