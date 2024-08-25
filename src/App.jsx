
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counterslice';
import UserList from './UserList';

function App() {
  // const dispatch = useDispatch();

  // const value = useSelector((store) => store.counter);
  // console.log(value);

  return (
    <div>
      {/* <div>{value.value}</div>
      <div>
        <button onClick={() => dispatch(getAllUser())}>Art</button> 
        <button onClick={() => dispatch(decrement())}>Azt</button> 
      </div> */}
      <UserList/>
    </div>
  );
}

export default App;
