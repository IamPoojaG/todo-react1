import './App.css';
import { useState, useEffect } from 'react';
import Item from './component/Item';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [todo, setToDo] = useState([]);
  const [isUpdating, setUpdating] = useState('');
  useEffect(() => {
    axios
      .get('https://todo-fsd21g.herokuapp.com/get')
      .then((res) => setToDo(res.data))
      .catch((err) => console.log(err));
  });

  const addUpdateToDo = () => {
    if (isUpdating === '') {
      axios
        .post('https://todo-fsd21g.herokuapp.com/create', { text })
        .then((res) => {
          console.log(res.data);
          setText('');
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post('https://todo-fsd21g.herokuapp.com/update', {
          _id: isUpdating,
          text,
        })
        .then((res) => {
          console.log(res.data);
          setText('');
          setUpdating('');
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteToDo = (id) => {
    axios
      .post('https://todo-fsd21g.herokuapp.com/delete', { id })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const updateToDo = (_id, text) => {
    setUpdating(_id);
    setText(text);
  };

  return (
    <div className='app'>
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
          <input
            type='text'
            placeholder='Write something'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className='add' onClick={addUpdateToDo}>
            {isUpdating ? 'Update' : 'add'}
          </div>
        </div>
        <div className='list'>
          {todo.map((item) => (
            <Item
              key={item._id}
              text={item.text}
              remove={deleteToDo(item._id)}
              update={() => updateToDo(item._id, item.text)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
