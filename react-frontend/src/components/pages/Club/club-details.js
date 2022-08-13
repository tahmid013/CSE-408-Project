import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchClubs } from '../../../hooks/fetch-clubs';
import { useFetchClubMember } from '../../../hooks/fetch-club-member';
import { Button } from '../../Button';
import './club-details.css';
import {useAuth} from '../../../hooks/useAuth';



function ClubDetails() {



    const { id } = useParams();

    const [clubId, setClubId] = useState(id);
    const { authData } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isMember, setIsMember] = useState(false);

    console.log(clubId);
    console.log(authData.user.id);

    const [data, loading, error] = useFetchClubs(id);
    const[memberData, loading2, error2] = useFetchClubMember(clubId,authData.user.id);
    const [club, setClub] = useState(null);

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [institute, setInstitute] = useState('');

    const sendClubId = () => {
        localStorage.setItem('clubId', id);
    }

    useEffect(() => {
        setClub(data);
        if(data){
        setAbout(data.about);
        setInstitute(data.institute);
        setName(data.name);
        }
        if(memberData&& memberData.length > 0){
            setIsAdmin(memberData[0].is_admin);
            setIsMember(true);
        }
        else if(!memberData){
            setIsMember(false);
        }
    }, [data,memberData])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading....</h1>

    console.log(data);
    console.log(isAdmin);
    console.log(isMember);
    

    var str = window.location.pathname.substring(1);


    return (
        <>
            <div>
                 <h2>{name}</h2>
                 <hr className='club-name'/>
                <h4>{institute}</h4>
                <hr className='ins-name'/>

                

            </div>

            <div>
                {isMember ?
                    <>
                        {isAdmin ?
                            <>
                                <h4>You are the admin of this club</h4>
                            </>
                            :
                            <>
                                <h4>You are a member of this club</h4>
                            </>
}
                    </>
                    :
                    <>
                        <h4>You are not a member of this club</h4>
                    </>

                }
            </div>


            <div className='club-btns'>
                {isAdmin ?
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name='edit-info'
                >
                    Edit Info
                </Button>
                    :
                    null}
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name={`${str}/members`}
                    onClick = {sendClubId}
                >
                    Members
                </Button>

                {isAdmin ?
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name='add_member'
                >
                    Add Member
                </Button>
                    :
                    null}

                {isAdmin ?
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name='approved-quiz'
                >
                    Approved Quiz
                </Button>
                    :
                    null}
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name='events'
                >
                    Events
                </Button>
                {isMember ?
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path_name={`${str}/host-event`}
                >
                    Host Event
                </Button>
                    :
                    null}
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
