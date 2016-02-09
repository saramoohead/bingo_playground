Meteor.methods({

    excludeImage: function (thingToExclude) {
        console.log("Image parameter", thingToExclude._id);
        Images.update({_id: thingToExclude._id}, {$set: {exclude: true}});
        console.log("Parameter after", thingToExclude);
    },

    excludeNumber: function (thingToExclude) {
        console.log("Number parameter", thingToExclude._id);
        Numbers.update({_id: thingToExclude._id}, {$set: {exclude: true}});
        console.log("Parameter after", thingToExclude);
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
    },

    insertImages: function () {
        // FARM IMAGES
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



        // SWEETS BINGO
        Images.insert({
            imageName: 'Gingerbread',
            imageSRC: '<img class="animal" src="gingerbread.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Swirl Lollipop',
            imageSRC: '<img class="animal" src="swirl_lollipop.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Gummy Bears',
            imageSRC: '<img class="animal" src="gummy_bears.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Milkshake',
            imageSRC: '<img class="animal" src="milkshake.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Peppermint',
            imageSRC: '<img class="animal" src="peppermint.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Candy Corn',
            imageSRC: '<img class="animal" src="candy_corn.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Stick Gum',
            imageSRC: '<img class="animal" src="stick_gum.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Red Licorice',
            imageSRC: '<img class="animal" src="red_licorice.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Cake',
            imageSRC: '<img class="animal" src="cake.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Cookie',
            imageSRC: '<img class="animal" src="cookie.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Life Savers',
            imageSRC: '<img class="animal" src="life_savers.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Sundae',
            imageSRC: '<img class="animal" src="sundae.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Donut',
            imageSRC: '<img class="animal" src="donut.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Candy Necklace',
            imageSRC: '<img class="animal" src="candy_necklace.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Cupcake',
            imageSRC: '<img class="animal" src="cupcake.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Chocolate Bar',
            imageSRC: '<img class="animal" src="chocolate_bar.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Gum Balls',
            imageSRC: '<img class="animal" src="gum_balls.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Peanut Butter Cups',
            imageSRC: '<img class="animal" src="peanut_butter_cups.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Jelly Beans',
            imageSRC: '<img class="animal" src="jelly_beans.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Chocolate Pie',
            imageSRC: '<img class="animal" src="chocolate_pie.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Ice Cream Sandwich',
            imageSRC: '<img class="animal" src="ice_cream_sandwich.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Ice Cream',
            imageSRC: '<img class="animal" src="ice_cream.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Hard Candy',
            imageSRC: '<img class="animal" src="hard_candy.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Lollipop',
            imageSRC: '<img class="animal" src="lollipop.png">',
            category: 'Sweets',
            exclude: false
        });
        Images.insert({
            imageName: 'Candy Cane',
            imageSRC: '<img class="animal" src="candy_cane.png">',
            category: 'Sweets',
            exclude: false
        });

        // JUNGLE
        Images.insert({
            imageName: 'Zebra',
            imageSRC: '<img class="animal" src="zebra.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Turtle',
            imageSRC: '<img class="animal" src="turtle_jungle.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Bird',
            imageSRC: '<img class="animal" src="bird_jungle.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Snake',
            imageSRC: '<img class="animal" src="snake.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Panda',
            imageSRC: '<img class="animal" src="panda.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Lion',
            imageSRC: '<img class="animal" src="lion.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Monkey',
            imageSRC: '<img class="animal" src="monkey.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Rhino',
            imageSRC: '<img class="animal" src="rhino.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Fish',
            imageSRC: '<img class="animal" src="fish.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Palm Tree',
            imageSRC: '<img class="animal" src="palm_tree.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Hippo',
            imageSRC: '<img class="animal" src="hippo.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Safari Hat',
            imageSRC: '<img class="animal" src="safari_hat.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Giraffe',
            imageSRC: '<img class="animal" src="giraffe.png">',
            category: 'Jungle',
            exclude: false
        });
         Images.insert({
            imageName: 'Frog',
            imageSRC: '<img class="animal" src="frog_jungle.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Flower',
            imageSRC: '<img class="animal" src="flower.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Camera',
            imageSRC: '<img class="animal" src="camera.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Tiger',
            imageSRC: '<img class="animal" src="tiger.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Coconut',
            imageSRC: '<img class="animal" src="coconut.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Butterfly',
            imageSRC: '<img class="animal" src="butterfly_jungle.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Elephant',
            imageSRC: '<img class="animal" src="elephant.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Bug',
            imageSRC: '<img class="animal" src="bug_jungle.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Binoculars',
            imageSRC: '<img class="animal" src="binoculars.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Lizard',
            imageSRC: '<img class="animal" src="lizard.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Banana',
            imageSRC: '<img class="animal" src="banana.png">',
            category: 'Jungle',
            exclude: false
        });
        Images.insert({
            imageName: 'Alligator',
            imageSRC: '<img class="animal" src="alligator.png">',
            category: 'Jungle',
            exclude: false
        });
    },

    insertNumbers: function () {
        Numbers.insert({
            number: 1,
            numberCall: 'At the beginning',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 2,
            numberCall: 'One little duck (QUACK!)',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 3,
            numberCall: 'One little flea',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 4,
            numberCall: 'Knock at the door',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 5,
            numberCall: 'Man alive',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 6,
            numberCall: 'Half a dozen',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 7,
            numberCall: 'David Beckham',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 8,
            numberCall: 'She\'s always late',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 9,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 10,
            numberCall: 'David\'s Den',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 11,
            numberCall: 'Legs Eleven',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 12,
            numberCall: 'One dozen',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 13,
            numberCall: 'Unlucky for some',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 14,
            numberCall: 'Valentine\'s Day',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 15,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 16,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 17,
            numberCall: 'Dancing Queen',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 18,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 19,
            numberCall: 'Goodbye teens',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 20,
            numberCall: 'One score',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 21,
            numberCall: 'Key of the door',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 22,
            numberCall: 'Two little ducks',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 23,
            numberCall: 'A duck and a flea',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 24,
            numberCall: 'Two dozen',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 25,
            numberCall: 'Duck and dive',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 26,
            numberCall: 'Half a crown',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 27,
            numberCall: 'Duck and a crutch',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 28,
            numberCall: 'A duck and its mate',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 29,
            numberCall: 'Rise and shine',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 30,
            numberCall: 'Your face is dirty',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 31,
            numberCall: 'Get up and run',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 32,
            numberCall: 'Buckle my shoe',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 33,
            numberCall: 'All the threes',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 34,
            numberCall: 'Ask for more',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 35,
            numberCall: 'Jump and jive',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 36,
            numberCall: 'Three dozen',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 37,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 38,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 39,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 40,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 41,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 42,
            numberCall: 'Pikachu',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 43,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 44,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 45,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 46,
            numberCall: 'Up to tricks',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 47,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 48,
            numberCall: 'Four dozen',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 49,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 50,
            numberCall: 'Bullseye',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 51,
            numberCall: 'I love my mum!',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 52,
            numberCall: 'Chicken vindaloo',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 53,
            numberCall: 'Here comes Herbie',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 54,
            numberCall: 'Clean the floor',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 55,
            numberCall: 'Snakes alive',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 56,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 57,
            numberCall: 'Catch up!',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 58,
            numberCall: 'Make them wait',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 59,
            numberCall: 'The Brighton Line',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 60,
            numberCall: 'Five dozen',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 61,
            numberCall: 'Baker\'s bun',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 62,
            numberCall: 'Tickety-boo',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 63,
            numberCall: 'Tickle me',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 64,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 65,
            numberCall: 'Stop work',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 66,
            numberCall: 'Clickety click',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 67,
            numberCall: '',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 68,
            numberCall: 'Saving grace',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 69,
            numberCall: 'The same both ways',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 70,
            numberCall: 'Three score and ten',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 71,
            numberCall: 'Bang on the drum',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 72,
            numberCall: 'Six dozen',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 73,
            numberCall: 'Queen bee',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 74,
            numberCall: 'Dumbledore',
            category: 'Number',
            exclude: false
        });
        Numbers.insert({
            number: 75,
            numberCall: 'End of the line',
            category: 'Number',
            exclude: false
        });
    },
});
