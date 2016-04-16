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

        var organisation = Session.get("organisation");

        return Images2.find({organisation: organisation});
    },

    organisationSelected: function () {

        var organisation = Session.get("organisation");
        // console.log("organisation session", organisation);

        if (organisation) {
            return organisation;
        }
    },

    orgAdmin: function() {
        var organisation = Session.get("organisation");
        var user = Meteor.userId();

        console.log("user.organisation", user.organisation);

        if (user.organisation == organisation) {
            return true;
        }
    }
});

Template.image_list.events({
  'click .delete-image': function(e) {
    e.preventDefault();

    var sure = confirm('Are you sure you want to delete this image?');
    if (sure === true) {
      Images2.remove({ _id:this._id }, function(error,result) {
        if (error) {
          toastr.error("Delete failed... " + error);
        } else {
          toastr.success('Image deleted!');
        }
      });
    }
  }
});

var incrementLimit = function(templateInstance) {
    var newLimit = templateInstance.limit.get() + parseInt(Meteor.settings.public.recordsPerPage);
    templateInstance.limit.set(newLimit);
};
