import React, {useState, useRef, useEffect} from "react";
import { useToggle } from "../../hooks";
import styled from "styled-components";

const StyledReviewItem = styled.li`
    background-color: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
    border-radius: 5px;
    padding: 10px;
    .ReviewItem-content {
        color: #324d67;
        line-height: 1.5;
        a {
            text-decoration: underline;
        }
        &.close {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        white-space: normal;
        -webkit-box-orient: vertical;
        }
    }
    .ReviewItem-toggle {
        color: #49a6e9;
        text-transform: capitalize;
        cursor: pointer;
    }
    .ReviewItem-username {
        text-align: right;
    }
`

function ReviewItem ({text, username}){
    const [open, setOpen] = useToggle(false);
    const [show, setShow] = useState(false);
    const ref = useRef();

    useEffect(() => {
        ref.current.innerHTML = text;
        if (ref.current.scrollHeight > 72){
            setShow(true);
        }
    }, []);

    return (
        <StyledReviewItem className="review">
            <p className={open ? "ReviewItem-content" : "ReviewItem-content close"} ref={ref}></p>
            {
                show && 
                <p className="ReviewItem-toggle" onClick={() => setOpen()}>{open ? "show less" : "read more"}</p>
            }
            
            <p className="ReviewItem-username">{username}</p>
        </StyledReviewItem>
    );
}

export default ReviewItem;