/* eslint-disable no-console */
import React, { useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GeneralJobs from "./GeneralJobs";
import FavoriteJobs from "./FavoriteJobs";
import JobDetails from "./JobDetails";

export default function Main() {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<GeneralJobs />} />
            <Route path="/general-jobs" element={<GeneralJobs />} />
            <Route path="/favorite-jobs" element={<FavoriteJobs />} />
            <Route path="/job-details/:jobUrl" element={<JobDetails />} />
        </Routes>
    );
}
