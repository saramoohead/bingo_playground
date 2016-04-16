if (Meteor.isServer) {
    var imageStore = new FS.Store.S3("original", {
        /* REQUIRED */
        region: "eu-west-1",
        accessKeyId: Meteor.settings.private.AWSAccessKeyId,
        secretAccessKey: Meteor.settings.private.AWSSecretAccessKey,
        bucket: Meteor.settings.private.AWSBucket,
        folder: "original"
    });

    var imageThumbsStore = new FS.Store.S3("thumb", {
        /* REQUIRED */
        region: "eu-west-1",
        accessKeyId: Meteor.settings.private.AWSAccessKeyId,
        secretAccessKey: Meteor.settings.private.AWSSecretAccessKey,
        bucket: Meteor.settings.private.AWSBucket,
        folder: "thumb",
        transformWrite: function(fileObj, readStream, writeStream) {
          gm(readStream, fileObj.name()).resize("100", "100").stream().pipe(writeStream);
        }
    });

    Images2 = new FS.Collection("Images2", {
        stores: [imageStore, imageThumbsStore],
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