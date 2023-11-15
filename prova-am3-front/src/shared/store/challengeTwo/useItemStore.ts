import { create } from 'zustand';
import { CustomerItem, ProductItem } from './types';

export type StateItem = {
    item: CustomerItem | ProductItem | null
    setItem: (itemProduct: CustomerItem | ProductItem) => void;
};


export const useCustomerStore = create<StateItem>((set) => ({
    item: null,
    setItem: (item) => set({ item })
}));
