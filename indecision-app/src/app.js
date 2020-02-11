console.log('App.js is running!')

const app = {
    title: 'Beautiful title',
    subtitle: 'Better subtitle'
};

//JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Krzysztof',
    age: 26,
    location: 'Wroclaw'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);