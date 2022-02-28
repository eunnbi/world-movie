import styled, { css } from "styled-components";

const StyledHeading = styled.div.attrs(({level}) => ({
    as: `h${level}`
}))`
    font-weight: bold;
    color: ${({fontcolor}) => fontcolor};
    ${({level, size}) => size ? css`
        font-size: ${size}px;
    ` :css`
        font-size: ${11 * (5 - level)}px;
    `}
`

function Heading({level, size, children, ...rest}){
    return (
        <StyledHeading level={level} size={size} {...rest}>
            {children}
        </StyledHeading>
    );
}

Heading.defaultProps = {
    level: 1
};

export default Heading;