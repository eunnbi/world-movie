import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const StyledPagination = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 1.3rem;
`;

const Button = styled.button`
  color: #fff;
  background: #000;
  padding: 0.7rem;
  border-radius: 5px;
  flex-basis: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.color.skyBlue};
  }
  &[disabled] {
    cursor: auto;
    background: rgba(0, 0, 0, 0.5);
  }
  &[aria-current] {
    background-color: ${({ theme }) => theme.color.skyBlue};
  }
`;

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  const btnNum = useRef(5);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (page > offset + btnNum.current) {
      setOffset(offset + btnNum.current);
    } else if (page === offset) {
      setOffset(offset - btnNum.current);
    }
  }, [page]);

  return (
    <StyledPagination>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        <FaChevronLeft />
      </Button>
      {Array(numPages)
        .fill()
        .slice(offset, btnNum.current + offset)
        .map((_, i) => (
          <Button
            key={i + 1 + offset}
            onClick={() => setPage(i + offset + 1)}
            aria-current={page === offset + i + 1 ? "page" : null}
          >
            {i + offset + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        <FaChevronRight />
      </Button>
    </StyledPagination>
  );
};

export default Pagination;
