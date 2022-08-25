import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { AddLobby, AddMultiplayer } from "../../../services/user-services";
import { useAuth } from "../../../hooks/useAuth";
import { getUser } from "../../../services/club-services";


export default function MultiPlayerLobby() {

    const { authData } = useAuth();
    const [online_players, setOnlinePlayers] = useState(null);
    const [player_1, setPlayer1] = useState(null);
    const [player_2, setPlayer2] = useState(null);

    useEffect(() => {
        console.log("MultiPlayerLobby");
        const getData = async () => {
            const uploaded = await AddLobby(
                authData.user.profile.id, authData.user.username
            )
            if (uploaded) {
                console.log("User added");
                setOnlinePlayers(uploaded);
            }

        }
        getData();

    }, []);



    useEffect(() => {
        console.log(online_players);
        if ( online_players.id % 2 != 0 ) {

            getUser(online_players[0].user_id).then(data => {
                setPlayer1(data);
            })

            getUser(online_players[1].user_id).then(data => {
                setPlayer2(data);
            })

        }
    }, [online_players]);

    useEffect(() => {
        if (online_players.id % 2 != 0) {
            console.log(player_1);
            console.log(player_2);
            console.log("MultiPlayerLobby");
            const getData = async () => {
                const matchPaired = await AddMultiplayer(
                    player_1.id, player_2.id, 10, 15, player_1.username, player_2.username
                )
            }
            getData();
        }
    }, [player_1, player_2]);


    return (
        <>
            <div>
                Multiplayer Lobby
            </div>





        </>
    )
}


