
import React from 'react';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

interface VideoPreviewProps {
  thumbnail?: string;
  title?: string;
  author?: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ 
  thumbnail = '/placeholder.svg',
  title = 'Instagram Reel',
  author = 'Unknown Creator'
}) => {
  return (
    <Card className="overflow-hidden bg-black/30 backdrop-blur-sm border-gray-800 w-full max-w-sm mx-auto">
      <div className="relative aspect-[9/16] bg-black/60">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <Play className="w-12 h-12 text-gray-400 opacity-50" />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="rounded-full bg-white/20 backdrop-blur-sm p-3">
            <Play className="w-8 h-8 text-white" fill="white" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-400">{author}</p>
      </div>
    </Card>
  );
};

export default VideoPreview;
