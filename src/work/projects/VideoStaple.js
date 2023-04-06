import React from "react";
import ReactPlayer from "react-player";
import vid from "../../about/images/IMG_4233.mp4";

const Player = () => {
  return (
    <ReactPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    //   url={vid}
      width="100%"
      height="100%"
      controls
    />
  );
};

export default Player;
