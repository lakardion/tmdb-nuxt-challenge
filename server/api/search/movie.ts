import { MovieDiscover, PaginatedResult } from "~~/server/types";
import { getServerUrl } from "~~/server/utils";

const uri = "search/movie";
export default defineEventHandler(async (e) => {
  const { search, page } = getQuery(e);
  if (!search || typeof search !== "string")
    throw new Error("Cannot search without a query");
  const pageQuery = typeof page === "string" ? parseInt(page) : undefined;
  const result = await $fetch<PaginatedResult<MovieDiscover>>(
    getServerUrl(uri, {
      query: search,
      page: pageQuery,
    })
  );
  return result;
});
