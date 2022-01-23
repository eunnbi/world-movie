import React, {useState, useRef, useEffect} from "react";
import "./scss/Review.scss";

const Review = ({text, username}) => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const ref = useRef();
    useEffect(() => {
        ref.current.innerHTML = text;
        if (ref.current.scrollHeight > 72){
            setShow(true);
        }
    }, []);
    return (
        <div className="review">
            <p className={open ? "review__content" : "review__content close"} ref={ref}></p>
            {
                show && 
                <p className="review__toggle" onClick={() => setOpen(!open)}>{open ? "show less" : "read more"}</p>
            }
            
            <p className="review__username">{username}</p>
        </div>
    );
}

export default React.memo(Review);