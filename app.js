function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

// create a new component for a player that returns a div with a class of player and a nested div with a class of player-name
function Player() {

  return (
    <div className="player">
      <div className="player-name">
        Sean
      </div>
      <Counter />
    </div>
  );

}

function Counter(){

  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  );

}

function App(){

  return (
    <div className="scoreboard">
      <Header />
      {/* Players list */}
      <Player />
    </div>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);