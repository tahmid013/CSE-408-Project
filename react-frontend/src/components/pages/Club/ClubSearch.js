import React from 'react';
import { useGlobalContext } from '../../../context';
function ClubSearch () {

    const { setClubSearchTerm } = useGlobalContext();
    const SearchTerm = React.useRef('');

    const searchClubs = (e) => {
        e.preventDefault();
        setClubSearchTerm(SearchTerm.current.value);
    }

    return (
        <section className='section search'>
            <form className='search-form'>
                <div className='form-control'>
                    <label htmlFor='searchBlog'>Search For Clubs </label>
                    <input type='text' id='searchBlog' ref={SearchTerm} onChange={searchClubs}></input>
                </div>
            </form>
        </section>

    )

    
}
export default ClubSearch;