import styled from "styled-components";

export const EpisodesContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  flex-wrap: wrap;
  height: 460px;

  @media (max-width: 575px) {
    width: 80%;
  }
`;
