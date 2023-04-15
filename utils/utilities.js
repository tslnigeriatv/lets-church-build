import { Share } from "react-native";
import * as Clipboard from 'expo-clipboard';

export const copyToClipboard = async (link) => {
    await Clipboard.setStringAsync(link);
};

export const truncTxt = (txt, length) => {
    return txt?.length > length ? `${txt.substr(0, length)}...` : txt;
};

export const onShare = async (message) => {
  try {
    const result = await Share.share({
      message
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const formatDuration = (duration) => {
  let hours = Math.floor(duration / (60 * 60 * 1000));
  let minutes = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((duration % (60 * 1000)) / 1000);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } else {
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }
}
