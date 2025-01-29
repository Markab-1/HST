import React, {useState} from "react";

import s from './ShowText.module.css';
import {Wrapper} from './ShowText.styled';

function ShowText( {children} ) {
    const [showMore, setShowMore] = useState(false);
    return(
        <div className={s.container}>        

       <Wrapper height={showMore ? 'auto' : '210px'}>{children}</Wrapper>         

        <button className={s.btn} onClick={() => setShowMore(!showMore)}>{showMore ? "Show less": "Show more"}</button>
         </div>

    )
}

export default ShowText;
