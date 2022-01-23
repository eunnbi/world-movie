import {useEffect, useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import "./scss/Pagination.scss";

const Pagination = ({total, limit, page, setPage}) => {
    const numPages = Math.ceil(total / limit);
    const [btnNum, setbtnNum] = useState(10);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        if (page > offset + btnNum){
            setOffset(offset + 10);
        }
        else if (page === offset){
            setOffset(offset - btnNum);
        }
    }, [page]);
    return (
        <nav className="pagination">
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
        </nav>
    )
}

export default Pagination;