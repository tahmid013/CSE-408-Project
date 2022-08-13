import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getUsers } from '../../../services/club-services';
import { useGlobalContext } from '../../../context';



function MemberList() {

    const [members, setMembers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { memberSearchTerm } = useGlobalContext();
    
    const fetchMembers = async () => {
        setLoading(true);
            console.log("Printing ......")
            console.log(memberSearchTerm);
            await getUsers(memberSearchTerm).then(data => {

                setMembers(data);

                setLoading(false);
            })
        }
     

    useEffect(() => {
        fetchMembers();
    }, [memberSearchTerm]);

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading....</h1>
    return (
        <>
            
            
            <div className='clubsList'>


                {members && members.map(member => {
                    return
                        <div className='eachClubBox'>
                            <div className="card">
                                <h1>{member.username}</h1>
                                
                                
                            </div>
                        </div>




                
                })}

            </div>
        </>
    );
}

export default MemberList;
