import {useState, useEffect} from "react";

// useEffect to manage data fetching https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le
// You can call functions in your return statement and it is fine.
const Problem4 = () => {
  const [umichEvents, setUmichEvents] = useState([]);
  // @todo create state for `umichEvents` that defaults to an empty array.
  //   it will ultimately store the results of the fetch request to
  //   the umich events API.
  useEffect(() => {
    fetch('https://events.umich.edu/day/json?v=2')
    .then((response) => response.json())
    .then((json) => setUmichEvents(json.slice(0,10)))
  }, [])

  // @todo use useEffect to fetch data from https://events.umich.edu/day/json?v=2
  // as soon as the component initializes, and only then

  const generateEvents = () => {

    if (umichEvents.length) {
      return umichEvents.map((anEvent, index) => <p key = {index}>
      <strong>{anEvent.event_title}</strong>: {anEvent.description}
      </p>)
    }
    return <h3>LOADING</h3>
    // @todo return <h3>LOADING</h3> if the events aren't available yet, otherwise return a paragraph for each event
    // <p><strong>EVENT TITLE</string>: EVENT DESCRIPTION</p>
  }


  return generateEvents()
}

export default Problem4;

// slack
// import {useState, useEffect} from "react";

// const Problem4 = () => {
//   const [umichEvents, setUmichEvents] = useState([]);

//   useEffect(() => {
//     fetch('https://events.umich.edu/day/json?v=2')
//       .then(eventsResponse => eventsResponse.json())
//       .then(eventsJson => setUmichEvents(eventsJson.slice(0, 10)))
//   }, []);

//   const generateEvents = () => {
//     if (umichEvents.length) {
//       return umichEvents.map((event, index) => <p key={index}><strong>{event.event_title}</strong>: {event.description}</p>)
//     } else {
//       return <h3>LOADING</h3>
//     }
//   }


//   return generateEvents()
// }

// export default Problem4;
