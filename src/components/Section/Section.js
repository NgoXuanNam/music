import React from "react";
import styled from "styled-components";
import DetailMusic from "./Container/DetailMusic/DetailMusic";
import ListMusic from "./Container/ListMusic/ListMusic";

export default function Section() {
  return (
    <SectionStyled className="section bg-slate-600 overflow-hidden">
      <DetailMusic />
      <ListMusic />
    </SectionStyled>
  );
}

const SectionStyled = styled.div`
  height: calc(100vh - (var(--height-header) + var(--height-footer)));
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media screen and (max-width: 739px) {
    grid-template-columns: 1fr;
  }
`;
