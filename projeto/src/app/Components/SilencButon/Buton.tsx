"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [volume, setVolume] = useState(30);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startMusic = async () => {
      if (!audioRef.current || started) return;

      audioRef.current.volume = volume / 100;

      try {
        await audioRef.current.play();
        setStarted(true);
      } catch {}

      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    return () => window.removeEventListener("click", startMusic);
  }, [started, volume]);

  function handleVolume(value: number) {
    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/space.mp3" type="audio/mpeg" />
      </audio>

      <div
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          items-center
          gap-3
          rounded-3xl
          border
          border-white/10
          bg-black/40
          px-4
          py-3
          backdrop-blur-xl
          shadow-2xl
        "
      >
        {volume === 0 ? (
          <VolumeX size={22} className="text-white" />
        ) : (
          <Volume2 size={22} className="text-white" />
        )}

        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => handleVolume(Number(e.target.value))}
          className="w-36 accent-blue-100"
        />

        <span className="text-sm text-white w-10 text-right">
          {volume}%
        </span>
      </div>
    </>
  );
}