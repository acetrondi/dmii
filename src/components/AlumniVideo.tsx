import React, { useRef, useState } from "react";

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
      <div className="relative h-96">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-fit"
          muted={false}
          loop
          playsInline
          preload="auto"
          poster={videoUrl.replace(".mp4", ".jpg")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none flex items-end p-3">
          <p className="text-white text-sm font-medium">Alumni Success Story</p>
        </div>
      </div>
    </div>
  );
};

export default AlumniVideo;
