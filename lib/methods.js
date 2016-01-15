Meteor.methods({

    getNewImage: function () {
        var array = Images.find().fetch();
        var randomIndex = Math.floor( Math.random() * array.length );
        var currentImageSRC = array[randomIndex];

        if (currentImageSRC) {
            console.log("inside exclude attempt");
            console.log(currentImageSRC, currentImageSRC._id);
            // Meteor.call("excludeImage", currentImageSRC._id);
            return currentImageSRC;
        }


    },

    excludeImage: function (currentImageId) {
            var image = Images.findOne({}, {_id: currentImageId});
            Images.update(image, {$set: {exclude: true}});
    },

    resetImageDatabase: function () {
        return Images.remove({});
    },

    insertImages: function () {
        Images.insert({
            imageName: 'Sheep',
            imageSRC: '<img class="animal" src="sheep.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Frog',
            imageSRC: '<img class="animal" src="frog.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Bug',
            imageSRC: '<img class="animal" src="bug.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Butterfly',
            imageSRC: '<img class="animal" src="butterfly.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Cow',
            imageSRC: '<img class="animal" src="cow.png">',
            category: 'Farm',
            exclude: false
        });
    }



});