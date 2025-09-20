import { create } from 'zustand';
import { useScreensStore } from './useStoreScreen';

interface Card {
    title: string;
    description: string;
    tags: string[];
    author: string;
    id: string;
    bookmarked?: boolean;
    fromUser?: boolean;
    recentOpened?: boolean;
    sharedWithMe?: string[];
    rate: number;
}

interface CardsStore {
    cards: Card[];
    trash: Card[];
    recents: Card[];
    cardsFiltered: Card[];
    inputFilter: string;

    getCards: () => Card[];
    getMyCards: () => Card[];
    getBookmarkedCards: () => Card[];
    getRecentCards: () => Card[];
    getFilteredCards: () => Card[];
    getInputFilter: () => string;
    getSharedWithMeCards: () => Card[];
    getTrashCards: () => Card[];

    setCards: (cards: Card[]) => void;
    setInputFilter: (input: string) => void;

    bookmarkCard: (id: string) => void;
    createCard: (card: Card) => void;
    deleteCard: (id: string) => void;
}

export const useStoreCards = create<CardsStore>((set, get) => ({
    cards: [],
    trash: [],
    recents: [],
    cardsFiltered: [],
    inputFilter: "",

    getCards: () => get().cards,

    getInputFilter: () => get().inputFilter,

    setCards: (cards) => set({ cards }),

    setInputFilter: (input) => {

        const currentScreen = useScreensStore.getState().currentScreen;
        let cards = get().cards;

        if (currentScreen === "bookmarks") cards = get().getBookmarkedCards();
        if (currentScreen === "mylibrary") cards = get().getMyCards();
        if (currentScreen === "trash") cards = get().trash;
        if (currentScreen === "recents") cards = get().getRecentCards();
        if (currentScreen === "shared") cards = get().getSharedWithMeCards();

        if (cards.length === 0) {
            set({ inputFilter: input, cardsFiltered: [] });
            return;
        }

        const filtered = cards.filter(card =>
            card.title.toLowerCase().includes(input.toLowerCase()) ||
            card.description.toLowerCase().includes(input.toLowerCase()) ||
            card.author.toLowerCase().includes(input.toLowerCase()) ||
            card.tags.some(tag => tag.toLowerCase().includes(input.toLowerCase()))
        );
        set({ inputFilter: input, cardsFiltered: filtered });
    },

    getMyCards: () => get().cards.filter(card => card.fromUser),

    getFilteredCards: () => get().cardsFiltered,

    getBookmarkedCards: () => get().cards.filter(card => card.bookmarked),

    getRecentCards: () => get().cards.filter(card => card.recentOpened),

    getSharedWithMeCards: () => get().cards.filter(card => card.sharedWithMe),

    getTrashCards: () => get().trash,

    bookmarkCard: (id) => set((state) => ({
        cards: state.cards.map(card =>
            card.id === id ? { ...card, bookmarked: !card.bookmarked } : card
        )
    })),

    createCard: (card) => set((state) => ({
        cards: [...state.cards, card]
    })),

    deleteCard: (id) => set((state) => ({
        cards: state.cards.filter(card => card.id !== id),
        trash: [...state.trash, ...state.cards.filter(card => card.id === id)]
    })),
}));