Images = new Mongo.Collection('images');

if (Meteor.isClient) {
  Meteor.subscribe("images");

    Template.next_call.events({
        "click .next_button": function() {
            Meteor.call("getNewImage");
        }
    });

    Template.animal_bingo.helpers({
        currentImageSRC: function () {

            var array = Images.find().fetch();
            var randomIndex = Math.floor( Math.random() * array.length );
            var currentImageSRC = array[randomIndex];

            if (currentImageSRC) {
                Meteor.call("excludeImage", currentImageSRC._id);
                return currentImageSRC;
            }
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
