import React from "react";
import { useState, useEffect } from "react";
import { getUser } from "../../../services/club-services";

export default function Profiles({ Leaderboard }) {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [userList, setUserList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lBoard, setlBoard] = useState([]);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    setLoading(true);

    setLeaderboardData(Leaderboard);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const userList2 = await Promise.all(
        leaderboardData&& leaderboardData.map(async (member) => {
          const user = await getUser(member.user);
          await sleep(1000);
          console.log(user);
          return {
            id: user.id,
            name: user.username,
          };
        })
      );
      setUserList(userList2);
      await sleep(1000);
    };
    getData().catch(console.error);
  }, [leaderboardData]);

  useEffect(() => {
    setLoading(false);
  }, [userList,leaderboardData]);
  if (leaderboardData) {
    console.log(Leaderboard);
  }
  return (
    <div id="profile">
      { loading  ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {leaderboardData &&
            (leaderboardData.length > 0) &&
            userList &&
            userList.length > 0 &&
            leaderboardData.map((value, index) => (
              <div className="flex" key={index}>
                <div className="item">
                  {/* <img className="pr" src={value.img} alt="" /> */}

                  <div className="info">
                    <h3 className="name text-dark">{value.user}</h3>
                    <span>{value.score}</span>

                    {/* <span>{value.location}</span> */}
                  </div>
                </div>
                <div className="item">
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

