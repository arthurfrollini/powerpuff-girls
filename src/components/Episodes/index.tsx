import { Show } from "../../infra/models/TvShow";
import { Episode } from "../Episode";

interface EpisodesProps {
  episodes: Show[];
}

export function Episodes({ episodes }: EpisodesProps) {
  return (
    <>
      {episodes.map((episode, index) => (
        <Episode key={episode.id} name={episode.name} episodeNumber={index} />
      ))}
    </>
  );
}
