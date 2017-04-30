
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

    Template.check_winner.events({
        "submit .board_code": function(event) {
            event.preventDefault();

            var board_code = event.target.board_code.value;

            event.target.board_code.value = "";

            Session.set("boardCodeToCheck", board_code);
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

    Template.check_winner.helpers({
        checkForWinner: function () {
            console.log("inside check winner");
            var board_code = Session.get("boardCodeToCheck");
            console.log("board_code", board_code);
            var blackOut = [];

            function allTrue(element, index, array) {
                return element.exclude;
            }

            if(board_code) {
                var board = Boards.findOne({ code: board_code});

                console.log("board", board);
                var calledImagesInBoard = board.board.map(function(a) {return a.imageSRC;});
                console.log("calledImagesInBoard", calledImagesInBoard);

                var calledImages = Images.find(
                    {"imageSRC": { "$in": calledImagesInBoard }}).fetch();

                console.log("calledImages", calledImages);

                for (var i=0; i<25; i++) {
                    blackOut.push(calledImages[i]);
                }

                console.log("blackOut", blackOut);

                console.log("every", calledImagesInBoard.every(allTrue));
                if(blackOut.every(allTrue)) {
                    return "Winner!!";
            }
            }
            return "No Blackout Winner Yet";
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