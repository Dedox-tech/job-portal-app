/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState } from "react";
// eslint-disable-next-line
import { usePersistentState } from "react-persistent-state";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [numberOfPost, setNumberOfPost] = usePersistentState(24);
    const [favoriteJobsList, setFavoriteJobsList] = usePersistentState([]);
    const [searchQueryObject, setSearchQueryObject] = useState({
        techKeywords: "",
        experience: "",
        companyType: "",
        hours: "",
    });
    return (
        <AppContext.Provider
            value={useMemo(
                () => ({
                    numberOfPost,
                    setNumberOfPost,
                    favoriteJobsList,
                    setFavoriteJobsList,
                    searchQueryObject,
                    setSearchQueryObject,
                }),
                [
                    numberOfPost,
                    favoriteJobsList,
                    searchQueryObject.techKeywords,
                    searchQueryObject.experience,
                    searchQueryObject.companyType,
                    searchQueryObject.hours,
                ]
            )}
        >
            {children}
        </AppContext.Provider>
    );
}
