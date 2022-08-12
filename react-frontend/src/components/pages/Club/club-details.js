import React, { useState, useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom';
import {useFetchClubs} from '../../../hooks/fetch-clubs'
import { Button } from '../../Button';
import './club-details.css';



function ClubDetails() {

    const {id} = useParams();

    const [data, loading, error] = useFetchClubs(id);
    const [ club, setClub ] = useState(null);
    const [click,setClick] = useState(false);
    const [button,setButton] =useState(true);

    useEffect(() => {
        setClub(data);
    }, [data])
    useEffect(() => {
        showButton()
    },[])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading....</h1>

    

    const handleClick = () => setClick(!click);
    const closedMobileMenu = () =>setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

   

    window.addEventListener('resize',showButton);

    return (
        <>
        <div>
            <Link to={'/'}>Back</Link>
            {club && <h1>{club.name}</h1>

            }
           
        </div>
        <div className='club-int-container'>
       
          {/* src='../../images/img-1.jpg' */}
          
          {/* <video src='/videos/video-2.mp4' autoPlay loop muted/> */}
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
            path_name='members'
          >
            Members
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
            path_name='host-event'
          >
            Host Event
          </Button>
          </div> 
          <p></p>
          <h1> About Club</h1>
          <p>This is a distinguised club with some higher quality contents.</p>
      </div>
      </>
    );
}

export default ClubDetails;
