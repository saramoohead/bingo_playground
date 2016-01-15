Images = new Mongo.Collection('images');

if (Meteor.isClient) {
  Meteor.subscribe("images");

    Template.next_call.events({
        "click .next_button": function() {

        var array = Images.find().fetch();
        var randomIndex = Math.floor( Math.random() * array.length );
        var currentImageSRC = array[randomIndex];

        if (currentImageSRC) {
            Session.set("currentImage", currentImageSRC);
            Meteor.call("excludeImage", currentImageSRC.id);
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
