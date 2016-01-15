Meteor.methods({

    excludeImage: function (currentImage) {
            console.log("Image parameter", currentImage._id);
            Images.update({_id: currentImage._id}, {$set: {exclude: true}});
            console.log("Image After", currentImage);
    },

    resetImageDatabase: function () {
        return Images.remove({});
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


    }
});