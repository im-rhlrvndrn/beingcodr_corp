import styled from 'styled-components';

export default styled.div`
    padding: 0 0 2em 0;
    flex: 0.05;
    background: rgb(${(props) => props.theme.constants.colorBackground});
    height: 100vh;
    box-shadow: 0px 0 50px 10px rgba(0, 0, 0, 0.2);

    ul {
        width: 100%;
        text-align: center;

        .logo {
            display: grid;
            place-items: center;
            margin-bottom: 2rem;
            width: 100%;
            height: auto;
            padding: 2rem 0;
            text-transform: uppercase;
            /* background-color: rgb(${(props) => props.theme.darkBackground});
            color: rgb(${(props) => props.theme.text}); */
        }

        a:not(.logo) {
            margin-bottom: 1rem;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: capitalize;
            transition: 0.4s ease-in-out;
            cursor: pointer;
            color: rgb(${(props) => props.theme.constants.lightText});

            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
            }
        }
    }
`;
