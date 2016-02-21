Meteor.methods({

    excludeImage: function (thingToExclude) {
        Images.update({_id: thingToExclude._id}, {$set: {exclude: true}});
    },

    excludeNumber: function (thingToExclude) {
        Numbers.update({_id: thingToExclude._id}, {$set: {exclude: true}});
    },

    saveBoard: function (selectedImages) {
        var doesItExist = Boards.findOne({board: selectedImages});

        console.log("doesItExist", doesItExist);

        if (! doesItExist) {

            Boards.insert({
                board: selectedImages,
                createdAt: new Date()
            });

        }

        // var tryingToTestWithoutTests = Boards.findOne({board: selectedImages});
        // console.log("testingIsh_2DArray", tryingToTestWithoutTests);
    },

    resetImagesDatabase: function () {
        return Images.remove({});
    },

    resetNumbersDatabase: function () {
        return Numbers.remove({});
    },

    resetBoardsDatabase: function () {
        return Boards.remove({});
    },

    resetExcludes: function () {
        // var excludedImages = Images.find({exclude: true});
        // console.log("excludedImages", excludedImages, excludedImages.length);
        Images.update({exclude: true}, {$set: {exclude: false}}, {multi: true});
        Numbers.update({exclude: true}, {$set: {exclude: false}}, {multi: true});
    },

});
