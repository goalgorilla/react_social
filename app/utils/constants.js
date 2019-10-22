import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

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

const API_URL = Object.keys(read_base64_json("PLATFORM_ROUTES")).find(url =>
  url.startsWith("https://api.")
);

export const API_URL = API_URL;
export const GRANT_TYPE = publicRuntimeConfig.platform_variables.GRANT_TYPE;
export const CLIENT_ID = publicRuntimeConfig.platform_variables.CLIENT_ID;
export const CLIENT_SECRET =
  publicRuntimeConfig.platform_variables.CLIENT_SECRET;
