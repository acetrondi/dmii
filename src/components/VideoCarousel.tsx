import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AlumniVideo from "./AlumniVideo";

interface VideoCarouselProps {
  videos: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === videos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Calculate which videos to show based on current visible count and current index
  const getVisibleVideos = () => {
    // For mobile: show 1, tablet: 2, desktop: 3
    const visibleCount = {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    };

    // Get the videos to display in the current view
    const mobileVideos = [videos[currentIndex % videos.length]];

    // For tablet, show current and next
    const tabletStartIndex = currentIndex % videos.length;
    const tabletVideos = [
      videos[tabletStartIndex],
      videos[(tabletStartIndex + 1) % videos.length],
    ];

    // For desktop, show 3 videos starting from current
    const desktopStartIndex = currentIndex % videos.length;
    const desktopVideos = [
      videos[desktopStartIndex],
      videos[(desktopStartIndex + 1) % videos.length],
      videos[(desktopStartIndex + 2) % videos.length],
    ];

    return { mobileVideos, tabletVideos, desktopVideos };
  };

  const { mobileVideos, tabletVideos, desktopVideos } = getVisibleVideos();

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2">
        <button
          onClick={goToPrevious}
          className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-6 h-6 text-course-main" />
        </button>
      </div>

      <div className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2">
        <button
          onClick={goToNext}
          className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6 text-course-main" />
        </button>
      </div>

      {/* Videos - Responsive Display */}
      <div className="block lg:hidden md:hidden">
        {" "}
        {/* Mobile */}
        <div className="w-full max-w-md mx-auto">
          <AlumniVideo videoUrl={mobileVideos[0]} />
        </div>
      </div>

      <div className="hidden md:block lg:hidden">
        {" "}
        {/* Tablet */}
        <div className="grid grid-cols-2 gap-8">
          {tabletVideos.map((video, index) => (
            <div key={index} className="w-full">
              <AlumniVideo videoUrl={video} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        {" "}
        {/* Desktop */}
        <div className="grid grid-cols-3 gap-8">
          {desktopVideos.map((video, index) => (
            <div key={index} className="w-full">
              <AlumniVideo videoUrl={video} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              Math.floor(currentIndex % videos.length) === index
                ? "bg-course-main w-4"
                : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
