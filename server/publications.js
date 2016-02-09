Meteor.publish("images", function () {
    return Images.find();
});
Meteor.publish("numbers", function () {
    return Numbers.find();
});