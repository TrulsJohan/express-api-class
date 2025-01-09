async function getData() {
    const res = await fetch('http://localhost:3000/');
    const data = await res.text();
    console.log(data);
}

async function getJson() {
    const res = await fetch('http://localhost:3000/json');
    const data = await res.json();
    console.log(data);
}

async function postData() {
    const res = await fetch('http://localhost:3000/animals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ animal: 'dog', name: 'Laika', age: '8' }),
    });
    const data = await res.json();
    console.log(data);
}

async function postDataMovies() {
    const res = await fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: "Star Wars", title: "Empire Strikes Bsck"}),
    });
    const data = await res.json();
    console.log(data);
}

postDataMovies();
getData();
getJson();
postData();
