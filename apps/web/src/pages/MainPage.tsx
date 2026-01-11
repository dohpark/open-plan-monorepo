import { useNavigate, Navigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import throttle from 'lodash.throttle';
import { Button } from '@repo/ui/button';
import { usePhoto } from '../hooks/usePhoto';
import { usePhotoStore } from '../stores/photoStore';

export default function MainPage() {
  const navigate = useNavigate();
  const name = '박도희';
  const { data, hasFetched, isLoading, isError, mutateAsync } = usePhoto();

  const handleNext = useCallback(async () => {
    // store에 이미 데이터가 있으면 바로 이동
    if (hasFetched && data) {
      navigate('/result');
      return;
    }

    // 데이터가 없으면 API 호출 후 이동
    try {
      await mutateAsync();
      // mutateAsync의 onSuccess에서 store가 업데이트되므로,
      // store 상태를 직접 확인하여 데이터가 있는지 확인 후 이동
      const storeState = usePhotoStore.getState();
      if (storeState.hasFetched && storeState.photoData) {
        navigate('/result');
      }
    } catch (err) {
      void err; // 에러는 mutation이 처리하므로 여기서는 페이지 이동만 처리
    }
  }, [hasFetched, data, navigate, mutateAsync]);

  // throttle 적용: 첫 클릭 즉시 실행, 이후 1초 동안 추가 클릭 무시
  const throttledHandleNext = useMemo(
    () => throttle(handleNext, 1000, { leading: true, trailing: false }),
    [handleNext]
  );

  // 라우팅 가드: 조회 이력이 있으면 /result로 이동
  if (hasFetched) {
    return <Navigate to="/result" replace />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-5 relative">
      {/* Title - Top center */}
      <div className="w-full flex justify-center">
        <h1 className="text-center py-4 px-5 text-[15px] font-medium text-[#1a1a1a]">{name}</h1>
      </div>

      {/* Greeting Section - Center of screen */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-center text-[28px] leading-[1.48] mb-2 font-semibold text-[#111] font-sans lg:text-[32px]">
          안녕하세요
        </p>
        <p className="text-center text-[28px] leading-[1.48] font-semibold text-[#111] font-sans lg:text-[32px]">
          {name}입니다.
        </p>
      </div>

      {/* Next Button - Bottom */}
      <div className="w-full max-w-[335px] pb-8">
        {isError && (
          <p className="text-center text-sm text-red-500 mb-2 font-sans">
            {'이미지 데이터를 불러올 수 없습니다.'}
          </p>
        )}
        <Button onClick={throttledHandleNext} loading={isLoading} className="w-full lg:text-2xl">
          다음
        </Button>
      </div>
    </div>
  );
}
