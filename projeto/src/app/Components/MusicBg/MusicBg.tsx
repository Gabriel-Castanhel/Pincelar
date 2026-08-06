"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {
        // Handle the error if autoplay is blocked
    });
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
    >
      <source src="/audio/background.mp3" type="audio/mpeg" />
    </audio>
  );
}