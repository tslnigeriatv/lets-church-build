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