import styled from 'styled-components';

export default styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: white;
    box-shadow: 0 5px 10px 0 white;

    .navWrapper {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__logo {
            width: max-content;
            height: 100%;
            display: flex;
            align-items: center;

            img {
                width: 100px;
                height: auto;
            }
        }

        &__navItems {
            width: max-content;
            height: 100%;
            display: flex;
            align-items: center;

            &__navItemsWrapper {
                width: 100%;
                display: flex;
                justify-content: space-between;

                &__navLinks {
                    ul {
                        height: 100%;
                        display: flex;
                        align-items: center;

                        a {
                            margin-right: 1.5rem;
                            text-transform: capitalize;
                            transition: 0.4s ease-in-out;

                            &:hover {
                                color: rgb(
                                    ${(props) => props.theme.constants.lightColorBackground}
                                );
                            }
                        }
                    }
                }

                img#userProfile {
                    display: block;
                    width: 50px;
                    height: 50px;
                    margin-right: 0px;
                    /* mask-image: url('../icons/blob-shape.svg'); */
                    mask-position: center;
                    background-color: black;
                }

                &__navAuth {
                    display: flex;
                    align-items: center;

                    a {
                        padding: 1rem 1.5rem;
                        border-radius: 5px;
                        text-transform: capitalize;
                        color: white;
                        font-weight: 600;
                        background-color: rgb(
                            ${(props) => props.theme.constants.lightColorBackground}
                        );

                        &:nth-child(1) {
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
    }
`;
