
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UrlInput from '@/components/UrlInput';
import DownloadCard from '@/components/DownloadCard';
import VideoPreview from '@/components/VideoPreview';
import { fetchVideoDetails, VideoDetails } from '@/services/downloadService';
import { useToast } from '@/components/ui/use-toast';
import { Download, Video, ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    
    try {
      const details = await fetchVideoDetails(url);
      setVideoDetails(details);
      toast({
        title: "Video found!",
        description: "Select your preferred download option.",
      });
    } catch (error) {
      console.error('Error fetching video:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not process this Instagram Reel. Please try again with a different link.",
      });
      setVideoDetails(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12 mt-8">
          <h1 className="mb-4 font-bold text-gradient">
            Instagram Reel Downloader
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            Download Instagram Reels in high quality with just a few clicks
          </p>
        </section>

        <section className="mb-12">
          <UrlInput onSubmit={handleSubmit} isLoading={isLoading} />
        </section>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 relative">
              <div className="w-16 h-16 rounded-full border-4 border-gray-800 border-t-primary animate-spin"></div>
              <Video className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary animate-pulse" />
            </div>
            <p className="mt-4 text-gray-400">Looking for the video...</p>
          </div>
        )}

        {!isLoading && videoDetails && (
          <div className="mt-8 space-y-8">
            <div className="animate-fade-in">
              <ArrowDown className="w-6 h-6 mx-auto text-primary mb-4 animate-bounce-subtle" />
              <DownloadCard 
                options={videoDetails.downloadOptions}
                thumbnail={videoDetails.thumbnail}
              />
            </div>
          </div>
        )}

        {!isLoading && !videoDetails && (
          <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-black/30 backdrop-blur-sm border-gray-800">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-instagram flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Simple to Use</h3>
                  <p className="text-gray-400 text-center">
                    Just paste the link of any Instagram Reel and click download
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 backdrop-blur-sm border-gray-800">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-instagram flex items-center justify-center mx-auto mb-4">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">High Quality</h3>
                  <p className="text-gray-400 text-center">
                    Download videos in their original quality without watermarks
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 backdrop-blur-sm border-gray-800">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-instagram flex items-center justify-center mx-auto mb-4">
                    <ArrowDown className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Fast Downloads</h3>
                  <p className="text-gray-400 text-center">
                    Our servers process your request instantly for quick downloads
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
        
        <section id="how-it-works" className="py-12 mt-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gradient">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-instagram flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Copy the Instagram Reel Link</h3>
                  <p className="text-gray-400">
                    Open Instagram and find the reel you want to download. Click the "..." button and select "Copy Link".
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-instagram flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Paste the Link</h3>
                  <p className="text-gray-400">
                    Come back to ReelGrabber and paste the link in the input field, then click the Download button.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-instagram flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Download Your Reel</h3>
                  <p className="text-gray-400">
                    Once processed, you'll see download options. Select your preferred quality and save the video to your device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
