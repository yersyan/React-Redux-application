import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../redux/slices/categorySlice";
import './Categories.css'
import {useSearchParams} from "react-router-dom";

const Categories = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const {categories} = useSelector(state => state.categoryReducer)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <ul className="categories">
            {
                categories.map(({id, name}) => {
                    return <li
                        key={id}
                        onClick={() => setSearchParams({
                            category: id
                        })}
                        className={+searchParams.get("category") === id ? "active" : undefined}
                    >
                        {name}
                    </li>
                })
            }
        </ul>
    );
};

export default Categories;