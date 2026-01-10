import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ImageData } from '../api/photo';

interface PhotoStore {
  photoData: ImageData | null;
  hasFetched: boolean;
  setPhotoData: (data: ImageData) => void;
  setHasFetched: (fetched: boolean) => void;
  clearPhotoData: () => void;
}

export const usePhotoStore = create<PhotoStore>()(
  persist(
    (set) => ({
      photoData: null,
      hasFetched: false,
      setPhotoData: (data) => set({ photoData: data, hasFetched: true }),
      setHasFetched: (fetched) => set({ hasFetched: fetched }),
      clearPhotoData: () => set({ photoData: null, hasFetched: false }),
    }),
    {
      name: 'photo-storage',
    }
  )
);
