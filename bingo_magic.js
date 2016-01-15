Images = new Mongo.Collection('images');

if (Meteor.isClient) {
  Meteor.subscribe("images");

    Template.next_call.events({
        "click .next_button": function() {

        var array = Images.find().fetch();
        console.log("Array length", array.length);
        var randomIndex = Math.floor( Math.random() * array.length );
        var currentImageSRC = array[randomIndex];

        if (currentImageSRC) {
            Session.set("currentImage", currentImageSRC);
            return currentImageSRC;
        }


        }
    });

    Template.animal_bingo.helpers({
        currentImageSRC: function () {

            var displayImage = Session.get("currentImage");
            return displayImage;

        }
    });


}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.call("resetImageDatabase");
    Meteor.call("insertImages");

  });
}
