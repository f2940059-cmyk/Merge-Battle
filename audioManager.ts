// Лёгкий AudioManager для игры (HTMLAudioElement-based).
// Положите звуки в public/sounds: merge.mp3, move.mp3, spawn.mp3, purchase.mp3, coin.mp3
type SfxKey = 'merge' | 'move' | 'spawn' | 'purchase' | 'coin' | 'ui';

interface SfxConfig { path: string; volume?: number; pool?: number; }

class AudioManager {
  private sfxMap: Record<SfxKey, SfxConfig> = {
    merge: { path: '/sounds/merge.mp3', volume: 1, pool: 6 },
    move: { path: '/sounds/move.mp3', volume: 0.8, pool: 4 },
    spawn: { path: '/sounds/spawn.mp3', volume: 0.8, pool: 3 },
    purchase: { path: '/sounds/purchase.mp3', volume: 0.9, pool: 2 },
    coin: { path: '/sounds/coin.mp3', volume: 1, pool: 2 },
    ui: { path: '/sounds/ui_click.mp3', volume: 0.6, pool: 2 }
  };

  private pools: Partial<Record<SfxKey, HTMLAudioElement[]>> = {};
  private muted = false;
  private masterVolume = 1;

  init() {
    // pre-create audio elements pools
    (Object.keys(this.sfxMap) as SfxKey[]).forEach(k => {
      const cfg = this.sfxMap[k];
      this.pools[k] = [];
      for (let i = 0; i < (cfg.pool || 1); i++) {
        const a = new Audio(cfg.path);
        a.preload = 'auto';
        a.volume = (cfg.volume ?? 1) * this.masterVolume;
        a.addEventListener('error', () => {
          // silent: file may be missing
        });
        this.pools[k]!.push(a);
      }
    });
  }

  setMuted(v: boolean) {
    this.muted = v;
  }
  toggleMute() {
    this.muted = !this.muted;
  }
  setVolume(v: number) {
    this.masterVolume = Math.max(0, Math.min(1, v));
    // apply to pools
    (Object.keys(this.pools) as SfxKey[]).forEach(k => {
      const cfg = this.sfxMap[k];
      this.pools[k]!.forEach(a => { a.volume = (cfg.volume ?? 1) * this.masterVolume; });
    });
  }

  play(key: SfxKey) {
    if (this.muted) return;
    const pool = this.pools[key];
    if (!pool || pool.length === 0) {
      // try to create a fallback audio element
      const cfg = this.sfxMap[key];
      if (!cfg) return;
      const a = new Audio(cfg.path);
      a.volume = (cfg.volume ?? 1) * this.masterVolume;
      a.play().catch(()=>{});
      return;
    }
    // find a non-playing instance
    for (let i = 0; i < pool.length; i++) {
      const a = pool[i];
      if (a.paused || a.ended || a.currentTime === 0) {
        try {
          a.currentTime = 0;
          a.volume = ((this.sfxMap[key].volume ?? 1) * this.masterVolume);
          a.play().catch(()=>{});
        } catch {}
        return;
      }
    }
    // all busy: clone and play (allow overlap)
    try {
      const clone = pool[0].cloneNode(true) as HTMLAudioElement;
      clone.volume = ((this.sfxMap[key].volume ?? 1) * this.masterVolume);
      clone.play().catch(()=>{});
      // garbage-collected after end
      clone.addEventListener('ended', () => {
        try { clone.remove(); } catch {}
      });
    } catch {}
  }
}

const audioManager = new AudioManager();
export default audioManager;
