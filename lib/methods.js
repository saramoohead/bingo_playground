Meteor.methods({


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
        Images.insert({
            imageName: 'Barn',
            imageSRC: '<img class="animal" src="barn.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Barn Cat',
            imageSRC: '<img class="animal" src="barn_cat.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Carrot',
            imageSRC: '<img class="animal" src="carrot.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Duck',
            imageSRC: '<img class="animal" src="duck.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Farmer',
            imageSRC: '<img class="animal" src="farmer.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Eggs',
            imageSRC: '<img class="animal" src="eggs.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Bee',
            imageSRC: '<img class="animal" src="bee.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Corn',
            imageSRC: '<img class="animal" src="corn.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Chick',
            imageSRC: '<img class="animal" src="chick.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Pig',
            imageSRC: '<img class="animal" src="pig.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Owl',
            imageSRC: '<img class="animal" src="owl.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Goat',
            imageSRC: '<img class="animal" src="goat.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Fence',
            imageSRC: '<img class="animal" src="fence.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Pitchfork',
            imageSRC: '<img class="animal" src="pitchfork.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Horse',
            imageSRC: '<img class="animal" src="horse.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Rabbit',
            imageSRC: '<img class="animal" src="rabbit.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Sun',
            imageSRC: '<img class="animal" src="sun.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Rooster',
            imageSRC: '<img class="animal" src="rooster.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Swan',
            imageSRC: '<img class="animal" src="swan.png">',
            category: 'Farm',
            exclude: false
        });
        Images.insert({
            imageName: 'Turtle',
            imageSRC: '<img class="animal" src="turtle.png">',
            category: 'Farm',
            exclude: false
        });
    }



});