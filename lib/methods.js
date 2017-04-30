Meteor.methods({

    excludeImage: function (thingToExclude) {
        Images.update({_id: thingToExclude._id}, {$set: {exclude: true}});
    },

    excludeNumber: function (thingToExclude) {
        Numbers.update({_id: thingToExclude._id}, {$set: {exclude: true}});
    },

    saveBoard: function (selectedImages) {
        var doesItExist = Boards.findOne({board: selectedImages});

        // console.log("doesItExist", doesItExist);

        if (! doesItExist) {

            Boards.insert({
                board: selectedImages,
                createdAt: new Date(),
                code: 'B1280' + Boards.find().count()
            });

        }
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
        Images.update({exclude: true}, {$set: {exclude: false}}, {multi: true});
        Images.update({imageName: "freespace"}, {$set: {exclude: true}});
        Numbers.update({exclude: true}, {$set: {exclude: false}}, {multi: true});
    }
});
