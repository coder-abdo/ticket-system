import { fetchData } from "@/utils";
import { useQuery } from "@tanstack/react-query";
export const useFetch = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchData(url),
    queryKey: ["fetch-departments"],
  });
  return { data, error, isLoading };
};
