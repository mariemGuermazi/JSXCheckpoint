import './App.css';
import './style.css';
import mysrcimage from "./hello.jpg";
import myvideo from './helloVid.mp4'
function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">THIS IS MARIEM'S PAGE</h1>
        <br />
        <img src={mysrcimage} alt="hello"/>
        <br />
        <img  src="/publicimage.jpg" alt="this is a cat"/>
      </div>
      <video width={320} height={240} controls>
        <source src={myvideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
