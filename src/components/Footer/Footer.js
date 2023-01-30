import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styled from "styled-components";
import { Songs } from "~/Context";
export default function Footer() {
  const { Song, handleSetSong } = useContext(Songs);

  const handleClickNext = () => {
    handleSetSong(Song.id + 1);
  };
  const handleClickPrev = () => {
    handleSetSong(Song.id - 1);
  };
  return (
    <FooterStyled className="footer h-[var(--height-footer)] bg-slate-800">
      <AudioPlayer
        src={Song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        className="player-music"
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
      />
    </FooterStyled>
  );
}
const FooterStyled = styled.div`
  .player-music {
    background-color: rgb(30 41 59);
  }
  .rhap_time,
  .rhap_current-time {
    color: #fff;
  }
`;
