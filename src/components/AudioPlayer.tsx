// src/components/AudioPlayer.tsx
import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

import subZeroMusic from '../../public/music/SubZeroMusic.mp3';

const AudioPlayer = () => {
  const soundRef = useRef<Howl | null>(null);
  const soundIdRef = useRef<number | null>(null);  // ← NEW: store the ID returned by play()
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [subZeroMusic],
      loop: true,
      volume: 0.3,
      html5: true,
      preload: true,
    });

    // Unlock audio context on first user gesture
    const unlockAudio = () => {
      if (soundRef.current && !soundRef.current.playing()) {
        const id = soundRef.current.play();          // play() returns the sound ID (number)
        soundRef.current.pause(id);                  // immediately pause after silent play
        soundIdRef.current = id;                     // ← save it
      }
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    };

    document.addEventListener('click', unlockAudio);
    document.addEventListener('touchstart', unlockAudio);

    return () => {
      if (soundRef.current) {
        if (soundIdRef.current !== null) {
          soundRef.current.unload();                 // unload() can take id, but for single sound it's optional
        } else {
          soundRef.current.unload();
        }
      }
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    };
  }, []);

  const togglePlay = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      // Fade out → pause
      if (soundIdRef.current !== null) {
        soundRef.current.fade(soundRef.current.volume(), 0, 800, soundIdRef.current);
        soundRef.current.once('fade', () => {
          soundRef.current?.pause(soundIdRef.current!);
        }, soundIdRef.current);
      } else {
        // Fallback if no ID stored (rare)
        soundRef.current.fade(soundRef.current.volume(), 0, 800);
        soundRef.current.once('fade', () => soundRef.current?.pause());
      }
    } else {
      // Play and fade in
      const id = soundRef.current.play();            // ← capture returned ID
      soundIdRef.current = id;                       // save for future use
      soundRef.current.fade(0, 0.3, 1200, id);
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
      }}
    >
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          fontSize: '28px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(4px)',
          transition: 'all 0.3s ease',
        }}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </div>
  );
};

export default AudioPlayer;