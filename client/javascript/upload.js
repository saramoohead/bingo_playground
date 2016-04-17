Template.upload.events({
    "submit .organisation-code": function() {
        event.preventDefault();

        var organisation_code = event.target.organisation_code.value;

        event.target.organisation_code.value = "";


        Session.set("organisation", organisation_code);

    },

    "submit .image-metadata": function() {
        event.preventDefault();

        var imageTitle = event.target.image_title.value;
        var imageCreator = event.target.image_creator.value;

        event.target.image_title.value = "";
        event.target.image_creator.value = "";

        Session.set("imageTitle", imageTitle);
        Session.set("imageCreator", imageCreator);

    },

    "dropped #dropzone": function(e) {

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
                    toastr.error("Upload failed. Please try again.");
                } else {
                    toastr.success('Upload succeeded. Time to crop!');
                    Session.set("imageJustUploaded", 1);
                }
            });
        });
    },

    "click #finished-cropping": function () {

        var organisation = Session.get("organisation");
        var imageTitle = Session.get("imageTitle");
        var imageCreator = Session.get("imageCreator");


        var croppedImage =
                    $('.to-be-cropped > img')
                        .cropper("getCroppedCanvas")
                        .toDataURL();

            var newFile = new FS.File(croppedImage);
            newFile.organisation = organisation;
            newFile.imageTitle = imageTitle;
            newFile.imageCreator = imageCreator;
            newFile.isCropped = 1;

            Images2.insert(newFile, function (error, fileObj) {
            if (error) {
                toastr.error("Upload failed... please try again.");
            } else {
                toastr.success('Upload succeeded!');
                Session.set("imageJustUploaded", 0);
                Session.set("imageTitle", null);
                Session.set("imageCreator", null);
                }
            });
    }

});


Template.upload.helpers({
    organisationSelected: function () {

        var organisation = Session.get("organisation");

        if (organisation) {
            return organisation;
        }
    },
    titleSubmitted: function () {

        var imageTitle = Session.get("imageTitle");

        if (imageTitle) {
            return imageTitle;
        }
    },
    imageJustUploaded: function () {

        var organisation = Session.get("organisation");
        var wasImageJustUploaded = Session.get("imageJustUploaded");

        if (wasImageJustUploaded == 1) {
        var imageJustUploaded = Images2.find(
                        {organisation: organisation},
                        {
                            sort: {uploadedAt: -1},
                            limit: 1
                        });

        // console.log("imageJustUploaded", imageJustUploaded);
            return imageJustUploaded;
        }
        else {
            return false;
        }
    }

});


Template.cropper.onRendered(function () {
        console.log("inside cropper blah onRendered");

        if (!this.rendered) {
                $('.to-be-cropped > img').cropper({
                    aspectRatio: 1 / 1,
                    autoCropArea: 0.65,
                    strict: true,
                    guides: true,
                    highlight: true,
                    dragCrop: false,
                    cropBoxMovable: true,
                    cropBoxResizable: true
                });
            this.rendered = true;
        }

});

