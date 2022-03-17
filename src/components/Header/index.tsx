interface HeaderProps {
  name: string;
  imageSource: string;
  summary: string;
}

export function Header({ name, imageSource, summary }: HeaderProps) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageSource} alt="PowerPuff Girls Logo" />
      <p>{summary}</p>
    </div>
  );
}
