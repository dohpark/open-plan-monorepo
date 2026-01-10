export interface ImageData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const fetchImageData = async (): Promise<ImageData> => {
  const response = await fetch('https://picsum.photos/id/0/info');
  if (!response.ok) {
    throw new Error('Failed to fetch image data');
  }
  return response.json();
};

export const preloadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
};

