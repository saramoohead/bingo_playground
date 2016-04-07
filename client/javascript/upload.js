Template.upload.events({
    "submit .organisation-code": function() {
        event.preventDefault();

        var organisation_code = event.target.organisation_code.value;

        event.target.organisation_code.value = "";

        console.log("organisation_code", organisation_code);

        Session.set("organisation", organisation_code);

    },

    "submit .image-metadata": function() {
        event.preventDefault();

        var imageTitle = event.target.image_title.value;
        var imageCreator = event.target.image_creator.value;

        event.target.image_title.value = "";
        event.target.image_creator.value = "";

        console.log("image_title", imageTitle);
        console.log("image_creator", imageCreator);

        Session.set("imageTitle", imageTitle);
        Session.set("imageCreator", imageCreator);

    },

    'dropped #dropzone': function(e) {
        console.log('dropped a file');

        // var user = Meteor.user();
        var organisation = Session.get("organisation");
        var imageTitle = Session.get("imageTitle");
        var imageCreator = Session.get("imageCreator");

        // console.log(user.username, user.profile.organisation);

        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);
            newFile.organisation = organisation;
            newFile.imageTitle = imageTitle;
            newFile.imageCreator = imageCreator;

            Images2.insert(newFile, function (error, fileObj) {
                if (error) {
                    toastr.error("Upload failed... please try again.");
                } else {
                    toastr.success('Upload succeeded!');
                    Session.set("imageTitle", null);
                    Session.set("imageCreator", null);
                }
            });
        });
    }
});


Template.upload.helpers({
    organisationSelected: function () {

        var organisation = Session.get("organisation");

        if (organisation) {
            console.log("organisation", organisation);
            return organisation;
        }
    },
    titleSubmitted: function () {

        var imageTitle = Session.get("imageTitle");

        if (imageTitle) {
            return imageTitle;
        }
    }

});