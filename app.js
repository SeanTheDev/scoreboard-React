const players = [
  {
    name: "Sean",
    score: 100,
    id: 1
  },
  {
    name: "John",
    score: 99,
    id: 2
  },
  {
    name: "James",
    score: 20,
    id: 3
  },
  {
    name: "Susan",
    score: 50,
    id: 4
  }
];

function Header(props) {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

// create a new component for a player that returns a div with a class of player and a nested div with a class of player-name
function Player(props) {

  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <Counter score={props.score}/>
    </div>
  );

}

function Counter(props){

  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );

}

function App(props){

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length}/>
      {/* Players list */}
      {props.initialPlayers.map( player => 
        <Player name={player.name} score={player.score} key={player.id} />
      )}
    </div>
  );

}

ReactDOM.render(
  <App initialPlayers={players}/>,
  document.getElementById('root')
);