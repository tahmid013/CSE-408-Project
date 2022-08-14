import { useState, useEffect } from "react";
import { getClub, getClubsFromUserId } from "../services/club-services";

function createData(id, name) {
  return { id, name };
}

let rows = [];

export function useFetchClubNames(userID) {
  const [group, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [clubList, setClubList] = useState([]);
  const [listArr, setListArr] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getClubsFromUserId(userID);
      setData(data);
      setLoading(false);
    };
    getData();
  }, [userID]);

  useEffect(() => {
    const getData = async () => {
      const clubList = await Promise.all(
        group.map(async (member) => {
          const club = await getClub(member.club_id);
          console.log(club);
          return {
            id: club.id,
            name: club.name,
          };
        })
      );
      setClubList(clubList);
    };
    getData().catch(console.error);
  }, [group]);

  useEffect(() => {
    //console.log(userList);
    rows = [];
    for (let i = 0; i < clubList.length; i++) {
      console.log(clubList[i]);
      rows.push(createData(clubList[i].id, clubList[i].name));
      setListArr((listArr) => [
        createData(clubList[i].id, clubList[i].name),
        ...listArr,
      ]);
    }
    console.log(rows);
    setLoading(false);
  }, [clubList]);

  useEffect(() => {
    console.log(listArr);
  }, [listArr]);

  return [clubList, loading, error];
}
