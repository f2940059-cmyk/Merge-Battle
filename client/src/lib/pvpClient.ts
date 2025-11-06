import { io, Socket } from 'socket.io-client';
import SoundManager from './SoundManager';

export function createPvpClient(serverUrl: string) {
  let socket: Socket | null = null;
  let currentMatchId: string | null = null;
  let userId: string | null = null;

  function connect(uId: string) {
    userId = uId;
    socket = io(serverUrl, { transports: ['websocket'], autoConnect: true });
    socket.on('connect', () => console.log('pvp socket connected', socket?.id));
    socket.on('match_started', ({ targetBlock }) => {
      console.log('match_started', targetBlock);
      SoundManager.play('match_start');
    });
    socket.on('state_update', (delta) => {
      console.log('state_update', delta);
      SoundManager.play('action');
    });
    socket.on('match_end', (data) => {
      console.log('match_end', data);
      if (data.winner) SoundManager.play(data.winner === userId ? 'win' : 'lose');
    });
    socket.on('player_list', (list) => console.log('players', list));
  }

  function joinMatch(matchId: string) {
    if (!socket || !userId) throw new Error('Not connected');
    currentMatchId = matchId;
    socket.emit('join_match', { matchId, userId });
  }

  function startMatch() {
    if (!socket || !currentMatchId) throw new Error('Not ready');
    socket.emit('start_match', { matchId: currentMatchId });
  }

  function createdBlock(block: any) {
    if (!socket || !currentMatchId || !userId) return;
    socket.emit('created_block', { matchId: currentMatchId, userId, block });
  }

  function disconnect() {
    socket?.disconnect();
    socket = null;
    currentMatchId = null;
  }

  return { connect, joinMatch, startMatch, createdBlock, disconnect };
}
