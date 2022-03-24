import {
  Container,
  Title,
  TitleHome,
  Image,
  ImageHome,
  ContentWrapper,
  Content,
  About,
  AboutHome,
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
      {isHome ? (
        <>
          <TitleHome>{name}</TitleHome>
          <ContentWrapper>
            <ImageHome
              src={imageSource}
              height="200px"
              alt="PowerPuff Girls Image"
            />
            <AboutHome>{summary}</AboutHome>
          </ContentWrapper>
        </>
      ) : (
        <>
          <Title>{name}</Title>
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
        </>
      )}
    </Container>
  );
}
