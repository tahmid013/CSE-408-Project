import React from "react";
import '../../App.css';
import CatBox from './CatBox';
import { Link, Route ,Routes } from "react-router-dom";
import './Category.css';
import SinglePlayer from "./SinglePlayer";
function Category() {
    var str = window.location.pathname.substring(1);
    var s = str;
    console.log(`${s}/sport`);
    return (


        <>
            <div className='cards'>
                <h1>Quiz Categories</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CatBox
                            
                                src={window.location.origin + '/images/category/cat_1.png'}
                                text="Sports"
                                label="Football"
                                path ={`/${s}/sport`}
                            
                            />
                        
                            <CatBox
                                src={window.location.origin + '/images/category/cat_2.png'}
                                text="History"
                                label="history"
                                path ={`/${s}/history`}
                            />


                        </ul>
                    </div>
                </div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CatBox
                                src={window.location.origin + '/images/category/cat_3.png'}
                                text="Geography"
                                label="geography"
                                path ={`/${s}/geography`}
                            />
                            <CatBox
                                src={window.location.origin + '/images/category/cat_4.png'}
                                text="Science and Math"
                                label="science"
                                path ={`/${s}/science`}
                            />

                        </ul>
                    </div>
                </div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>

                            <CatBox
                                src={window.location.origin + '/images/category/cat_5.png'}
                                text="Literature"
                                label="Literature"
                                path ={`/${s}/Literature`}
                            />
                            <CatBox
                                src={window.location.origin + '/images/category/cat_6.png'}
                                text="Movies and Series"
                                label="movies"
                                path ={`/${s}/movies`}
                            />
                        </ul>
                    </div>
                </div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>

                            <CatBox
                                src={window.location.origin + '/images/category/cat_7.png'}
                                text="GK"
                                label="GK"
                                path ={`/${s}/GK`}
                            />
                            <CatBox
                                src={window.location.origin + '/images/category/cat_8.png'}
                                text="Space"
                                label="Space"
                                path ={`/${s}/Space`}
                            />

                        </ul>
                    </div>
                </div>
            </div>
        </>


    );
}
export default Category;