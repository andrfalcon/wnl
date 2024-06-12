import { create } from 'zustand';

export const useStore = create((set) => ({
    searchResults: {},
    videoSelected: "",
    updateSearchResults: (data) => set(() => ({ searchResults: data })),
    updateVideoSelected: (data) => set(() => ({ videoSelected: data }))
}))