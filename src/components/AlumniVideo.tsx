
import React, { useRef, useState } from 'react';

interface AlumniVideoProps {
  videoUrl: string;
}

const AlumniVideo = ({ videoUrl }: AlumniVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={videoRef}
        src={videoUrl}
        className="w-full h-auto"
        muted
        loop
        playsInline
        preload="auto"
        poster={videoUrl.replace('.mp4', '.jpg')}
      />
      <div className={`p-4 bg-white ${isHovering ? 'bg-course-accent/10' : ''}`}>
        <h3 className="font-semibold text-course-main">Alumni Success Story</h3>
        <p className="text-sm text-course-muted">Hover to see their journey</p>
      </div>
    </div>
  );
};

export default AlumniVideo;
