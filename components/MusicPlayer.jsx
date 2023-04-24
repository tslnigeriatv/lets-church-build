import { Audio } from 'expo-av';

let addSong = [];
let sound = null;
let playbackStatus = null;
let currentAudioIndex = null;

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
  playbackStatus = status;
  if (status.didJustFinish) {
    await playNext();
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

const playNext = async () => {
  if (currentAudioIndex + 1 < addSong.length) {
    currentAudioIndex++;
    await initializeAudio();
    await sound.playAsync();
  } else {
    currentAudioIndex = 0;
    await initializeAudio();
    await sound.playAsync();
  }
};

const playPrevious = async () => {
  if (currentAudioIndex - 1 >= 0) {
    currentAudioIndex--;
    await initializeAudio();
    await sound.playAsync();
  } else {
    currentAudioIndex = addSong.length - 1;
    await initializeAudio();
    await sound.playAsync();
  }
};

const getPosition = () => {
  if (playbackStatus !== null) {
    // this returns the position in seconds
    return playbackStatus.positionMillis / 1000;
  } else {
    return null;
  }
};

const getDuration = () => {
  if (playbackStatus !== null) {
    return playbackStatus.durationMillis / 1000;
  } else {
    return null;
  }
};

export const TSLTrackPlayer = {
  initializeAudio,
  loadSong,
  playAudio,
  pauseAudio,
  stopAudio,
  seekTo,
  playNext,
  playPrevious,
  getPosition,
  getDuration
}