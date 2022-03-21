import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: var(--primary);
  margin-bottom: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const Image = styled.img`
  margin-right: 20px;
`;

export const About = styled.p`
  color: var(--black);
  text-align: justify;
`;
