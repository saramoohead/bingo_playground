
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

        }
    });

    Template.called.helpers({
        calledImages: function () {
            var calledImages = Images.find({ exclude: true });
            if (calledImages) {
                return calledImages;
            }
        },
        calledNumbers: function () {
            var calledNumbers = Numbers.find({ exclude: true }, { sort: { number: 1 } });
            if (calledNumbers) {
                return calledNumbers;
            }
        }
    });