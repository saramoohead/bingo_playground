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
                var possibleImages = Images.find({_id: {$nin: usedImageIds}, exclude: false}).fetch();
                // var possibleImages = Images2.find({_id: {$nin: usedImageIds}, organisation: organisation, isCropped: 1}).fetch();
                var imageId = Math.floor( Math.random() * possibleImages.length );
                var image = possibleImages[imageId];

                selectedImages.push(image);
                usedImageIds.push(image._id);
                // console.log("usedImageIds", usedImageIds);
            }
        
        // Replace the middle square with free space.
        if (freeSpaceImage) {
            selectedImages[12] = freeSpaceImage;
        }

        console.log("selectedImagesInsideBoardsAfterFreeSpace", selectedImages);

        Meteor.call("saveBoard", selectedImages);

        }

        // TODO: manipulate selectedImages for position 12 to be free space

    }
});

Template.boards.helpers({
    boardImages: function () {
        console.log("inside boardImages helper");

        var boardImages = Boards.find();

        if (boardImages) {
            console.log("Boards", boardImages);
            return boardImages;
        }

        // var boardImages = Boards.find();
        // var length = boardImages.fetch().length;
        // console.log("boardImages.fetch", boardImages.fetch());
        // console.log("boardImages.length", length);

        // var imageIds = [];
        // var imageId;

        // for (var i=0; i<length; i++) {


        //         imageId = boardImagesUnfetched[i]._id;

        //         imageIds.push(imageId);
        //         console.log("imageId", imageId);
        // }

        // var boardImages = Images2.find({_id: {$in: imageIds}});
        // console.log("boardImages", boardImages);
        // return boardImages;

    },
    pageBreak: function (index) {

        if (index % 2 !== 0) {
            return true;
        } else {
            return false;
        }
    }

});