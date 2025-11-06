import SoundManager from './lib/SoundManager';

// Call initSounds() once (e.g., in App.tsx) after app mounts.
// Place audio files in native bundle / assets and adjust filenames accordingly.
export function initSounds() {
  SoundManager.load('click', 'coin_click.mp3');
  SoundManager.load('coin', 'coin_reward.mp3');
  SoundManager.load('match_start', 'match_start.mp3');
  SoundManager.load('win', 'win_fanfare.mp3');
  SoundManager.load('lose', 'lose_sound.mp3');
  SoundManager.load('action', 'action_tap.mp3');
}
