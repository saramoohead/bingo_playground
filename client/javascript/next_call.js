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
        // First Number
        var numbersArray = Numbers.find({exclude: false}).fetch();
        // console.log("numbersArray", numbersArray);

        var randomNumbersIndex = Math.floor( Math.random() * numbersArray.length );
        var firstNumber = numbersArray[randomNumbersIndex];
        // console.log("firstNumber", firstNumber);
        // console.log("numbersArray length", numbersArray.length);
        Meteor.call("excludeNumber", firstNumber);

        // Second Number
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