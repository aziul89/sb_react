import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('http://localhost:8080/api/greeting')
            .then(response => response.text())
            .then(data => setMessage(data));
    }, []);

    return (
        <div>
            <h1>React App rodando com Spring Boot!</h1>
            <h1>{message}</h1>
        </div>
    );
}

export default App;
