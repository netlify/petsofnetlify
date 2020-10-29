const fs = require('fs');
const unified = require('unified');
const parse = require('rehype-parse');
const visit = require('unist-util-visit');
const stringify = require('rehype-stringify');
const fetch = require('node-fetch');
const { URL } = require('url');

const replaceImageURL = options => tree => {
  visit(
    tree,
    node => node.tagName === 'img',
    node => {
      const imagePath = node.properties.src;

      // TODO determine full URL of the image
      const isLocal = !imagePath.match(/^http/);

      function getFullLocalImageURL(imgPath) {
        if (imgPath.startsWith('.')) {
          console.error('you’re gonna have a bad time');
          return false;
        }
        const url = new URL(process.env.URL);
        url.pathname = imgPath;
        return url.href;
      }

      const imageURL = isLocal ? getFullLocalImageURL(imagePath) : imagePath;

      if (imageURL) {
        const cloudURL = `https://res.cloudinary.com/${options.cloudName}/image/fetch/q_auto,f_auto/${imageURL}`;
        node.properties.src = cloudURL;
        console.log('Prime cloudinary asset: ', cloudURL);
        fetch(cloudURL)
      }

    }
  )
}

exports.replaceImage = cloudName => (filePath) =>
  new Promise(resolve => {
    try {
      const markup = unified()
        .use(parse)
        .use(replaceImageURL, { cloudName })
        .use(stringify)
        .processSync(fs.readFileSync(filePath))
        .toString();
      fs.writeFileSync(filePath, markup);
    } catch (error) {
      console.error(`error injecting script into ${filePath}`);
    }
    resolve(true);
  });
