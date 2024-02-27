// @import '../../scss/variables.scss';
import STYLE_VARIABLES from '../../style-variables/style-variables';
import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: ${STYLE_VARIABLES.colors.black};
    color: ${STYLE_VARIABLES.colors.white};
    text-transform: uppercase;
    font-family: ${STYLE_VARIABLES.fonts.openSans};
    font-weight: normal;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: ${STYLE_VARIABLES.colors.white};
        color: ${STYLE_VARIABLES.colors.black};
        border: 1px solid ${STYLE_VARIABLES.colors.black};
    }

    @media only screen and (max-width: ${STYLE_VARIABLES.breakpoints.xs}) {
        width: 100%;
    }
`

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: ${STYLE_VARIABLES.colors.white};

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

export const InvertedButton = styled(BaseButton)`
    background-color: ${STYLE_VARIABLES.colors.white};
    color: ${STYLE_VARIABLES.colors.black};
    border: 1px solid ${STYLE_VARIABLES.colors.black};

    &:hover {
        background-color: ${STYLE_VARIABLES.colors.black};
        color: ${STYLE_VARIABLES.colors.white};
        border: none;
    }
`

// .button-container {
    // min-width: 165px;
    // width: auto;
    // height: 50px;
    // letter-spacing: 0.5px;
    // line-height: 50px;
    // padding: 0 35px 0 35px;
    // font-size: 15px;
    // background-color: $black;
    // color: $white;
    // text-transform: uppercase;
    // font-family: $open-sans;
    // font-weight: normal;
    // border: none;
    // cursor: pointer;
    // display: flex;
    // justify-content: center;

    // @media only screen and (max-width: $xs-breakpoint) {
    //     width: 100%;
    // }

//     &:hover {
//         background-color: $white;
//         color: $black;
//         border: 1px solid $black;
//     }

//     &.google-sign-in {

//     }

//     &.inverted {
//         background-color: $white;
//         color: $black;
//         border: 1px solid $black;

//         &:hover {
//             background-color: $black;
//             color: $white;
//             border: none;
//         }
//     }
// }