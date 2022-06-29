/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState } from "react";
// eslint-disable-next-line
import { usePersistentState } from "react-persistent-state";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [numberOfPost, setNumberOfPost] = useState(6);
    const [favoriteJobsList, setFavoriteJobsList] = usePersistentState([]);
    return (
        <AppContext.Provider
            value={useMemo(
                () => ({
                    numberOfPost,
                    setNumberOfPost,
                    favoriteJobsList,
                    setFavoriteJobsList,
                }),
                [numberOfPost, favoriteJobsList]
            )}
        >
            {children}
        </AppContext.Provider>
    );
}
