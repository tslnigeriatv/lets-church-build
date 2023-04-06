import { Dimensions, Share } from "react-native";

export const colors = {
    black: "#000000",
    white:  "#FFFFFF",
    lightGray: "#CECECE",
    onboardBg: "#EEF1F4",
    primary: "#F26A1D",
    border: "#D7D7D7",
    red: "#FA1304"
}

export const sizes = {
    small: 4,
    horizontalNavMargin: 16
}


export const ScreenHeight = Dimensions.get("screen").height;
export const ScreenWidth = Dimensions.get("screen").width;
export const WindowHeight = Dimensions.get("window").height;



// export const onShare = async () => {
//     try {
//       const result = await Share.share({
//         message: baseUrl+info?.video_link
//       });
//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // shared with activity type of result.activityType
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // dismissed
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };