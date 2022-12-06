import { MovieDiscover, PaginatedResult } from "~~/server/types";
import { getServerUrl } from "~~/server/utils";

const uri = "discover/movie";

export default defineEventHandler(async (e) => {
  const { page } = getQuery(e);
  const pageQuery = typeof page === "string" ? parseInt(page) : undefined;
  const result = await $fetch<PaginatedResult<MovieDiscover>>(
    getServerUrl(uri, {
      page: pageQuery,
      sort_by: "popularity.desc",
    })
  );
  return result;
});
