Meteor.publish("images", function () {
    return Images.find();
});
Meteor.publish("numbers", function () {
    return Numbers.find();
});
Meteor.publish("boards", function () {
    return Boards.find();
});