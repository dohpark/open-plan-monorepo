import { useNavigate } from 'react-router-dom';
import { Button } from '@repo/ui/button';

export default function MainPage() {
  const navigate = useNavigate();
  const name = '박도희';

  const handleNext = () => {
    navigate('/result');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-5 relative">
      {/* Title - Top center */}
      <div className="w-full flex justify-center">
        <h1 className="text-center py-4 px-5 text-[15px] font-medium text-[#1a1a1a]">{name}</h1>
      </div>

      {/* Greeting Section - Center of screen */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-center text-[28px] leading-[1.48] mb-2 font-semibold text-[#111] font-sans min-[1440px]:text-[32px]">
          안녕하세요
        </p>
        <p className="text-center text-[28px] leading-[1.48] font-semibold text-[#111] font-sans min-[1440px]:text-[32px]">
          {name}입니다.
        </p>
      </div>

      {/* Next Button - Bottom */}
      <div className="w-full max-w-[335px] pb-8">
        <Button onClick={handleNext} className="w-full min-[1440px]:text-2xl">
          다음
        </Button>
      </div>
    </div>
  );
}
