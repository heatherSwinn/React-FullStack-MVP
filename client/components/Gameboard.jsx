
import Highscores from './Highscores.jsx';
import UserInfo from './UserInfo.jsx';

const Gameboard = () => {

    return (
        <div>
            <div id="userinfo">
                <UserInfo />
            </div>
            <div id="highscores">
                <Highscores />
            </div>
        </div>
    )
}

export default Gameboard;