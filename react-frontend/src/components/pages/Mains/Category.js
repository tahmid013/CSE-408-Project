import React, { useState, useEffect } from "react";
import '../../../Apps/App.css';
import CatBox from './CatBox';
import { Link, Route, Routes } from "react-router-dom";
import './Category.css';
import { getClubs } from '../../../services/club-services';
import SinglePlayer from "../Quiz/SinglePlayer";
import {getCategories} from '../../../services/quiz-services';

function Category() {
    var str = window.location.pathname.substring(1);
    var s = str;
    //console.log(`${s}/sport`);
    console.log("Now in here-> ");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);

    // const cat_list = [
    //         {text: 'Sports', label : 'sport', numbers: '1'},
    //         {text: 'History', label : 'history', numbers: '2'},
    //         {text: 'Geography', label : 'geography', numbers: '3'},
    //         {text: 'Science and Math', label : 'science', numbers: '4'},
    //         {text: 'Literature', label : 'literature', numbers: '5'},
    //         {text: 'Movies and Series', label : 'movies', numbers: '8'},
    //         {text: 'Gk', label : 'GK', numbers: '6'},
    //         {text: 'Space', label : 'space', numbers: '7'},

    // ];
    
    
    // const listItems = cat_list.map((cat_list_) =>
    //     console.log(cat_list_.text)

    // );

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await getCategories().then(data => {
                setCategories(data);
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
           
                {categories && categories.map(cat_list_item => {
                    console.log(cat_list_item.id);
                    console.log(cat_list_item.name);
                    return <Link key={cat_list_item.id} to={`/${cat_list_item.id}`} >

                        <CatBox
                            
                            
                            
                            src={window.location.origin + "/images/category/cat_"+`${cat_list_item.id}`+".png"}
                            text={`${cat_list_item.name}`}
                            label={`${cat_list_item.name}`}
                            path={`/${s}/${cat_list_item.id}`}

                        />

                    </Link>
                })}
            </div>
            </div>
        </>


    );
}
export default Category;