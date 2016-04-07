if (Meteor.isServer) {
    var imageStore = new FS.Store.S3("images2", {
        /* REQUIRED */
        region: "eu-west-1",
        accessKeyId: Meteor.settings.private.AWSAccessKeyId,
        secretAccessKey: Meteor.settings.private.AWSSecretAccessKey,
        bucket: Meteor.settings.private.AWSBucket
    });

    Images2 = new FS.Collection("Images2", {
        stores: [imageStore],
        filter: {
            allow: {
                contentTypes: ['image/*']
            }
        }
    });
}

// Doesn't have access to S3 settings because it's client
if (Meteor.isClient) {
    var imageStore = new FS.Store.S3("images2");

    Images2 = new FS.Collection("Images2", {
        stores: [imageStore],
        filter: {
          allow: {
            contentTypes: ['image/*']
          },
          onInvalid: function(message) {
            toastr.error(message);
            // toastr.error(message);
          }
        }
    });

}

// Allow rules
Images2.allow({
  insert: function(organisation)   { return organisation !== null; },
  update: function(organisation)   { return organisation !== null; },
  download: function() { return true; }
});