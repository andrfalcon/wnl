import { create } from 'zustand';

export const useStore = create((set) => ({
    searchResults: {},
    updateSearchResults: (data) => set(() => ({ searchResults: data }))
}))