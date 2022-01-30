import React from "react";
import avatar from "../assets/avatar.png";
const Socials = () => {
  return (
    <div className="profile">
      {/* <div className="avatar"></div> */}
      <center>
        {" "}
        <div className="text">
          <h1>Hi, Jane Doe</h1>
        </div>
        <div className="socialIcons">
          <a
            href="https://www.linkedin.com"
            id="icons"
            className="fa fa-linkedin"
          ></a>
          <a
            href="https://www.instagram.com"
            id="icons"
            className="fa fa-instagram"
          ></a>
          <a
            href="https://www.reddit.com"
            id="icons"
            className="fa fa-reddit-alien"
          ></a>
          <a
            href="https://www.spotify.com/"
            id="icons"
            className="fa fa-spotify"
          ></a>
          <a href="https://mail.google.com/" className="fa fa-inbox"></a>
          <a href="https://web.whatsapp.com/" className="fa fa-whatsapp"></a>
          <a href="https://twitter.com/" className="fa fa-twitter"></a>
        </div>
      </center>
    </div>
  );
};

export default Socials;
