const webpack = require("webpack");
// Initialize doteenv library
const { parsed: localEnv } = require("dotenv").config();

// Utility to assist in decoding a packed JSON variable.
function read_base64_json(varName) {
  try {
    return JSON.parse(new Buffer(process.env[varName], "base64").toString());
  } catch (err) {
    throw new Error(`no ${varName} environment variable`);
  }
}

module.exports = {
  webpack: (config, { dev }) => {
    // if development use .env file
    if (dev) {
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      return config;
      // if NODE_ENV = production
    } else {
      let variables = read_base64_json("PLATFORM_VARIABLES");
      console.log(variables);
      config.plugins.push(new webpack.EnvironmentPlugin(variables));
      return config;
    }
  }
};
