import styled from 'styled-components'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  max-width: 40.5rem;
  width: 100%;

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
    max-width: 8rem;
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    font-size: 5rem;
    line-height: 5rem;
    padding: 0;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  max-width: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 680px) {
  }
`
