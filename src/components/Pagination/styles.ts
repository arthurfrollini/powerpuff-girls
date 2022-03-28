import styled from "styled-components";

export const PageButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

export const PageButton = styled.button`
  border: 0;
  border-radius: 15px;

  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-weight: bold;

  background-color: var(--secondary);

  &:first-child {
    margin-left: 10px;
  }
`;
