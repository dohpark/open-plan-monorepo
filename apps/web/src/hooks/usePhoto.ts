import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchImageData, preloadImage } from '../api/photo';
import { usePhotoStore } from '../stores/photoStore';

export const usePhoto = () => {
  const { photoData, hasFetched, setPhotoData, setHasFetched } = usePhotoStore();

  // 버튼 클릭 시 실행되는 mutation
  const mutation = useMutation({
    mutationFn: fetchImageData,
    onSuccess: (data) => {
      setPhotoData(data);
      setHasFetched(true);
    },
  });

  // 이미지 프리로딩 쿼리
  const imageQuery = useQuery({
    queryKey: ['image', photoData?.download_url],
    queryFn: () => preloadImage(photoData!.download_url),
    enabled: !!photoData?.download_url,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 2,
  });

  return {
    data: photoData,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    hasFetched,
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isImageLoading: imageQuery.isPending || imageQuery.isFetching,
    isImageLoaded: imageQuery.isSuccess,
    isImageError: imageQuery.isError,
  };
};
