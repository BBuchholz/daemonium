import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="game-board">

        <div class="daemon-area">

          <h1>
            <strong>EMPYREAN</strong> <br/> Choose your response to the play of the Heavenly City...
          </h1>

          <div class="stats daemon-stats" onClick="showStats()">
            <div class="life-bar">
              <div class="life-left daemon-color"></div>
            </div>
            <div class="life-total"></div>
            <div class="thumbnail">💦</div>
            <div class="name m-index-name">MI</div>
          </div>
          
          <div class="card daemon-card daemon-color">
            <div class="text"></div>
            <img class="image" alt="daemon card one" />
            <div class="power"></div>
          </div>

        </div>

        <div class="player-area">

          <div class="stats player-stats" onClick="showStats()">
            <div class="life-bar">
              <div class="life-left player-color"></div>
            </div>
            <div class="life-total"></div>
            <div class="thumbnail">🌡</div>
            <div class="name h-index-name">HI</div>
          </div>

          <div class="card player-card player-color">
            <div class="text"></div>
            <img class="image" alt="player card one" />
            <div class="power"></div>
          </div>

          <div class="card player-card player-color">
            <div class="text"></div>
            <img class="image" alt="player card two" />
            <div class="power"></div>
          </div>

          <div class="card player-card player-color">
            <div class="text"></div>
            <img class="image" alt="player card tree" />
            <div class="power"></div>
          </div>

          <button class="start-game" onClick="startGame()">Play the Game!</button>
          <button class="next-turn" onClick="playTurn()">Next!</button>
        </div>
      </div>



      <div class="winner-section">
        <div>
          <span class="winner-message">You have fallen...</span>
          <button class="restart" onClick="location.reload()">Play Again</button>
          <button onClick="showStats()">Show Stats</button>
        </div>
      </div>
    </div>
  );
}

export default App;
