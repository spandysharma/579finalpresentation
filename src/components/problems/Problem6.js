import {useState} from "react";

// @todo make a stopwatch that matches the example, much of what is
// needed is already in place
// @tip: inside an interval, you must update state using the previousValue approach:
// https://beta.reactjs.org/apis/react/useState#updating-state-based-on-the-previous-state

// @tip this is possible without useEffect, but GoogleBing might think otherwise.
const Problem6 = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [counting, setCounting] = useState(false);

  const start = () => {
    // @todo stuff
    setCounting(true)
    const theIntervalId = setInterval(() => {
      setCount((previousValue) => {
        return previousValue + 1
      })
    }, 1000)
    setIntervalId(theIntervalId)
  }

  const stop = () => {
    // @todo stuff
    setCounting(false)
    clearInterval(intervalId)
  }

  const reset = () => {
    // @todo stuff;
    setCounting(false)
    clearInterval(intervalId)
    setCount(0)
  }

  return (
    <>
      <output>{count}</output>
      <div>
      <button 
      disabled = {counting}
      onClick = {() => {
        start()
      }}
      className='btn btn-primary mx-2'>Start
      </button>
      <button
      disabled = {!counting}
      onClick = {() => {
        stop()
      }}
      className='btn btn-secondary mx-2'>stop
      </button>
      <button 
      disabled = {count === 0}
      onClick = {() => {
        reset()
      }}
      className='btn btn-secondary mx-2'>Reset</button>
      </div>
    </>
  )
}

export default Problem6;

// slack
// import {useState} from "react";

// const Problem6 = () => {
//   const [count, setCount] = useState(0);
//   const [intervalId, setIntervalId] = useState(0);
//   const [counting, setCounting] = useState(false);

//   function start() {
//     setCounting(true);
//     const theIntervalId = setInterval(() => {
//       setCount((previousValue) => {
//         return previousValue + 1;
//       });
//     }, 1000);
//     setIntervalId(theIntervalId);
//   }

//   const stop = () => {
//     clearInterval(intervalId);
//     setCounting(false);
//   }

//   const reset = () => {
//     stop();
//     setCount(0);
//   }

//   return (
//     <>
//       <output>{count}</output>
//       <div>
//       <button className='btn btn-primary mx-2' onClick={start} disabled={counting}>Start</button>
//       <button className='btn btn-secondary mx-2' onClick={stop} disabled={!counting}>stop</button>
//       <button className='btn btn-secondary mx-2' onClick={reset} disabled={count === 0}>Reset</button>
//       </div>
//     </>
//   )
// }

// export default Problem6;