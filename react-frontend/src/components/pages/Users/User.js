import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../Button";
import { getClub } from "../../../services/club-services";
import { auth } from "../../../services/user-services";
import { useFetchClubNames } from "../../../hooks/fetch-club-names";

export default function User() {
  const { authData } = useAuth();
  // console.log(authData.user);
  // console.log(authData.user.profile.image);
  // console.log(authData.user.profile.club);
  // console.log("First name " + authData.user.first_name);

  const [loading, setLoading] = useState(false);
  const [clubNames, setClubNames] = useState([]);

  const[clubData, loading2, error2] = useFetchClubNames(authData.user.id);
  console.log(clubData.length);


  

  return (
    <div className="user">
      <img
        src={"http://127.0.0.1:8000" + authData.user.profile.image}
        alt="avatar"
      />
      <br />
      <h4 className="userName">{authData.user.username}</h4>
      <h5 className="userName">{authData.user.first_name} {authData.user.last_name}</h5>
      

      <br />
      <p>{authData.user.profile.bio}</p>
      <div>
        <h5>Clubs</h5>
        {clubData.length > 0 ? (
          <div>
            {clubData.map((club) => (
              <div key={club.id}>
                <h6>{club.name}</h6>
              </div>))}
          </div>
        ) : (
          <p>No clubs</p>
        )
        }
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
        <br/>

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
  );
}
