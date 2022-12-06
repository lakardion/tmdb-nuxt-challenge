export const getServerUrl = (
  endpoint: string,
  queries?: {
    sort_by?: string;
    page?: number;
    query?: string;
  }
) => {
  const config = useRuntimeConfig();
  const apiKeyQueryParam = `api_key=${config.tmdbSecret}`;
  const queryParams = queries
    ? Object.entries(queries)
        .map(
          ([k, v], idx) =>
            `${idx === 0 ? "?" : "&"}${k}=${v}&${apiKeyQueryParam}`
        )
        .join("")
    : `?${apiKeyQueryParam}`;
  return `${config.tmdbBaseUrl}/${endpoint}${queryParams}`;
};
