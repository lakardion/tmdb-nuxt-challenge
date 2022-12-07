import { ImageConfiguration } from "~~/server/types";
import { getServerUrl } from "~~/server/utils";

const uri = "configuration";
export default defineEventHandler(async (e) => {
  const apiUrl = getServerUrl(uri);
  const result = await $fetch<ImageConfiguration>(apiUrl);
  return result;
});
