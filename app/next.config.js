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
    throw new Error(`no ${varName} environment variable`);
  }
}

module.exports = {
  publicRuntimeConfig: {
    platform_variables: read_base64_json("PLATFORM_VARIABLES"),
    platform_routes: read_base64_json("PLATFORM_ROUTES")
  }
};
