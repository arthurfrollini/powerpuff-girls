import {
  Container,
  Title,
  Image,
  ContentWrapper,
  Content,
  About,
} from "./styles";

interface HeaderProps {
  name: string;
  imageSource: string;
  summary: string;
  isHome: boolean;
}

export function Header({ name, imageSource, summary, isHome }: HeaderProps) {
  return (
    <Container>
      <Title>{name}</Title>
      {isHome ? (
        <ContentWrapper>
          <Image src={imageSource} height="200px" alt="PowerPuff Girls Image" />
          <About>{summary}</About>
        </ContentWrapper>
      ) : (
        <Content>
          <Image
            src={imageSource}
            height="200px"
            alt="PowerPuff Girls Image"
            style={{
              marginBottom: 30,
            }}
          />
          <About>{summary}</About>
        </Content>
      )}
    </Container>
  );
}
