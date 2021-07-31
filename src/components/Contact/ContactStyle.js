import styled from 'styled-components';


export const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.5em;

    @media ${(props) => props.theme.breakpoints.md} {
        flex-direction: column;
    }
`;

export const EmailFormContainer = styled.div`
    flex: 4;

    @media ${(props) => props.theme.breakpoints.md} {
        /* 지도랑 똑같게 하려고 */
        width: 40rem;
    }
`

export const EmailColumnList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0;
    }
`

export const Input = styled.input`
    padding: 0 0 0 4px;
    border-radius: 5px;

    border: 1px solid rgba(70, 65, 61, .3);
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.15),
    0 8px 16px -8px rgba(0, 0, 0, 0.15), 0 -6px 16px -6px rgba(0, 0, 0, 0.015);

    &:active,
    &:focus {
        outline: none;
    }
`

export const TextArea = styled.textarea`
    padding: 0 0 0 4px;

    border-radius: 5px;
    border: 1px solid rgba(70, 65, 61, .3);
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.15),
    0 8px 16px -8px rgba(0, 0, 0, 0.15), 0 -6px 16px -6px rgba(0, 0, 0, 0.015);
    &:active,
    &:focus {
        outline: none;
    }
`




//! unused
export const Name = styled.div`

`

export const Email = styled.div`

`

export const Subject = styled.div`

`

export const Message = styled.div`

`