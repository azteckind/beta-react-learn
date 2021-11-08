const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)
}

const baseUrl = "https://i.imgur.com/"
const person = {
    name: 'Gregorio Y. Zara',
    // imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {
    // const name = "Gregorio Y. Zara"
    return(
        <div style={person.theme}>
            <h2>{person.name}'s To Do List for {formatDate(today)}</h2>
            <img
                // src={person.imageUrl}
                src={baseUrl + person.imageId + person.imageSize + '.jpg'}
                alt={person.name}
                className="avatar"
                />
                <ul style={{
                    backgroundColor: 'black',
                    color: 'pink'
                }}>
                    {/* <li>Invent new traffic lights</li>
                    <li>Rehearse a movie scene</li>
                    <li>Improve the spectrum technology</li> */}
                    <li>Improve the videophones</li>
                    <li>Prepare aeronautics lectures</li>
                    <li>Work on the alcholo-fuelled engine</li>
                </ul>
        </div>
    )
}

//Without JSX wrapper <></>, it won't like HTML stuff