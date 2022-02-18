// import Eddie from './Eddie'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, apiCall } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const userData = useSelector(state => state.userData)
  const store = useSelector(state => state)
  const dispatch = useDispatch();
  const [payload, setPayload] = useState(0)

  const onChange = (e) => {
    setPayload(parseInt(e.target.value))
  }

  const onClick = () => {
    dispatch(increment(payload))
  }

  const displayState = () => {
    console.log(store)
  }

  const apiCallfunction = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        let data = json
        dispatch(apiCall(data))
      })
  }

  return (
    <div className="App">
      <button onClick={() => dispatch(increment(1))}>+</button>
     <h1>Counter: {counter}</h1>
     <button onClick={() => dispatch(decrement(1))}>-</button>
     <br/>
     <br/>
     <input type="number" value={payload} onChange={onChange}></input>
     <button onClick={onClick}>submit</button>
     <br/>
     <br/>
     <button onClick={apiCallfunction}>API Call</button>
     <br/>
     <br/>
     <button onClick={displayState}>Get State</button>
     <br/>
     <br/>
     {userData ? <p>{JSON.stringify(userData)}</p> : null}

    </div>
  );
}

export default App;
