Template.upload.events({
    'dropped #dropzone': function(e) {
        console.log('dropped a file');
        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);

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