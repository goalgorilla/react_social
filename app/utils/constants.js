import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const API_URL = Object.keys(publicRuntimeConfig.platform_routes).find(url =>
  url.startsWith("https://api.")
);

export const API_URL = API_URL;
export const GRANT_TYPE = publicRuntimeConfig.platform_variables.GRANT_TYPE;
export const CLIENT_ID = publicRuntimeConfig.platform_variables.CLIENT_ID;
export const CLIENT_SECRET =
  publicRuntimeConfig.platform_variables.CLIENT_SECRET;
