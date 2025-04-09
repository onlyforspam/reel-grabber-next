
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export interface DownloadOption {
  quality: string;
  format: string;
  size: string;
  url: string;
}

interface DownloadCardProps {
  options: DownloadOption[];
  thumbnail?: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ options, thumbnail }) => {
  const handleDownload = (url: string, quality: string) => {
    // Create an anchor element and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = `instagram-reel-${quality}.mp4`; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (options.length === 0) {
    return null;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-black/30 backdrop-blur-sm border-gray-800">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="aspect-[9/16] bg-black/40 rounded-md overflow-hidden">
              {thumbnail ? (
                <img 
                  src={thumbnail} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Download className="w-12 h-12 text-gray-400 opacity-40" />
                </div>
              )}
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold mb-4">Download Options</h3>
            <div className="space-y-3">
              {options.map((option, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-md bg-black/30 border border-gray-800 hover:border-gray-700 transition-all"
                >
                  <div>
                    <span className="text-sm font-medium">
                      {option.quality} - {option.format}
                    </span>
                    <p className="text-xs text-gray-400">{option.size}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleDownload(option.url, option.quality)}
                    className="instagram-gradient animate-gradient"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Files are temporarily cached and will be deleted after download.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadCard;
