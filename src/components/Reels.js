import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reels = ({ video, isVisible, onVisible }) => {
  const videoRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) {
        onVisible();
        if (videoRef.current && videoRef.current.paused) {
          videoRef.current.play(); // Play the video only if it is paused
        }
      } else {
        if (videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause(); // Pause the video only if it is playing
        }
      }
    },
  });
  return (
    <div>
      <div
        ref={ref}
        className="snap-center h-screen flex items-center justify-center relative"
      >
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover"
          muted
          loop
        />
        {video.tags.map((tag, idx) => (
          <motion.div
            key={idx}
            className="absolute bg-white text-black p-2 rounded shadow-lg"
            style={{ top: tag.position.top, left: tag.position.left }}
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {tag.title}
          </motion.div>
        ))}
        <div className="absolute bottom-5 left-5 flex gap-4">
          <button
            onClick={() => (videoRef.current.muted = !videoRef.current.muted)}
            className="bg-white text-black p-2 rounded"
          >
            Mute/Unmute
          </button>
          <button
            onClick={() =>
              videoRef.current.paused
                ? videoRef.current.play()
                : videoRef.current.pause()
            }
            className="bg-white text-black p-2 rounded"
          >
            Play/Pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reels;
