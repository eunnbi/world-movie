import styled from "styled-components";

const StyledHeading = styled.div.attrs(({ level }) => ({
  as: `h${level}`,
}))`
  font-weight: bold;
  color: ${({ fontcolor }) => fontcolor};
  font-size: ${({ level }) => `${(7 - level) / 3}rem`};
`;

function Heading({ level, children, ...rest }) {
  return (
    <StyledHeading level={level} {...rest}>
      {children}
    </StyledHeading>
  );
}

Heading.defaultProps = {
  level: 1,
};

export default Heading;
