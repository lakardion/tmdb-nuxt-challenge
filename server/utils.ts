export const getServerUrl = (
  endpoint: string,
  queries?: {
    sort_by?: string;
    page?: number;
    query?: string;
    "vote_average.gte"?: number;
    "vote_average.lte"?: number;
  }
) => {
  const config = useRuntimeConfig();
  const apiKeyQueryParam = `${queries ? "&" : "?"}api_key=${config.tmdbSecret}`;
  const queryParams = queries
    ? Object.entries(queries)
        .flatMap(([k, v], idx) => {
          if (typeof v === "undefined") return [];
          return [`${idx === 0 ? "?" : "&"}${k}=${v}`];
        })
        .join("")
    : "";
  return `${config.tmdbBaseUrl}/${endpoint}${queryParams}${apiKeyQueryParam}`;
};
