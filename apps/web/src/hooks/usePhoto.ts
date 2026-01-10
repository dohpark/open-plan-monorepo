import { useMutation } from '@tanstack/react-query';
import { fetchImageData } from '../api/photo';
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

  return {
    data: photoData,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    hasFetched,
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
  };
};
