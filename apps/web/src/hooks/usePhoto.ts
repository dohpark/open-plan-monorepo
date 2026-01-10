import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchImageData } from '../api/photo';
import { usePhotoStore } from '../stores/photoStore';

export const usePhoto = () => {
  const { photoData, hasFetched, setPhotoData, setHasFetched } = usePhotoStore();

  // Store에 데이터가 없거나 hasFetched가 false일 때만 fetch
  const query = useQuery({
    queryKey: ['photo', 'id-0'],
    queryFn: fetchImageData,
    enabled: !hasFetched || !photoData,
  });

  // Query 데이터를 store에 저장
  useEffect(() => {
    if (query.data && (!photoData || photoData.id !== query.data.id)) {
      setPhotoData(query.data);
      setHasFetched(true);
    }
  }, [query.data, photoData, setPhotoData, setHasFetched]);

  // Store에 데이터가 있으면 즉시 반환, 없으면 query 결과 반환
  return {
    data: photoData || query.data,
    isLoading: photoData ? false : query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};
