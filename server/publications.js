Meteor.publish("images", function () {
    return Images.find();
});
Meteor.publish("numbers", function () {
    return Numbers.find();
});
Meteor.publish("boards", function () {
    return Boards.find();
});
Meteor.publish('images2', function(limit) {
    return Images2.find({}, {
        limit: limit
    });
});