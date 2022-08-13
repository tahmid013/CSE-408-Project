import React from 'react';
import { useGlobalContext } from '../../../context';
function MemberSearch () {

    const { setMemberSearchTerm } = useGlobalContext();
    const SearchTerm = React.useRef('');

    const searchMembers = (e) => {
        e.preventDefault();
        setMemberSearchTerm(SearchTerm.current.value);
    }

    return (
        <section className='section search'>
            <form className='search-form'>
                <div className='form-control'>
                    <label htmlFor='searchBlog'>Search For Members </label>
                    <input type='text' id='searchBlog' ref={SearchTerm} onChange={searchMembers}></input>
                </div>
            </form>
        </section>

    )

    
}
export default MemberSearch;