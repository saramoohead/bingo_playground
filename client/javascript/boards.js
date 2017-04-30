Template.boards.created = function () {
    Tracker.autorun(function() {
        Meteor.subscribe('images2');
        Meteor.subscribe('boards');
    });
};

Template.boards.events({
    "submit .number_of_boards": function(event) {
        event.preventDefault();

        console.log("inside submit number of boards");
        var number_of_boards = event.target.number_of_boards.value;
        var organisation = Session.get("organisation");

        event.target.number_of_boards.value = "";

        Meteor.call("resetBoardsDatabase");

        for (var n=0; n<number_of_boards; n++) {

        var selectedImages = [];
        var usedImageIds = [];
        var freeSpaceImage = Images.findOne({imageName: 'freespace'});

        console.log('freeSpaceImage', freeSpaceImage);

        // Loop through getting a random image 25 times to fill board
            for (var i=0; i<25; i++) {
                var possibleImages = Images.find({_id: {$nin: usedImageIds}, imageName: {$nin: ["freespace"]}}).fetch();

                var imageId = Math.floor( Math.random() * possibleImages.length );
                var image = possibleImages[imageId];

                selectedImages.push(image);
                usedImageIds.push(image._id);
            }
        
        // Replace the middle square with free space.
        if (freeSpaceImage) {
            selectedImages[12] = freeSpaceImage;
        }

        console.log("selectedImagesInsideBoardsAfterFreeSpace", selectedImages);

        Meteor.call("saveBoard", selectedImages);

        }

    }
});

Template.boards.helpers({
    boardImages: function () {
        console.log("inside boardImages helper");

        var boardImages = Boards.find();

        if (boardImages) {
            // console.log("Boards", boardImages);
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