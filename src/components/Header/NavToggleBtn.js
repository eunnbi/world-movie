import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const ToggleBtn = styled.button`
  display: none;
  height: 30px;
  background-color: transparent;
  @media ${({ theme }) => theme.device.laptop} {
    display: block;
    color: #49a6e9;
    font-size: 30px;
    margin-top: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: rotateZ(90deg);
    }
  }
`;

function NavToggleBtn({ setShowNav }) {
  return (
    <ToggleBtn onClick={() => setShowNav()}>
      <FaBars />
    </ToggleBtn>
  );
}

export default NavToggleBtn;
