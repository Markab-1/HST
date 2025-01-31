import React, {useState, useEffect, useRef} from "react";

import s from './ShowText.module.css';
import {Wrapper} from './ShowText.styled';

function ShowText({children}) {
    const [showMore, setShowMore] = useState(false);
    const [height, setHeight] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
      setHeight(ref.current.clientHeight);
    },[height]);

    return(
        <div className={s.container}>        
       <Wrapper className={showMore ? "active" : ""} height={height}> <div ref={ref}>{children}</div>  </Wrapper>         
        <button className={s.btn} onClick={() => setShowMore(!showMore)}>{showMore ? "Show less": "Show more"}</button>
        </div>
    )
}

export default ShowText;
