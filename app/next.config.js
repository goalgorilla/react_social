const webpack = require("webpack");
// Initialize doteenv library
const { parsed: localEnv } = require("dotenv").config();

// Utility to assist in decoding a packed JSON variable.
function read_base64_json(varName) {
  try {
    return JSON.parse(
      new Buffer.from(process.env[varName], "base64").toString()
    );
  } catch (err) {
    return;
  }
}

module.exports = {
  webpack: (config, { dev }) => {
    // if development use .env file
    if (dev) {
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      return config;
    }
    return config;
  },
  publicRuntimeConfig: {
    platform_variables: read_base64_json("PLATFORM_VARIABLES")
    // platform_routes: read_base64_json("PLATFORM_ROUTES")
  }
};
