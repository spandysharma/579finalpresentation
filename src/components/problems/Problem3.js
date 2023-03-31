import {useState} from "react";
import OneLevelDown from "../p3/OneLevelDown";

// Sharing state between components https://beta.reactjs.org/learn/sharing-state-between-components
const Problem3 = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  // @todo, this is another button counter, but with multiple
  // components involved and a message.

  // @todo create state for `count` (default 0) and `message` (default '')
  // they won't be displayed here, though! We pass them to child components
  return <OneLevelDown
    count = {count}
    setCount = {setCount}
    message = {message}
    setMessage = {setMessage}
  />
  // @todo Pass the state values AND setters to a <OneLevelDown> component.
}

export default Problem3;

// slack
// import {useState} from "react";
// import OneLevelDown from "../p3/OneLevelDown";

// const Problem3 = () => {
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState('');

//   return <OneLevelDown
//     count={count}
//     setCount={setCount}
//     message={message}
//     setMessage={setMessage}
//   />
// }

// export default Problem3;
