// SoundManager for React Native using react-native-sound
import Sound from 'react-native-sound';

type SoundMap = { [key: string]: Sound | null };

class SoundManagerClass {
  private sounds: SoundMap = {};
  private enabled = true;

  load(name: string, filename: string) {
    try {
      const snd = new Sound(filename, Sound.MAIN_BUNDLE, (err) => {
        if (err) {
          console.warn('sound load error', filename, err);
          this.sounds[name] = null;
        } else {
          this.sounds[name] = snd;
        }
      });
    } catch (e) {
      console.warn('load sound exception', e);
      this.sounds[name] = null;
    }
  }

  play(name: string) {
    if (!this.enabled) return;
    const s = this.sounds[name];
    if (!s) {
      console.warn('sound not loaded', name);
      return;
    }
    s.stop(() => {
      s.setCurrentTime(0);
      s.play((success) => {
        if (!success) {
          console.warn('sound play failed', name);
        }
      });
    });
  }

  stop(name: string) {
    const s = this.sounds[name];
    if (s) s.stop();
  }

  setEnabled(v: boolean) { this.enabled = v; }
}

const SoundManager = new SoundManagerClass();
export default SoundManager;
