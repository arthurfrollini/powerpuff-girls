import { StyledLink, EpisodeName, EpisodeNumber } from "./styles";

interface EpisodeProps {
  name: string;
  id: string;
  episodeNumber: number;
}

export function Episode({ name, id, episodeNumber }: EpisodeProps) {
  return (
    <StyledLink to={`episode/${id}`}>
      <EpisodeNumber>{episodeNumber + 1}</EpisodeNumber>
      <EpisodeName>{name}</EpisodeName>
    </StyledLink>
  );
}
