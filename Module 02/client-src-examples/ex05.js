// https://react.dev/learn#conditional-rendering

function AdminPanel () {
    return (
        <h1>Admin Panel</h1>
    );
}

function LoginForm () {
    return (
        <h1>Login Form</h1>
    );
}


function ConditionalRendering () {
    let content;
    let isLoggedIn = true;

    if (isLoggedIn) {
        content = <AdminPanel />;
    } else {
        content = <LoginForm />;
    }
    return (
    <div>
        {content}
    </div>
    );
}


function App() {
    return (
      <div>
        <h1>Conditional Rendering</h1>
        <ConditionalRendering />
      </div>
    );
}

export default App;