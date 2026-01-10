import { useNavigate } from 'react-router-dom';
import { Button } from '@repo/ui/button';
import { usePhoto } from '../hooks/usePhoto';

export default function ResultPage() {
  const navigate = useNavigate();
  const { data: imageData, hasFetched } = usePhoto();

  const handlePrevious = () => {
    navigate('/');
  };

  // store에 데이터가 없으면 에러 표시
  if (!hasFetched || !imageData) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
        <p className="text-[#1a1a1a] font-sans">이미지 데이터를 불러올 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Header */}
      <div className="w-full bg-gradient-to-b from-[#E5E5E5] to-[#F5F5F5] py-4 px-5">
        <h1 className="text-center text-[15px] font-medium text-[#1a1a1a] font-sans">박도희</h1>
      </div>

      {/* Main Content - Responsive Layout */}
      {/* Mobile: Image on top, cards below (stacked) */}
      {/* Tablet: Similar to mobile with adjusted spacing */}
      {/* Desktop: Full width layout, group centered in screen, cards and button with 12px gap */}
      <div className="flex-1 px-5 py-6 md:px-6 md:py-8 lg:px-8 lg:py-8 flex flex-col lg:justify-center">
        <div className="w-full lg:max-w-none mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center lg:gap-20 w-full">
            {/* Image Section */}
            <div className="w-full lg:flex-1 lg:max-w-[65%] mb-6 md:mb-8 lg:mb-0">
              <div className="rounded-[24px] overflow-hidden bg-white shadow-sm">
                <img
                  src={imageData.download_url}
                  alt={`Photo by ${imageData.author}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Metadata Section - Cards and button with fixed 12px gap */}
            <div className="w-full lg:flex-1 lg:max-w-[35%] flex flex-col gap-3">
              {/* ID and Author Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[15px] text-[#111] font-medium font-sans">id</p>
                    <p className="text-[15px] text-[#111] font-medium opacity-50 font-sans">
                      {imageData.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] text-[#111] font-medium font-sans">author</p>
                    <p className="text-[15px] text-[#111] font-medium opacity-50 break-words font-sans">
                      {imageData.author}
                    </p>
                  </div>
                </div>
              </div>

              {/* Width and Height Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[15px] text-[#111] font-medium font-sans">width</p>
                    <p className="text-[15px] text-[#111] font-medium opacity-50 font-sans">
                      {imageData.width.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] text-[#111] font-medium font-sans">height</p>
                    <p className="text-[15px] text-[#111] font-medium opacity-50 font-sans">
                      {imageData.height.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* URL and Download URL Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-[15px] text-[#111] font-medium font-sans">url</p>
                    <a
                      href={imageData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-[#111] font-medium opacity-50 break-all hover:opacity-100 hover:underline font-sans block transition-opacity"
                    >
                      {imageData.url}
                    </a>
                  </div>
                  <div>
                    <p className="text-[15px] text-[#111] font-medium font-sans">download_url</p>
                    <a
                      href={imageData.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-[#111] font-medium opacity-50 break-all hover:opacity-100 hover:underline font-sans block transition-opacity"
                    >
                      {imageData.download_url}
                    </a>
                  </div>
                </div>
              </div>

              {/* Previous Button - Always 12px gap from cards */}
              <div className="flex justify-center">
                <Button onClick={handlePrevious} className="w-full md:w-[154px] lg:w-[154px]">
                  이전
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
