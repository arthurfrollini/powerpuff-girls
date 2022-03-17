interface EpisodeProps {
  name: string;
  episodeNumber: number;
}

export function Episode({ name, episodeNumber }: EpisodeProps) {
  return (
    <div style={{ display: "flex" }}>
      <span>{`${episodeNumber + 1} -`}</span>
      <strong>{name}</strong>
    </div>
  );
}
