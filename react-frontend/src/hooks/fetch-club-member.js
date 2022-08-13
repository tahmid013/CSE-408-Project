import {useState , useEffect} from 'react';
import { getClub, getClubMembersByUserId } from '../services/club-services';

export function useFetchClubMember(clubId,userID){

    const [group, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
            const getData = async() =>{
                setLoading(true)
                const data = await getClubMembersByUserId(clubId,userID);
                setData(data);
                setLoading(false);
            }
            getData();
    }, [clubId,userID]);

    return  [group, loading, error]

}