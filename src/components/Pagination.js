import {useEffect, useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import styled from "styled-components";

const StyledPagination = styled.nav`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    button {
        color: #fff;
        background: #000;
        padding: 10px;
        border-radius: 5px;
        flex-basis: 34px;
        margin: 0 10px;
        transition: all 0.3s ease-in-out;
        &:hover {
        background-color: #49a6e9;
        }
        &[disabled] {
        cursor: auto;
        background: rgba(0, 0, 0, 0.5);
        }
        &[aria-current] {
        background-color: #49a6e9;
        }
    }
`;

const Pagination = ({total, limit, page, setPage}) => {
    const numPages = Math.ceil(total / limit);
    const [btnNum] = useState(10);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        if (page > offset + btnNum){
            setOffset(offset + btnNum);
        }
        else if (page === offset){
            setOffset(offset - btnNum);
        }
    }, [page]);
    
    return (
        <StyledPagination>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                <FaChevronLeft/>
            </button>
            {Array(numPages).fill().slice(offset, btnNum + offset).map((_, i) => (
                <button 
                    key={ i + 1 + offset} 
                    onClick={() => setPage(i + offset + 1)}
                    aria-current = {page === offset + i + 1 ? "page" : null}
                >{i + offset +1}</button>
            ))}
            <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
                <FaChevronRight/>
            </button>
        </StyledPagination>
    )
}

export default Pagination;