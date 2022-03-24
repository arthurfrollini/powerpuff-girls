import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleHome = styled.h1`
  font-size: 40px;
  color: var(--primary);
  margin: 20px 0;

  @media (max-width: 575px) {
    font-size: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: var(--primary);
  margin: 20px 0;

  @media (max-width: 770px) {
    font-size: 30px;
  }

  @media (max-width: 575px) {
    font-size: 20px;
  }

  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 35%;

  @media (max-width: 950px) {
    width: 50%;
  }

  @media (max-width: 575px) {
    width: 70%;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;

  @media (max-width: 770px) {
    width: 80%;
  }
`;

export const ImageHome = styled.img`
  margin-right: 20px;

  @media (max-width: 575px) {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  @media (max-width: 400px) {
    height: 80%;
  }
`;

export const AboutHome = styled.p`
  color: var(--black);
  text-align: justify;

  @media (max-width: 575px) {
    margin-top: 30px;
  }
`;

export const About = styled.p`
  color: var(--black);
  text-align: justify;
`;
