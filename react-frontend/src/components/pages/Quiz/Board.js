import React, { useState, useEffect } from "react";
import Profiles from "./Profiles";
import { Leaderboard } from "./Database";
import { Button } from "@mui/material";
import { getQuizTakenData } from "../../../services/user-services";
import { getUser } from "../../../services/club-services";

export default function Board() {
  const [period, setPeriod] = useState(0);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [finalList, setFinalList] = useState([]);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  // var output = input.reduce(function(result, value) {
  //   result[value.album] = result[value.album] || [];
  //   result[value.album].push({ title: value.title, artist: value.artist });
  //   return result;
  // }, {});

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await getQuizTakenData().then((data) => {
        setLeaderboardData(data);
      });
      await sleep(500);
    };

    getData();
    // const output = leaderboardData.reduce(function(result,value){
    //   result[value.user] = result[value.user] || [];
    //   result[value.user].push({score: value.score});
    //   return result;
    // },{});
    
    //setFinalList(output);

    //console.log(leaderboardData);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const userList2 = await Promise.all(
        leaderboardData &&
          leaderboardData.map(async (member) => {
            const user = await getUser(member.user);
            //console.log(user);
            return {
              id: user.id,
              name: user.username,
              score: member.score,
            };
          })
      );
      setUserList(userList2);
      console.log(userList);
    };
    getData().catch(console.error);
  }, [leaderboardData]);

  useEffect(() => {
    console.log(leaderboardData);
    console.log(finalList);

    const cats = userList  .reduce((catsSoFar, { name, score }) => {
      if (!catsSoFar[name]) catsSoFar[name] = [];
      catsSoFar[name].push(score);
      return catsSoFar;
    
      
    }, {});
    console.log(cats);
    setFinalList(cats);
    setLoading(false);
  }, [userList]);

  const handleClick = async (e) => {
    console.log(userList);
    console.log(leaderboardData);

   

    setPeriod(e.target.dataset.id);
  };

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {leaderboardData ? (
            <>
              <div className="board">
                <h1 className="leaderboard">Leaderboard</h1>

                <div className="duration">
                  <Button variant="contained" onClick={handleClick} data-id="7">
                    7 Days
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    data-id="30"
                  >
                    30 Days
                  </Button>
                  <Button variant="contained" onClick={handleClick} data-id="0">
                    All-Time
                  </Button>
                </div>
                <div id="profile">
                  {userList &&
                    userList.length > 0 &&
                    userList.map((value, index) => (
                      <div className="flex" key={index}>
                        {/* <img className="pr" src={value.img} alt="" /> */}

                        <div className="info">
                          <div className="item_l">
                            {userList &&
                              userList.length > 0 &&
                              userList[index].name}
                          </div>
                          <div className="item_r">
                            {userList[index].score}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                {/* <Profiles
                  Leaderboard={between(leaderboardData, period)}
                ></Profiles> */}
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    if (between == 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with asending order
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
}
