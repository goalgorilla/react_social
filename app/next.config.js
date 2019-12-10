const webpack = require('webpack');
// Initialize doteenv library
const {parsed: localEnv} = require('dotenv').config();

// Utility to assist in decoding a packed JSON variable.
function readBase64Json(varName) {
  try {
    return JSON.parse(
      new Buffer.from(process.env[varName], 'base64').toString(),
    );
  } catch (err) {
    // throw new Error(`no ${varName} environment variable`);
  }
}

module.exports = {
  webpack: (config, {dev}) => {
    // if development use .env file
    if (dev) {
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      return config;
    }
    return config;
  },
  publicRuntimeConfig: {
    platformVariables: readBase64Json('PLATFORM_VARIABLES'),
    // platform_routes: read_base64_json("PLATFORM_ROUTES")
  },
  pageExtensions: ['js'],
};
