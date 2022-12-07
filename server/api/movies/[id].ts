import { Movie } from "~~/server/types";
import { getServerUrl } from "~~/server/utils";

const uri = "movie";

export default defineEventHandler(async (e) => {
  const { id } = e.context.params;
  const apiUrl = getServerUrl(`movie/${id}`);
  const result = await $fetch<Movie>(apiUrl);
  return result;
});
