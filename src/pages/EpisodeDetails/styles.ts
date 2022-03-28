import styled from "styled-components";

export const GoBackButton = styled.button`
  border: 0;
  padding: 10px 20px;
  border-radius: 15px;
  font-weight: 700;
  background-color: var(--secondary);

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
