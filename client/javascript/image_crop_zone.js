// Think you need Slingshot.

/*var jcrop_api, boundx, boundy;

var uploader = new ReactiveVar();
var state = new ReactiveVar('disabled');

var b64ToBlob = function(b64Data, contentType, sliceSize) {
    var byteArray, byteArrays, byteCharacters, byteNumbers, i, offset, slice;
    sliceSize = sliceSize || 512;
    byteCharacters = atob(b64Data);
    byteArrays = [];
    offset = 0;
    while (offset < byteCharacters.length) {
        slice = byteCharacters.slice(offset, offset + sliceSize);
        byteNumbers = (function() {
            var j, ref, results;
            results = [];
            for (i = j = 0, ref = slice.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                results.push(slice.charCodeAt(i));
            }
            return results;
        })();
        byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
        offset += sliceSize;
    }
    return new Blob(byteArrays, { type: contentType });
};

// update info by cropping (onChange and onSelect events handler)
var updateInfo = function updateInfo(e) {
    if(parseInt(e.w) > 0) {
        var imageObj = $("#jcrop-preview")[0];
        var canvas = $("#jcrop-canvas")[0];
        canvas.width = 300;
        canvas.height = 300;
        var context = canvas.getContext("2d");
        context.drawImage(imageObj, e.x, e.y, e.w, e.h, 0, 0, canvas.width, canvas.height);
    }
};

Template.jcrop.events({
    'change #jcrop-file': function fileSelectHandler() {
        uploader.set(); // reset progress to nil
        state.set('disabled');

        // get selected file
        var oFile = $('#jcrop-file')[0].files[0];

        // hide all errors
        $('#jcrop-error').hide();

        // check for image type (jpg and png are allowed)
        var rFilter = /^(image\/jpeg|image\/png)$/i;
        if (! rFilter.test(oFile.type)) {
            $('#jcrop-error').html('Please select a valid image file (jpg and png are allowed)').show();
            return;
        }

        // check for file size
        if (oFile.size > 500 * 1024) {
           $('#jcrop-error').html('The file you selected is too big, please select a file under 500Kb').show();
           return;
        }

        // preview element
        var oImage = document.getElementById('jcrop-preview');

        // prepare HTML5 FileReader
        var oReader = new FileReader();
        oReader.onload = function(e) {

            // e.target.result contains the DataURL which we can use as a source of the image
            oImage.src = e.target.result;
            oImage.onload = function () { // onload event handler

                // display step 2
                $('#jcrop-step2').fadeIn(500);

                // destroy Jcrop if it is existed
                if (typeof jcrop_api != 'undefined') {
                    //jcrop_api.destroy()
                    //jcrop_api = null
                    //$('#edit-photo-preview').width(oImage.naturalWidth)
                    //$('#edit-photo-preview').height(oImage.naturalHeight)
                    //$('.jcrop-holder').remove()
                    jcrop_api.setImage(oImage.src);
                }

                $('#jcrop-preview').Jcrop({
                    minSize: [150, 150], // min crop size
                    aspectRatio : 1, // keep aspect ratio 1:1
                    bgFade: true, // use fade effect
                    bgOpacity: 0.5, // fade opacity
                    boxWidth: 500,
                    boxHeight: 0,
                    setSelect:  [ 100, 50, 400, 350 ],
                    onChange: updateInfo,
                    onSelect: updateInfo
                }, function(){

                    // use the Jcrop API to get the real image size
                    var bounds = this.getBounds();
                    boundx = bounds[0];
                    boundy = bounds[1];

                    // Store the Jcrop API in the jcrop_api variable
                    jcrop_api = this;
                });

            };
        };
        // read selected file as DataURL
        oReader.readAsDataURL(oFile);
    },

    'submit #jcrop-form': function(ev) {
        ev.preventDefault();
        uploader.set(); // reset progress to nil
        state.set('disabled');

        // TODO: add your Slingshot setup
        var upload = new new FS.File(); //Slingshot.Upload("userUploads");
        var canvas = $('#jcrop-canvas')[0];
        var data = canvas.toDataURL();
        var match = /^data:([^;]+);base64,(.+)$/.exec(data);
        var type = match[1];
        var b64 = match[2];
        var blob = b64ToBlob(b64, type);

        // TODO: generate your filename
        blob.name = Meteor.userId() + '-' + Date.now();
        state.set('active');
        upload.send(blob, function (error, downloadUrl) {
            if (error) {
                state.set('error');
                // TODO: whatever you need on upload failure
                // Log service detailed response.
                //console.error('Error uploading', uploader.xhr.response)
                alert (error);
            }
            else {
                state.set('success');
                // TODO: whatever you need on upload success
                console.log('Success uploading: ', downloadUrl);
                //Meteor.users.update(Meteor.userId(), {$push: {"profile.files": downloadUrl}})
            }
        });
        uploader.set(upload);
    }
});

Template.jcrop.helpers({
    progress: function() {
        var upload = uploader.get();
        if (upload) {
            var pc = Math.round(upload.progress() * 100) || 0;
            if (pc === 100 && state.get() !== 'success') state.set('saving');
            return pc;
        } else {
            return 0;
        }
    },
    state: function() {
        return state.get();
    },
    color: function() {
        return state.get() === 'active' || state.get() === 'saving' ? 'blue' : '';
    },
    label: function() {
        switch(state.get()) {
            case 'active':
                return 'Uploading photo...';
                break;
            case 'saving':
                return 'Saving photo...';
                break;
            case 'success':
                return 'Photo uploaded successfully!';
                break;
            case 'error':
                return 'An error occurred while uploading your photo';
                break;
            case 'warning':
                return "Your photo doesn't meet the image requirements, choose another";
                break;
            default:
                return '';
        }
    },
    loading: function() {
        return state.get() === 'active' || state.get() === 'saving' ? 'loading' : '';
    }
});
*/