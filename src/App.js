import Animationskey from './animationskey'
import Transition from './transition';
import './App.css';

function App() {
  return (
    <div className="App">
       <Transition/>
      <div className="anim">
       <h1>Rotate</h1> 
      </div>
      <div className="trans2">
       <h1 className='opacity'>Opacity</h1> 
      </div>
      <div className="transcale">
       <h1 className='scale'>Scale</h1> 
      </div>
      <div className="grow-width">
       <h1 className='scaleW'>ScaleW</h1> 
      </div>
      <div className="trasla">
       <h1 className='trasla-w'>Translate</h1> 
      </div>
      <Animationskey/>
      <div className="anim-in">
       <h1>circle-move</h1> 
      </div>
    </div>
  );
}

export default App;
