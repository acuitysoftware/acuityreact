import React, { useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (playing) video.pause();
    else video.play();
  }

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-black"
      style={{
        height: "calc(100svh - var(--header-height))",
        minHeight: "calc(100vh - var(--header-height))",
      }}
    >
      <video
        ref={videoRef}
        src="/assets/videos/acuity.mp4"
        autoPlay
        muted
        loop
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-6 left-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60 hover:scale-110"
      >
        {playing ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        )}
      </button>
    </section>
  );
}
