// Section04-Ex02-App.js
// Notice that the curly braces { } are used in JSX to embed JavaScript expressions or variables. 
import './AvatarCSS.css';

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};
  
function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve teh video phone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alchol-fuelled engine</li>
            </ul>
        </div>
    );
}

function App ()
{
    return (
        <section>
            <h1>Todo list</h1>
            <TodoList />
        </section>
    );
}

export default App;