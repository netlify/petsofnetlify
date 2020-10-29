const glob = require('glob');
const { replaceImage } = require('./replaceImage.js');



module.exports = {

  async onPostBuild({ inputs, utils, constants }) {

    const cloudName = inputs.cloudinaryCloudName || process.env.cloudinaryCloudName;
    if(!cloudName) {
      // err
      console.log('err out properly');
      return;
    }

        // find all HTML files in the build directory
    const files = glob.sync(`${constants.PUBLISH_DIR}/**/*.html`);

    // run all the file replacements in parallel...
    const promises = files.map(replaceImage(cloudName));

    // ...but wait for them all to finish before moving on
    await Promise.all(promises);



  }

};
