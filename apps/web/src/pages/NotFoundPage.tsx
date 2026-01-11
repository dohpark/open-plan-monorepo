import { useNavigate } from 'react-router-dom';
import { Button } from '@repo/ui/button';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-5">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-center text-[32px] font-semibold text-[#111] font-sans">
          404 - Not Found
        </h1>
        <Button onClick={handleGoHome} className="max-w-[335px]">
          메인페이지로 이동하기
        </Button>
      </div>
    </div>
  );
}
