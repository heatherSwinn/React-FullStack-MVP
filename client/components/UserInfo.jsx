import { useState, useEffect } from "react";

const UserInfo = ({ username }) => {
    const [userInfo, setUserInfo] = useState([]);
    
    useEffect(() => {
        fetch(`/api/userinfo/${encodeURIComponent(username)}`)
        .then((res) => res.json())
        .then((userInfo) => {
            setUserInfo(userInfo);
          })
      }, [username]);
    
    
      return (
        <div>
          {userInfo.map((player) => (
            <div className="userInfo" key={player.player_id}>
              <p>Username: {player.username}</p>
              <p>Lives: {player.lives}</p>
              <p>Current Score: {player.currentscore}</p>
            </div>
          ))}
        </div>
      )
}

export default UserInfo;