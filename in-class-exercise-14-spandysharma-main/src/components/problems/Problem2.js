import {useState} from 'react';

// Updating the screen by using State: https://beta.reactjs.org/learn#updating-the-screen
// Hooks: https://beta.reactjs.org/learn#using-hooks (specifically useState)
// Listening to events: https://beta.reactjs.org/learn#responding-to-events
const Problem2 = () => {
  const [count, setCount] = useState(0)
  // @todo, update the button with a new number each time it is clicked.
  // @todo, in addition to the "short" version, prof will show a version that uses
  // previousValue, too. One of the two can be commented out.
  return <button 
  className='btn btn-primary btn-lg'
    onClick = {() => setCount(count + 1)} >
    Number of clicks: {count}
    </button>
}

export default Problem2;

// slack
// import {useState} from 'react';

// const Problem2 = () => {
//   const [count, setCount] = useState(0);

//   return <button className='btn btn-primary btn-lg' onClick={() => setCount(count + 1)}>Number of clicks: {count}</button>
// }

// export default Problem2;
