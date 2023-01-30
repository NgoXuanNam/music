import React, { useContext } from "react";
import styled from "styled-components";
import { Songs } from "~/Context";

export default function DetailMusic() {
  const { Song } = useContext(Songs);

  return (
    <DetailMusicStyled className="detailmusic pl-7 pt-4 pr-7 pb-7 overflow-y-scroll ">
      <h2 className="text-[2rem] leading-[3rem] text-cyan-600 font-medium">
        Now playing
      </h2>
      <h2 className="text-[2.5rem] text-[#fff]">{Song.name}</h2>
      <div className="detailmusic__infor mt-5">
        <img
          src={Song.links.images[0].url}
          alt="avatar"
          className="w-[70%] ml-auto mr-auto"
        />
        <div className="dtailmusic__infor-author mt-5 flex justify-between items-center w-[70%] ml-auto mr-auto">
          <img
            src={Song.links.images[1].url}
            alt="avatar"
            className="w-[20%] rounded-full"
          />
          <p className="text-[2rem] font-medium text-[#fff]">{Song.author}</p>
        </div>
      </div>
    </DetailMusicStyled>
  );
}

const DetailMusicStyled = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 739px) {
    h2 {
      display: none;
    }
    .detailmusic__infor {
      img {
        width: 20rem;
        height: 20rem;
        border-radius: 999px;
      }
    }
    .dtailmusic__infor-author {
      display: none;
    }
  }
`;
