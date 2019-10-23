import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API_URL =
  typeof process.env.API_URL === "undefined"
    ? publicRuntimeConfig.platform_variables.API_URL
    : process.env.API_URL;

export const GRANT_TYPE =
  typeof process.env.GRANT_TYPE === "undefined"
    ? publicRuntimeConfig.platform_variables.GRANT_TYPE
    : process.env.GRANT_TYPE;
export const CLIENT_ID =
  typeof process.env.CLIENT_ID === "undefined"
    ? publicRuntimeConfig.platform_variables.CLIENT_ID
    : process.env.CLIENT_ID;
export const CLIENT_SECRET =
  typeof process.env.CLIENT_SECRET === "undefined"
    ? publicRuntimeConfig.platform_variables.CLIENT_SECRET
    : process.env.CLIENT_SECRET;
