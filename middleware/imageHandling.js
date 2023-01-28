// Decoding base-64 image
// Source: http://stackoverflow.com/questions/20267939/nodejs-write-base64-image-file
function decodeBase64Image(dataString) {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  var response = {};

  if (matches.length !== 3) {
    return new Error("Invalid input string");
  }

  response.type = matches[1];
  response.data = new Buffer.from(matches[2], "base64");

  return response;
}

// Return the function that will handle the writing to disk of the image 
// and return the path
function imageHandler (image) {
  // Initialize the return variable
  let userUploadedImagePath = null;

  try {
    // Regular expression for image type:
    // This regular image extracts the "jpeg" from "image/jpeg"
    var imageTypeRegularExpression = /\/(.*?)$/;

    // Generate random string
    var crypto = require("crypto");
    var seed = crypto.randomBytes(20);
    var uniqueSHA1String = crypto.createHash("sha1").update(seed).digest("hex");

    var base64Data = image;

    // set path
    var d = new Date();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    var basePath = "./uploads/img/" + year + "/" + month + "/";

    var imageBuffer = decodeBase64Image(base64Data);
    var userUploadedFeedMessagesLocation = basePath;1

    var uniqueRandomImageName = "image-" + uniqueSHA1String;
    // This variable is actually an array which has 5 values,
    // The [1] value is the real image extension
    var imageTypeDetected = imageBuffer.type.match(imageTypeRegularExpression);

    userUploadedImagePath =
      userUploadedFeedMessagesLocation +
      uniqueRandomImageName +
      "." +
      imageTypeDetected[1];

    // Save decoded binary image to disk
    try {
      var fs = require("fs");

      fs.promises.mkdir(basePath, {recursive: true})
        .then(x => {
          fs.promises.writeFile(
          userUploadedImagePath,
          imageBuffer.data,
          function () {
            console.log(
              "DEBUG - feed:message: Saved to disk image attached by user:",
              userUploadedImagePath
            );
          }
      )});
    } catch (error) {
      console.log("ERROR:", error);
    }
  } catch (error) {
    console.log("ERROR:", error);
  }

  // return the path of the image
  return userUploadedImagePath;
};

// export the model
module.exports = imageHandler;
