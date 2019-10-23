import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API_URL = publicRuntimeConfig.platform_variables.API_URL;
export const GRANT_TYPE = publicRuntimeConfig.platform_variables.GRANT_TYPE;
export const CLIENT_ID = publicRuntimeConfig.platform_variables.CLIENT_ID;
export const CLIENT_SECRET =
  publicRuntimeConfig.platform_variables.CLIENT_SECRET;
