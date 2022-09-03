import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getImages, reset} from "../../redux/slices/imageSlice";
import "./Images.css"
import {useSearchParams} from "react-router-dom";
import Preloader from "../ui/Preloader";

const Images = () => {
    const dispatch = useDispatch()
    const {images, loading} = useSelector(state => state.imageReducer)

    const [page, setPage] = useState(1)
    const [searchParams] = useSearchParams()
    const category = searchParams.get("category")

    useEffect(() => {
        dispatch(reset())
        setPage(1)
    }, [category])

    useEffect(() => {
        dispatch(getImages({category, page}))
    }, [category, page])


    return (
        <div className="container">

            : <ul className="images">
            {
                images.map(({id, url}) => {
                    return <li key={id}>
                        <img src={url} alt="image"/>
                    </li>
                })
            }
        </ul>
            {loading && <Preloader/>}

            {!images.length
                ? <p>Select a category</p>
                : <button
                    onClick={() => setPage(page + 1)}
                >
                    Load More
                </button>}
        </div>
    );
};

export default Images;