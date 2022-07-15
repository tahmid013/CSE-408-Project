import React from "react";
import '../../App.css';
import CatBox from './CatBox';
import './Category.css';
function Category() {
    return (
        <>
            <div className='cards'>
                <h1>Quiz Categories</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CatBox
                                src="images/category/cat_1.png"
                                text="Sports"
                                label="Football"
                                path="/quizcategory"
                            />

                            <CatBox
                                src="images/category/cat_2.png"
                                text="History"
                                label="history"
                                path="/quizcategory"
                            />


                        </ul>
                    </div>
                </div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CatBox
                                src="images/category/cat_3.png"
                                text="Geography"
                                label="geography"
                                path="/quizcategory"
                            />
                            <CatBox
                                src="images/category/cat_4.png"
                                text="Science and Math"
                                label="science"
                                path="/quizcategory"
                            />

                        </ul>
                    </div>
                </div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>

                            <CatBox
                                src="images/category/cat_5.png"
                                text="Literature"
                                label="Literature"
                                path="/quizcategory"
                            />
                            <CatBox
                                src="images/category/cat_6.png"
                                text="Movies and Series"
                                label="movies"
                                path="/quizcategory"
                            />
                        </ul>
                    </div>
                </div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>

                            <CatBox
                                src="images/category/cat_7.png"
                                text="GK"
                                label="GK"
                                path="/quizcategory"
                            />
                            <CatBox
                                src="images/category/cat_8.png"
                                text="Space"
                                label="Space"
                                path="/quizcategory"
                            />

                        </ul>
                    </div>
                </div>
            </div>
        </>


    );
}
export default Category;