Template.upload.events({
    "submit .organisation_code": function() {
        event.preventDefault();

        var organisation_code = event.target.organisation_code.value;

        event.target.organisation_code.value = "";

        console.log("organisation_code", organisation_code);

        Session.set("organisation", organisation_code);

    },
    'dropped #dropzone': function(e) {
        console.log('dropped a file');

        var user = Meteor.user();
        var organisation = Session.get("organisation");

        console.log(user.username, user.profile.organisation);

        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);
            newFile.organisation = organisation;

            Images2.insert(newFile, function (error, fileObj) {
                if (error) {
                    toastr.error("Upload failed... please try again.");
                } else {
                    toastr.success('Upload succeeded!');
                }
            });
        });
    }
});


Template.upload.helpers({
    organisationSelected: function () {

        var organisation = Session.get("organisation");

        console.log("organisation session", organisation);

        if (organisation) {
            console.log("organisation", organisation);
            return organisation;
        }
    }

});