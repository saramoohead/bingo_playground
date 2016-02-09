Images = new Mongo.Collection("images");
Numbers = new Mongo.Collection("numbers");

if (Meteor.isClient) {
  Meteor.subscribe("images");
  Meteor.subscribe("numbers");

    Template.next_call.events({
        "click .next_button": function() {

        // ANIMALS
        var gameCategory = Session.get("gameCategory");

        var imagesArray = Images.find({category: gameCategory, exclude: false}).fetch();
        // console.log("array", imagesArray.length, imagesArray);
        var randomIndex = Math.floor( Math.random() * imagesArray.length );
        var currentImageSRC = imagesArray[randomIndex];

        // console.log("Step 1 inside click next", currentImageSRC);
        Meteor.call("excludeImage", currentImageSRC);
        // console.log("Step 2 inside click next", currentImageSRC);
        Session.set("currentImage", currentImageSRC);
        // console.log("Step 3 inside click next", currentImageSRC);


        // NUMBERS FROM DATABASE
        var numbersArray = Numbers.find({exclude: false}).fetch();
        // console.log("numbersArray", numbersArray);

        var randomNumbersIndex = Math.floor( Math.random() * numbersArray.length );
        var firstNumber = numbersArray[randomNumbersIndex];
        // console.log("firstNumber", firstNumber);
        // console.log("numbersArray length", numbersArray.length);
        Meteor.call("excludeNumber", firstNumber);


        numbersArray = Numbers.find({exclude: false}).fetch();
        randomNumbersIndex = Math.floor( Math.random() * numbersArray.length );
        var secondNumber = numbersArray[randomNumbersIndex];
        // console.log("secondNumber", secondNumber);
        // console.log("numbersArray length", numbersArray.length);
        Meteor.call("excludeNumber", secondNumber);

        Session.set("firstNumber", firstNumber);
        Session.set("secondNumber", secondNumber);

        return currentImageSRC, firstNumber, secondNumber;

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
    // console.log("resettingDatabases");
    Meteor.call("resetImagesDatabase");
    Meteor.call("resetNumbersDatabase");
    Meteor.call("insertImages");
    Meteor.call("insertNumbers");

  });
}
