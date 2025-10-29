import { create } from 'zustand';

interface FavState {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
    toggleFavorite: (id: string) => void;
}

const FavoriteStore = create<FavState>()((set , get) => ({
    favorites: [],

    addFavorite: (id) => {
        set((states) => ({ favorites: [...states.favorites, id] }));
    },

    removeFavorite: (id) => {
        set((states) => ({ favorites: states.favorites.filter(favId => favId != id) }));
    },

    isFavorite: (id) => {
        return get().favorites.includes(id);
    },

    toggleFavorite: (id) => {
        const isFav = get().isFavorite(id);
        if (isFav) {
            get().removeFavorite(id);
        } else {
            get().addFavorite(id);
        }
    },    

}));

export default FavoriteStore;
