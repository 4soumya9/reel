import React, { useState } from "react";
import Reels from "./Reels";

const videos = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    tags: [
      { title: "Product 1", position: { top: "20%", left: "30%" } },
      { title: "Product 2", position: { top: "50%", left: "60%" } },
    ],
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    tags: [{ title: "Product 3", position: { top: "40%", left: "20%" } }],
  },
  {
    id: 3,
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    tags: [
      { title: "Product 4", position: { top: "30%", left: "40%" } },
      { title: "Product 5", position: { top: "70%", left: "50%" } },
    ],
  },
  {
    id: 4,
    src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    tags: [
      { title: "Product 6", position: { top: "60%", left: "15%" } },
      { title: "Product 7", position: { top: "35%", left: "75%" } },
    ],
  },
  {
    id: 5,
    src: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    tags: [
      { title: "Product 8", position: { top: "10%", left: "25%" } },
      { title: "Product 9", position: { top: "80%", left: "60%" } },
    ],
  },
];
const VideoReelPage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVisibility = (id) => {
    setCurrentVideo(id);
  };
  return (
    <div>
      {videos.map((video) => (
        <Reels
          key={video.id}
          video={video}
          isVisible={currentVideo === video.id}
          onVisible={() => handleVisibility(video.id)}
        />
      ))}
    </div>
  );
};

export default VideoReelPage;
