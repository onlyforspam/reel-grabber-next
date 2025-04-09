
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

interface UrlInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const UrlInput: React.FC<UrlInputProps> = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validateUrl = (input: string): boolean => {
    // Basic validation for Instagram URLs
    const regex = /^https?:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\/([a-zA-Z0-9_-]+)/i;
    return regex.test(input);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!url.trim()) {
      setError('Please enter an Instagram Reel URL');
      return;
    }
    
    if (!validateUrl(url)) {
      setError('Please enter a valid Instagram Reel URL');
      return;
    }
    
    onSubmit(url);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      if (validateUrl(text)) {
        setError(null);
      }
    } catch (err) {
      console.error('Failed to read clipboard', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="glass-effect rounded-lg p-1 flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Instagram Reel URL here..."
            className="bg-black/40 border-gray-700 text-white placeholder:text-gray-400 pr-[100px]"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handlePaste}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 hover:text-white"
          >
            Paste
          </Button>
        </div>
        <Button 
          type="submit" 
          className="instagram-gradient animate-gradient hover:shadow-lg transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
              Processing...
            </span>
          ) : (
            <span className="flex items-center gap-1">
              Download <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          )}
        </Button>
      </div>
      {error && (
        <p className="mt-2 text-red-400 text-sm">{error}</p>
      )}
      <p className="mt-3 text-xs text-gray-400 text-center">
        Example: https://www.instagram.com/reel/C1v2C3d4E5f/
      </p>
    </form>
  );
};

export default UrlInput;
