import styled from 'styled-components';

export const SimpleGrid = styled.div`
  display: grid;
`
export const HeadGrid = styled(SimpleGrid)`
  height: auto;
  margin: 5% 20%;
  grid-template-areas:
    "nav  body ";
  grid-template-columns: 360px 1fr;
`

