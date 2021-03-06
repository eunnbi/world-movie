import { Outlet } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import Logo from "./Logo";
import Nav from "./Nav";
import NavToggleBtn from "./NavToggleBtn";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #fff;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 0;
  z-index: 5;
  .Header_center {
    width: 85vw;
    max-width: 1200px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: 0;
    .Header_center {
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
      width: 100%;
    }
    .Header-bar {
      width: 100%;
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 1.5rem;
    }
  }
`;

function Header() {
  const [showNav, setShowNav] = useToggle(false);
  return (
    <>
      <HeaderWrapper>
        <div className="Header_center">
          <div className="Header-bar">
            <Logo />
            <NavToggleBtn setShowNav={setShowNav} />
          </div>
          <Nav showNav={showNav} setShowNav={setShowNav} />
        </div>
      </HeaderWrapper>
      <Outlet />
    </>
  );
}

export default Header;
