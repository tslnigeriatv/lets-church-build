import { Audio } from 'expo-av';

let addSong = [];
let sound = null;
let playbackStatus = null;
let currentAudioIndex = null;
let isRepeatModeOn = false; // new variable to keep track of repeat mode

const loadSong = (audios) => {
  addSong = audios;
};

const initializeAudio = async (index) => {
  if (sound !== null) {
    await sound.unloadAsync();
    sound.setOnPlaybackStatusUpdate(null);
    sound = null;
  }
  const audioObject = addSong[index];
  sound = new Audio.Sound();
  await sound.loadAsync(audioObject?.url);
  sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
};

const onPlaybackStatusUpdate = async (status) => {
  if (status) playbackStatus = status;
  if (playbackStatus.didJustFinish) {
    if (isRepeatModeOn) { // repeat mode is on, play the same audio again
      await sound.replayAsync();
    } else { // repeat mode is off, play the next audio
      await playNext();
    }
  }
};

const playAudio = async (index) => {
  currentAudioIndex = index;
  await initializeAudio(index);
  await sound.playAsync();
};

const pauseAudio = async () => {
  await sound.pauseAsync();
};

const stopAudio = async () => {
  await sound.stopAsync();
};

const seekTo = async (seconds) => {
  await sound.setPositionAsync(seconds * 1000);
};

const setRepeatMode = (repeat) => {
  isRepeatModeOn = repeat;
};

const getPosition = () => {
  if (playbackStatus !== null) {
    return playbackStatus.positionMillis / 1000;
  } else {
    return null;
  }
};

const getDuration = () => {
  if (playbackStatus !== null && playbackStatus.durationMillis !== NaN) {
    return playbackStatus.durationMillis / 1000;
  } else {
    return 100;
  }
};

export const TSLTrackPlayer = {
  initializeAudio,
  loadSong,
  playAudio,
  pauseAudio,
  stopAudio,
  seekTo,
  setRepeatMode,
  getPosition,
  getDuration
}