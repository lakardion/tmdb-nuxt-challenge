import { MovieDiscover, PaginatedResult } from "~~/server/types";
import { getServerUrl } from "~~/server/utils";

const uri = "discover/movie";

export default defineEventHandler(async (e) => {
  const { page, sortBy, voteMin, voteMax } = getQuery(e);
  const pageQuery = typeof page === "string" ? parseInt(page) : undefined;
  const sortByQuery = typeof sortBy === "string" ? sortBy : undefined;
  const voteMinQuery =
    typeof voteMin === "string" ? parseInt(voteMin) : undefined;
  const voteMaxQuery =
    typeof voteMax === "string" ? parseInt(voteMax) : undefined;
  const apiUrl = getServerUrl(uri, {
    page: pageQuery,
    sort_by: sortByQuery,
    "vote_average.gte": voteMinQuery,
    "vote_average.lte": voteMaxQuery,
  });
  const result = await $fetch<PaginatedResult<MovieDiscover>>(apiUrl);
  return result;
});
