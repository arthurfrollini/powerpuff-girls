import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
  display: flex;
  background: var(--secondary-light);
  border: 2px solid var(--primary);
  align-items: center;
  height: 40px;
  margin-bottom: 5px;
  border-radius: 20px;

  &:hover {
    opacity: 0.7;
  }
`;

export const EpisodeNumber = styled.span`
  color: var(--primary);
  font-weight: bold;
  margin: 0 20px;
`;

export const EpisodeName = styled.strong``;
