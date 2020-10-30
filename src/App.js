import Forms from './Forms';

function App() {
  return (
    <>
      <Forms hardmode={false} />
      <br/>
      <Forms hardmode={true} />
    </>
  );
}

export default App;
