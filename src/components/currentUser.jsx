import React from "react";
import { auth } from "./firebase";

const CurrentUser = ({ user }) => {
  let styles = {
    width: "30px",
    height: "30px",
    margin: "5px",
    borderRadius: "15px"
  };

  return (
    <div className="pb-8">
        <div className="avatar">
            <img style={styles} src={user.photoURL} alt='' />
            <span>{user.displayName}</span>
        </div>


      <button className="btn secondary small" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </div>
  );
};

export default CurrentUser;
