import Forms from './Forms';
import { v4 as uuidv4 } from 'uuid';


function randomize(params) {
  return params
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
}

function App() { 
  let ulabels = [
    {id:uuidv4(), text:"a", value:"", sort:Math.random()},
    {id:uuidv4(), text:"b", value:"", sort:Math.random()},
    {id:uuidv4(), text:"c", value:"", sort:Math.random()},
    {id:uuidv4(), text:"d", value:"", sort:Math.random()},
    {id:uuidv4(), text:"e", value:"", sort:Math.random()}];
  let labels = randomize(ulabels)

  return (
    <>
      <Forms level={0} ulabels={labels} />
      <br/>
      <Forms level={1} ulabels={labels} />
      <br/>
      <Forms level={2} ulabels={labels} />      
      <br/>
      <Forms level={3} ulabels={labels} />
    </>
  );
}

export default App;
