
import Highscores from './Highscores.jsx';
import UserInfo from './UserInfo.jsx';

const Gameboard = ({ username, onRestart, onFinish }) => {

    const handleRestart = () => {
        onRestart();
    }

    const handleFinish = () => {
        onFinish();
    }

    return (
        <div>
            <div className="userinfo">
                <UserInfo username={username} />
            </div>
            <div id="highscores">
                <Highscores />
            </div>
        </div>
    )
}

export default Gameboard;