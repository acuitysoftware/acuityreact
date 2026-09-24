import React from "react";

export default function Hero() {
  return (
    <section className="relative isolate h-[100svh] min-h-[320px] w-full overflow-hidden bg-black">
      <iframe
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
        src="https://www.youtube-nocookie.com/embed/iUtnZpzkbG8?autoplay=1&mute=1&loop=1&playlist=iUtnZpzkbG8&controls=0&modestbranding=1&playsinline=1&rel=0"
        title="Acuity Software Services background video"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </section>
  );
}
