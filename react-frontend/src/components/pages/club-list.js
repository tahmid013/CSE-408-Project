import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getClubs } from '../../services/club-services';

function ClubList() {

    const [clubs, setClubs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
