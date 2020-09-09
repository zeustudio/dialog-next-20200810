// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require("next-images");
const withVideos = require("next-videos");

module.exports = withVideos(withImages({}));
