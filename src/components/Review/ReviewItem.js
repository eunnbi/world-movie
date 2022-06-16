import React, { useState, useRef, useEffect } from "react";
import { useToggle } from "../../hooks";
import styled, { css } from "styled-components";

const StyledReviewItem = styled.li`
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.5rem;
  border-radius: 5px;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .username {
    text-align: right;
  }
`;

const Content = styled.p`
  opacity: 0.9;
  line-height: 1.5;
  a {
    text-decoration: underline;
  }
  ${({ close }) =>
    close &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      white-space: normal;
      -webkit-box-orient: vertical;
    `}
`;
const Toggle = styled.p`
  color: ${({ theme }) => theme.color.skyBlue};
  text-transform: capitalize;
  cursor: pointer;
`;

function ReviewItem({ text, username }) {
  const [open, setOpen] = useToggle(false);
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current.innerHTML = text;
    if (ref.current.scrollHeight > 72) {
      setShow(true);
    }
  }, []);

  return (
    <StyledReviewItem>
      <Content close={!open} ref={ref} />
      {show && (
        <Toggle onClick={setOpen}>{open ? "show less" : "read more"}</Toggle>
      )}
      <p className="username">{username}</p>
    </StyledReviewItem>
  );
}

export default ReviewItem;
