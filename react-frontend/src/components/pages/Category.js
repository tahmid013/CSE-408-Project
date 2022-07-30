import React, { useState, useEffect } from "react";
import '../../App.css';
import CatBox from './CatBox';
import { Link, Route, Routes } from "react-router-dom";
import './Category.css';
import { getClubs } from '../../services/club-services';
import SinglePlayer from "./SinglePlayer";


function Category() {
    var str = window.location.pathname.substring(1);
    var s = str;
    console.log(`${s}/sport`);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [clubs, setClubs] = useState(null);

    const cat_list = [
            {text: 'Sports', label : 'sport', numbers: '1'},
            {text: 'History', label : 'history', numbers: '2'},
            {text: 'Geography', label : 'geography', numbers: '3'},
            {text: 'Science and Math', label : 'science', numbers: '4'},
            {text: 'Literature', label : 'literature', numbers: '5'},
            {text: 'Movies and Series', label : 'movies', numbers: '8'},
            {text: 'Gk', label : 'GK', numbers: '6'},
            {text: 'Space', label : 'space', numbers: '7'},

    ];
    
    
    const listItems = cat_list.map((cat_list_) =>
        console.log(cat_list_.text)

    );

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await getClubs().then(data => {
                setClubs(data);
                setLoading(false);
            })
        }
        getData();
    }, [])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading....</h1>

    return (


        <>
            <div className="category-mainpage">
            <h1>Quiz Categories</h1>
            <div className='cards_1'>
           
                {cat_list && cat_list.map(cat_list_item => {
                    return <Link key={cat_list_item.numbers} to={`/${cat_list_item.label}`}>

                        <CatBox

                            src={window.location.origin + "/images/category/cat_"+`${cat_list_item.numbers}`+".png"}
                            text={`${cat_list_item.text}`}
                            label={`${cat_list_item.label}`}
                            path={`/${s}/${cat_list_item.label}`}

                        />

                    </Link>
                })}
            </div>
            </div>
        </>


    );
}
export default Category;