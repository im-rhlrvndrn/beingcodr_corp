import styled from 'styled-components';

export default styled.div`
    height: 80px;
    width: 100%;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    max-height: 80px;
    cursor: pointer;
    background-color: rgb(${(props) => props.theme.lightBackground});

    .headLine {
        font-size: 1.2rem;
        font-weight: 600;
        text-transform: capitalize;
        margin-left: auto;
    }

    .userDetails {
        margin-left: auto;
        height: 100%;
        display: flex;
        align-items: center;

        img {
            display: block;
            border-radius: 50%;
            /* mask-image: url('../../../../react icons/blob.svg');
            mask-position: center; */
            margin-left: 1rem;
            width: 45px;
            height: 45px;
            object-fit: cover;
            object-position: center;
        }

        p {
            color: white;
        }
    }
`;
