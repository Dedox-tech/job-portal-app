import { useQuery } from "react-query";

export default function useFetchData() {
    return useQuery("JobPosting", async () => {
        const response = await fetch(
            "https://obscure-peak-82556.herokuapp.com/https://devitjobs.us/api/jobs",
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                },
            }
        );
        if (!response.ok) {
            throw new Error("Oops, an error ocurred fetching the data");
        }
        return response.json();
    });
}
