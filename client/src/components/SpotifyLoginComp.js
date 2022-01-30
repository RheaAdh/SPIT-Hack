import React from "react";
import SpotifyLogin from "react-spotify-login";
import { clientId, redirectUri } from "./settings";
import axios from "axios";
const SpotifyLoginComp = () => {
  const [response, setResponse] = React.useState(null);
  const [accesstoken, setAccesstoken] = React.useState(null);

  const onSuccess = (response) => {
    setResponse(response);
    setAccesstoken(response.access_token);
    localStorage.setItem("accesstoken", response.access_token);
  };
  const getReccom = async () => {
    // const res = await axios.get("https://api.spotify.com/v1/recommendations/", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + accesstoken,
    //   },
    // });
    const data = {
      name: "yoyoyooyo rhea",
      public: false,
    };
    const res = await axios.post(
      "https://api.spotify.com/v1/users/playlists",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + accesstoken,
        },
      }
    );
    console.log("ppppppppppppppppppppppppppppppp");
    console.log(res);
  };
  const onFailure = (response) => {
    alert("oops");
    console.log(response);
  };
  return (
    <div>
      <SpotifyLogin
        clientId={clientId}
        redirectUri={redirectUri}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <button onClick={getReccom}>on click</button>
    </div>
  );
};

export default SpotifyLoginComp;
