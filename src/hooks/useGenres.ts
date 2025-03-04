import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import { Genre } from "../interfaces/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
    useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: ms("24"),
        initialData: genres
    });

export default useGenres;
