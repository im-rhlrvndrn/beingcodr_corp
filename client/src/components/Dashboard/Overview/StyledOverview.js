import styled from 'styled-components';

export default styled.div`
    padding: 2rem;
    color: rgb(${(props) => props.theme.constants.colorBackground});
    font-weight: 600;
    text-transform: uppercase;
`;
