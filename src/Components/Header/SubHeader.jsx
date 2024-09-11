import React from 'react'
import Style from "./index.module.css"

import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';


const SubHeader = () => {

   

    return (

        <div className={Style.Header}>
            <TopHeader />
            <MiddleHeader />
        </div>

    )
}

export default SubHeader
