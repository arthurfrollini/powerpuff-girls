import styled from "styled-components";

export const EpisodesContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  flex-wrap: wrap;
  height: 460px;
`;

export const PageButtonsContainer = styled.div``;

export const PageButton = styled.button`
  border: 0;
  border-radius: 15px;

  width: 30px;
  height: 30px;
  margin-right: 10px;
  font-weight: bold;

  background-color: var(--secondary);
`;
