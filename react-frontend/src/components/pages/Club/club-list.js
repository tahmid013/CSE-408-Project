import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { getClubs } from '../../../services/club-services';

=======
import { useGlobalContext } from '../../context';
import { getClubs } from '../../services/club-services';
import ClubSearch from './ClubSearch';
>>>>>>> 670ae9e8188c049fec71cbc9c4c87e3c914bbb5c

function ClubList() {

    const [clubs, setClubs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { clubSearchTerm } = useGlobalContext();
    
    const fetchClubs = async () => {
        setLoading(true);
            console.log("Printing ......")
            console.log(clubSearchTerm);
            await getClubs(clubSearchTerm).then(data => {

                setClubs(data);

                setLoading(false);
            })
        }
     

    useEffect(() => {
        fetchClubs();
    }, [clubSearchTerm]);

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading....</h1>
    return (
        <>
            
            
            <div className='clubsList'>


                {clubs && clubs.map(club => {
                    return <Link key={club.id} to={`/club/${club.id}`}>
                        <div className='eachClubBox'>
                            <div className="card">
                                <h1>{club.name}</h1>
                                <p>{club.institute}</p>
                                <p className="title">{club.about}</p>
                                <p className='btn-visit'><button>Visit</button></p>
                            </div>
                        </div>




                    </Link>
                })}

            </div>
        </>
    );
}

export default ClubList;
