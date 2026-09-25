import React, { useEffect, useRef, useState } from "react";

/* ── YouTube IFrame API loader (runs once per page) ─────────── */
function loadYTApi() {
  if (window.YT && window.YT.Player) return Promise.resolve();
  return new Promise((resolve) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = resolve;
  });
}

export default function Hero() {
  const playerRef = useRef(null);   // YT.Player instance
  const divRef    = useRef(null);   // div that YT replaces with iframe
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    let player;

    loadYTApi().then(() => {
      player = new window.YT.Player(divRef.current, {
        videoId: "iUtnZpzkbG8",
        playerVars: {
          autoplay:        1,
          mute:            1,
          loop:            1,
          playlist:        "iUtnZpzkbG8",
          controls:        0,
          modestbranding:  1,
          playsinline:     1,
          rel:             0,
          disablekb:       1,
        },
        events: {
          onReady(e) {
            e.target.mute();
            e.target.playVideo();
            playerRef.current = e.target;
          },
          onStateChange(e) {
            setPlaying(e.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    });

    return () => {
      try { player?.destroy(); } catch (_) {}
    };
  }, []);

  function togglePlay() {
    const p = playerRef.current;
    if (!p) return;
    if (playing) { p.pauseVideo(); } else { p.playVideo(); }
  }

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: "100vh" }}
    >
      {/* ── YouTube player fills the section ────────────────── */}
      <div
        ref={divRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width:  "max(100%, calc(100vh * 16 / 9))",
          height: "max(100%, calc(100vw * 9 / 16))",
        }}
      />

      {/* ── Subtle dark vignette (no text overlay) ──────────── */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* ── Play / Pause button — bottom-left ───────────────── */}
      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-6 left-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60 hover:scale-110"
      >
        {playing ? (
          /* Pause icon */
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <rect x="6"  y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          /* Play icon */
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        )}
      </button>
    </section>
  );
}
