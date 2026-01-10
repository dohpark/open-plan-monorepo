import { useNavigate } from 'react-router-dom';
import { Button } from '@repo/ui/button';
import { usePhoto } from '../hooks/usePhoto';

export default function MainPage() {
  const navigate = useNavigate();
  const name = '박도희';
  const { data, hasFetched, isLoading, isError, error, mutateAsync } = usePhoto();

  const handleNext = async () => {
    // store에 이미 데이터가 있으면 바로 이동
    if (hasFetched && data) {
      navigate('/result');
      return;
    }

    // 데이터가 없으면 API 호출 후 이동
    try {
      await mutateAsync();
      navigate('/result');
    } catch (err) {
      // 에러는 mutation이 처리하므로 여기서는 페이지 이동만 처리
      console.error('Failed to fetch photo:', err);
    }
  };

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
            {error?.message || '이미지 데이터를 불러올 수 없습니다.'}
          </p>
        )}
        <Button onClick={handleNext} disabled={isLoading} className="w-full lg:text-2xl">
          {isLoading ? '로딩 중...' : '다음'}
        </Button>
      </div>
    </div>
  );
}
