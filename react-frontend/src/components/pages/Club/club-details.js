import React, { useState, useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom';
import { useFetchClubs } from '../../hooks/fetch-clubs';

function ClubDetails() {

    const {id} = useParams();

    const [data, loading, error] = useFetchClubs(id);
    const [ club, setClub ] = useState(null);

    useEffect(() => {
        setClub(data);
    }, [data])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading....</h1>

    return (
        <div>
            <Link to={'/'}>Back</Link>
            {club && <h1>{club.name} {id}</h1>

            }
           
        </div>
    );
}

export default ClubDetails;
