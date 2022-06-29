import { useQuery } from "react-query";

export default function useFetchData() {
    return useQuery("JobPosting", async () => {
        const response = await fetch("https://devitjobs.us/api/jobs");
        if (!response.ok) {
            throw new Error("Oops, an error ocurred fetching the data");
        }
        return response.json();
    });
}
