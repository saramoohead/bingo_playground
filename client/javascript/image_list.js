Template.image_list.created = function () {
    var self = this;

    self.limit = new ReactiveVar;
    self.limit.set(parseInt(Meteor.settings.public.recordsPerPage));

    Tracker.autorun(function() {
        Meteor.subscribe('images2', self.limit.get());
    });
};

Template.image_list.rendered = function () {
    var self = this;

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            incrementLimit(self);
        }
    });
};

Template.image_list.helpers({
    'images2': function() {
        return Images2.find();
    }
});

var incrementLimit = function(templateInstance) {
    var newLimit = templateInstance.limit.get() + parseInt(Meteor.settings.public.recordsPerPage);
    templateInstance.limit.set(newLimit);
};