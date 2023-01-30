import React, { useContext, useEffect, useState } from "react";
import { ImDownload2 } from "react-icons/im";
import styled from "styled-components";
import { Songs } from "~/Context";
export default function ListMusic() {
  const { DataSongs, Song, handleSetSong } = useContext(Songs);
  const [songid, setSongId] = useState(0);
  const handleClickSong = (songid) => {
    setSongId(songid);
    handleSetSong(songid);
  };

  useEffect(() => {
    setSongId(Song.id);
  }, [Song]);

  return (
    <ListMusicStyled className="w-full overflow-y-scroll">
      <table className="table-auto w-full ">
        <thead className="sticky top-0 h-[4rem] text-[1.6rem] text-[#fff] bg-slate-600">
          <tr>
            <th className="w-[10%] text-center">#</th>
            <th className="text-left">Song Name</th>
            <th className="w-[10%] text-center">Singer</th>
            <th className="w-[10%] text-center">
              <ImDownload2 className="inline-block font-semibold" />
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-700">
          {DataSongs.map((song, index) => {
            return (
              <tr
                key={song.id}
                className={`h-[4rem] text-[1.6rem]  hover:bg-slate-500 hover:text-white  text-slate-300 ${
                  songid === song.id && "bg-slate-500 text-white"
                }`}
                onClick={() => handleClickSong(song.id)}
              >
                <th className="text-center font-normal">{index + 1}</th>
                <th className="text-left font-normal">{song.name}</th>
                <th className="text-center font-normal">{song.author}</th>
                <th className="text-center font-normal">
                  <a href={song.url}>
                    <ImDownload2 className="inline-block font-semibold" />
                  </a>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ListMusicStyled>
  );
}

const ListMusicStyled = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 739px) {
    table {
      thead {
        background-color: #1c1c1c;
        height: 5rem;
      }
    }
  }
`;
