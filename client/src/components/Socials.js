import React from "react";
import avatar from "../assets/avatar.png";
import { useAuth } from "../context/AuthContext";
const Socials = () => {
  const auth = useAuth();
  return (
    <div className="profile">
      {/* <div className="avatar"></div> */}

      <button
        id="icons"
        className="logout-btn fa fa-arrow-left"
        onClick={() => {
          auth.logout();
        }}
        style={{ color: "white", marginLeft: "1rem", marginTop: "1rem" }}
      ></button>
      <center>
        {" "}
        <div className="text">
          <h1>Hi, {auth.user.fullName}</h1>
        </div>
        <div className="socialIcons">
          <a
            target="_blank"
            href="https://www.linkedin.com"
            id="icons"
            className="fa fa-linkedin"
          ></a>
          <a
            target="_blank"
            href="https://www.instagram.com"
            id="icons"
            className="fa fa-instagram"
          ></a>
          <a
            target="_blank"
            href="https://www.reddit.com"
            id="icons"
            className="fa fa-reddit-alien"
          ></a>
          <a
            target="_blank"
            href="https://www.spotify.com/"
            id="icons"
            className="fa fa-spotify"
          ></a>
          <a
            target="_blank"
            href="https://mail.google.com/"
            className="fa fa-inbox"
          ></a>
          <a
            target="_blank"
            href="https://web.whatsapp.com/"
            className="fa fa-whatsapp"
          ></a>
          <a
            target="_blank"
            href="https://twitter.com/"
            className="fa fa-twitter"
          ></a>
        </div>
      </center>
    </div>
  );
};

export default Socials;
