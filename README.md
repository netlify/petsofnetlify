# petsofnetlify

This is a place where the Netlify team posts pictures of their pets.

Want to meet our friends? Head to [petsofnetlify.com](http://petsofnetlify.com)


## A little note about this website

It's not very nice looking, but that's okay. It was a project that [@philhawksworth](https://twitter.com/philhawksworth) dreamed up as a bit of an easter egg to support the launch of buying custom domains on Netlify. Then, @yourfrienderin begged him to teach her how to create a website in the process. You can make it better! Pull requests welcome <3


## You are a Netlifier but your pet is missing?

Well that won't do. If your little friend is missing from this site please submit a pull request. But this site is just for the pets of people working at Netlify (and our beloved alumni) I'm afraid. To get your pet on here, you first have to _[join us](https://www.netlify.com/careers/?utm_source=github&utm_medium=petsofnetlify-pnh&utm_campaign=devex)_


## Contributing code or pets (!)

Please submit a [pull request](/netlify/petsofnetlify/pulls).

To add your pet, you need to give us a photo of your lovely pet, and their name. Add the details to the [pets.json](/netlify/petsofnetlify/blob/master/src/_data/pets.json) data file like this:

```json
  {
    "name": "Your pet's name",
    "photo": "your-pets-photo.jpg"
  }
```

Remember to add a nice photo to the [images folder](/netlify/petsofnetlify/tree/master/src/images).


## Image optimisation

Although it is best not to add a very large image file to this repo, it's not critical to resize and optimize your image file since this site automatically serves the images via Cloudinary who resize, optimize and cache the images on their CDN automatically. (Thanks to their API and [this little trick](https://github.com/netlify/petsofnetlify/blob/ba622cfd46613d2e20948fe4ade4cdf9fc9a0660/netlify.toml#L5-L8) with [Netlify Redirects](https://docs.netlify.com/routing/overview/?utm_source=github&utm_medium=petsofnetlfy-pnh&utm_campaign=devex))

## Running locally

Want to tinker with the code?

```sh

# clone the repo
git clone git@github.com:netlify/petsofnetlify.git

# move into the project and install dependencies
cd petsofnetlify
npm install

# generate the site and watch for changes
npm start

# to test the redirects which proxy photo requests via Cloudinary run the build with Netlify CLI (you need your own free Cloudinary account to try this out on your own site)

# install the Netlify CLI
npm install netlify-cli -g

# run your project locally with Netlify Dev
ntl dev

```
