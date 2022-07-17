import {useState , useEffect} from 'react';
import { getClub } from '../services/club-services';

export function useFetchClubs(clubId){

    const [group, setClub] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
            const getData = async() =>{
                setLoading(true)
                const data = await getClub(clubId);
                setClub(data);
                setLoading(false);
            }
            getData();
    }, [clubId]);

    return  [group, loading, error]

}