/* eslint-disable react/prop-types */
import React, { createContext, useMemo } from "react";
// eslint-disable-next-line
import { usePersistentState } from "react-persistent-state";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [numberOfPost, setNumberOfPost] = usePersistentState(24);
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
