Meteor.methods({

    excludeImage: function (thingToExclude) {
        // console.log("Image parameter", thingToExclude._id);
        Images.update({_id: thingToExclude._id}, {$set: {exclude: true}});
        // console.log("Parameter after", thingToExclude);
    },

    excludeNumber: function (thingToExclude) {
        // console.log("Number parameter", thingToExclude._id);
        Numbers.update({_id: thingToExclude._id}, {$set: {exclude: true}});
        // console.log("Parameter after", thingToExclude);
    },

    resetImagesDatabase: function () {
        return Images.remove({});
    },

    resetNumbersDatabase: function () {
        return Numbers.remove({});
    },

    resetExcludes: function () {
        // var excludedImages = Images.find({exclude: true});
        // console.log("excludedImages", excludedImages, excludedImages.length);
        Images.update({exclude: true}, {$set: {exclude: false}}, {multi: true});
        Numbers.update({exclude: true}, {$set: {exclude: false}}, {multi: true});
    },

});
