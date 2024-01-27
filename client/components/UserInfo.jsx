import { useState, useEffect } from "react";

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState([]);
    
    useEffect(() => {
        fetch("/api/userinfo")
        .then((res) => res.json())
        .then((userInfo) => {
            setUserInfo(userInfo);
          })
      }, []);
    
    
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