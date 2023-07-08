// Section07-Ex02-App.js
// Understanding Styles
import './style.css';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};
  
function Profile() {
    return (
        <div>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </div>
    );
}

function App ()
{
    return (
        <div>
            <h1>Welcome to my app</h1>
            <Profile />
        </div>
    );
}

export default App;