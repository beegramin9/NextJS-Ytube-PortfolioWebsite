
import styled from 'styled-components';

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.6rem 0;
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

