
import styled from 'styled-components';

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem 0rem;

    img {
        //* max-width: SectionText 따라감
        max-width: 800px;
        border-radius: 10px;
        box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
        object-fit: cover;
        @media ${props => props.theme.breakpoints.md}{
            max-width: 670px;
        }
    }
    
`;

export const LeftSection = styled.div`
  width: 90%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;


