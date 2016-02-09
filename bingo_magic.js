Images = new Mongo.Collection("images");
Numbesr = new Mongo.Collection("numbers");

if (Meteor.isClient) {
  Meteor.subscribe("images");
  Meteor.subscribe("numbers");

    Template.next_call.events({
        "click .next_button": function() {

        // ANIMALS
        var gameCategory = Session.get("gameCategory");

        var array = Images.find({category: gameCategory, exclude: false}).fetch();
        console.log("array", array.length, array);
        var randomIndex = Math.floor( Math.random() * array.length );
        var currentImageSRC = array[randomIndex];

        // if (currentImageSRC) {
            // console.log("Step 1 inside click next", currentImageSRC);
            Meteor.call("excludeImage", currentImageSRC);
            // console.log("Step 2 inside click next", currentImageSRC);
            Session.set("currentImage", currentImageSRC);
            // console.log("Step 3 inside click next", currentImageSRC);


        // NUMBERS
        var N = 76;
        var bingoNumbers = Array.apply(null, {length: N}).map(Number.call, Number);
        bingoNumbers.shift();
        console.log("bingoNumbers", bingoNumbers);

        randomIndex = Math.floor( Math.random() * bingoNumbers.length );
        var firstNumber = bingoNumbers[randomIndex];

        console.log("firstNumber", firstNumber);
        var index = bingoNumbers.indexOf(firstNumber);
        bingoNumbers.splice(index, 1);


        randomIndex = Math.floor( Math.random() * bingoNumbers.length );
        var secondNumber = bingoNumbers[randomIndex];

        console.log("secondNumber", secondNumber);
        index = bingoNumbers.indexOf(secondNumber);
        bingoNumbers.splice(index, 1);
        console.log("bingoNumbersAfter", bingoNumbers);

        Session.set("firstNumber", firstNumber);
        Session.set("secondNumber", secondNumber);

        Session.set("bingoNumbers", bingoNumbers);
        console.log(Session.get("bingoNumbers"));

        return currentImageSRC, firstNumber, secondNumber;
        // }
        }
    });

    Template.new_game.events({
        "click .new_farm": function() {
            Meteor.call("resetExcludes");
            Session.set("gameCategory", "Farm");
        },
        "click .new_jungle": function() {
            Meteor.call("resetExcludes");
            Session.set("gameCategory", "Jungle");
        },
        "click .new_sweets": function() {
            Meteor.call("resetExcludes");
            Session.set("gameCategory", "Sweets");
        }
    });

    Template.animal_bingo.helpers({
        currentImageSRC: function () {

            var displayImage = Session.get("currentImage");
            return displayImage;

        }
    });

    Template.numbers_bingo.helpers({
        firstNumber: function () {

            var firstNumber = Session.get("firstNumber");
            return firstNumber;

        },
        secondNumber: function () {
            var secondNumber = Session.get("secondNumber");
            return secondNumber;
        }
    });

    Template.called_animals.helpers({
        calledImages: function () {
            var calledImages = Images.find({ exclude: true });
            if (calledImages) {
                return calledImages;
            }
        }
    });

}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
    console.log("resettingImageDatabase");
    Meteor.call("resetImageDatabase");
    Meteor.call("insertImages");

  });
}
