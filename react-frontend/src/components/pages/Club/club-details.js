import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchClubs } from '../../../hooks/fetch-clubs'
import { Button } from '../../Button';
import './club-details.css';



function ClubDetails() {



    const { id } = useParams();

    const [data, loading, error] = useFetchClubs(id);
    const [club, setClub] = useState(null);

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [institute, setInstitute] = useState('');

    const sendClubId = () => {
        
    }

    useEffect(() => {
        setClub(data);
        if(data){
        setAbout(data.about);
        setInstitute(data.institute);
        setName(data.name);
        localStorage.setItem('clubId', id);
        }
    }, [data])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading....</h1>

    console.log(data);
    

    var str = window.location.pathname.substring(1);


    return (
        <>
            <div>
                 <h2>{name}</h2>
                 <hr className='club-name'/>
                <h4>{institute}</h4>
                <hr className='ins-name'/>

                

            </div>


            <div className='club-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name='edit-info'
                >
                    Edit Info
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name={`${str}/members`}
                    onClick = {sendClubId}
                >
                    Members
                </Button>

                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name='add_member'
                >
                    Add Member
                </Button>

                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name='approved-quiz'
                >
                    Approved Quiz
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name='events'
                >
                    Events
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name={`${str}/host-event`}
                >
                    Host Event
                </Button>
            </div>
            <hr/>
            <hr/>
            <h3> About</h3>
            <hr/>
            <hr/>
            <p>{about}</p>

        </>
    );
}

export default ClubDetails;
