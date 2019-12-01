import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();

export const API_URL =
  typeof process.env.API_URL === 'undefined'
    ? publicRuntimeConfig.platformVariables.API_URL
    : process.env.API_URL;

export const GRANT_TYPE =
  typeof process.env.GRANT_TYPE === 'undefined'
    ? publicRuntimeConfig.platformVariables.GRANT_TYPE
    : process.env.GRANT_TYPE;
export const CLIENT_ID =
  typeof process.env.CLIENT_ID === 'undefined'
    ? publicRuntimeConfig.platformVariables.CLIENT_ID
    : process.env.CLIENT_ID;
export const CLIENT_SECRET =
  typeof process.env.CLIENT_SECRET === 'undefined'
    ? publicRuntimeConfig.platformVariables.CLIENT_SECRET
    : process.env.CLIENT_SECRET;
