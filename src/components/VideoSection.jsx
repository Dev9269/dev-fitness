import { useRef, useState } from "react";
import { motion } from "framer-motion";

const VIDEO_ID = "cIuYFCAJ2a8";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  return (
    <section className="py-10 flex items-center justify-center bg-black">
      <div
        ref={ref}
        className="w-[90%] md:w-[65%] max-w-4xl rounded-lg overflow-hidden shadow-lg"
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
            title="YouTube Video"
            className="w-full relative h-320 md:h-[420px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="relative w-full cursor-pointer group"
            onClick={() => setPlaying(true)}
            aria-label="Play video"
          >
            <img
              src="/assets/youtube_cover-MB7Fp-w9.avif"
              alt="Video Thumbnail"
              className="w-full object-cover h-320 md:h-[420px]"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 rounded-full bg-[#eb0000] flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="ml-1 border-y-[12px] border-l-[20px] border-y-transparent border-l-white" />
              </span>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}