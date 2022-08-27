import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../Button";
import { getClub } from "../../../services/club-services";
import { auth } from "../../../services/user-services";
import { useFetchClubNames } from "../../../hooks/fetch-club-names";
import "./user.css";
import { Link } from "react-router-dom";

export default function User() {
    const { authData } = useAuth();
    // console.log(authData.user);
    // console.log(authData.user.profile.image);
    // console.log(authData.user.profile.club);
    // console.log("First name " + authData.user.first_name);

    const [loading, setLoading] = useState(false);
    const [clubNames, setClubNames] = useState([]);

    const [clubData, loading2, error2] = useFetchClubNames(authData.user.id);
    console.log(clubData.length);




    return (
        <div class="wrapper">
            <div class="left">
                {<img
                    src={"http://127.0.0.1:8000" + authData.user.profile.image}
                    alt="avatar"
                    width="100"

                />}


                <h4>{authData.user.username}</h4>
                <hr/>
                

                <h4>{authData.user.first_name} {authData.user.last_name}</h4>
                <hr/>
                <h6> Bangladesh University of Engineering and Technology</h6>
                <hr/>


                <div>

                </div>


                <div class="data">
                    <h4>Bio</h4>
                    <h6> {authData.user.profile.bio}</h6>
                </div>
                <div className="add-btns">
                    <Button
                        path_name="editprofile"
                        className="btns"
                        buttonStyle="btn--fit"
                        buttonSize="btn--small"
                    >
                        Edit Profile
                    </Button>
                    <br />

                    {authData.user.profile.is_club_admin ? (
                        <Button
                            path_name="add_question"
                            className="btns"
                            buttonStyle="btn--fit"
                            buttonSize="btn--small"
                        >
                            Add Question
                        </Button>
                    ) : null}
                </div>
            </div>
            <div class="right">
                <div class="info">
                    <h3>Information</h3>
                    <div class="info_data">
                        <div class="data">
                            <h4>Email</h4>
                            <h6>{authData.user.email}</h6>
                        </div>

                    </div>
                </div>

                <div class="projects">
                    <h3>Affiliated Clubs</h3>
                    <div class="projects_data">
                        <div class="data">
                            {clubData.length > 0 ? (
                                <div>
                                    {clubData.map((club) => (
                                        <div key={club.id}>
                                            <Link to= {`/club/${club.id}`} ><h6>{club.name}</h6></Link>
                                        </div>))}
                                </div>
                            ) : (
                                <p>No clubs</p>
                            )
                            }

                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}
