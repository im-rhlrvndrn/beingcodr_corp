import styled from 'styled-components';

export default styled.div`
    flex: 0.95;
    background: rgb(${(props) => props.theme.darkBackground});
    color: rgb(${(props) => props.theme.text});
    overflow-y: auto;

    &::-webkit-scrollbar-track {
        margin-right: 30px;
        background-color: transparent;
    }

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: rgb(${(props) => props.theme.constants.colorBackground});
    }
`;
