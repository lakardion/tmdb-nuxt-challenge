import { ExtractRefValue } from "~~/util-types";

export const useImageConfiguration = () => {
  const result = useFetch("/api/configuration");
  return result.data;
};
