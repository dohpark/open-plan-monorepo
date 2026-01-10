import { useQuery } from '@tanstack/react-query';
import { fetchImageData } from '../api/photo';
import type { ImageData } from '../api/photo';

export const usePhoto = () => {
  return useQuery<ImageData, Error>({
    queryKey: ['photo', 'id-0'],
    queryFn: fetchImageData,
  });
};

