import React from 'react'
import Style from "./index.module.css"

import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import BottomHeader from './BottomHeader';

import { useSelector } from "react-redux";
import { useState } from 'react';
import { useEffect } from 'react';



const Header = () => {

    const categoriesState = useSelector(state => state.category);
    const auth = useSelector(state => state.auth);

    const [categoryData, setCategoryData] = useState([]);


    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                {
                    id: category._id,
                    Name: category.name,
                    slug: category.slug,
                    type: category?.type,
                    parentId: category?.parentId,
                    children: category.children.length > 0 && renderCategories(category.children)
                }
            );
        }
        return myCategories;
    }

    // -- Fetching categoy data to pass into the table
    useEffect(() => {
        if (categoriesState.categories) {
            const mappedData = renderCategories(categoriesState.categories);
            setCategoryData(mappedData);
        }
    }, [categoriesState.categories]);


    return (

        <div className={Style.Header}>
            <TopHeader />
            <MiddleHeader user={auth} />
            <BottomHeader category={categoryData} />
        </div>

    )
}

export default Header
