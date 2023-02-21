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

function App(){

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1}/>
      {/* Players list */}
      <Player name={"Sean"} score={100} />
      <Player name={"John"} score={99} />
      <Player name={"James"} score={20} />
      <Player name={"Susan"} score={50} />
    </div>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);