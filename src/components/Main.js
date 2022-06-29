import React from "react";
import { Routes, Route } from "react-router-dom";
import GeneralJobs from "./GeneralJobs";
import FavoriteJobs from "./FavoriteJobs";
import JobDetails from "./JobDetails";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<GeneralJobs />} />
            <Route path="/general-jobs" element={<GeneralJobs />} />
            <Route path="/favorite-jobs" element={<FavoriteJobs />} />
            <Route path="/job-details" element={<JobDetails />} />
        </Routes>
    );
}
