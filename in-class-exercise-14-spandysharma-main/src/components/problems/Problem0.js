import {animals, capitals} from "../util/arrays";
// Notice 👆 how we are importing arrays from other files so we don't have to clutter up the component code here.

// This covers rendering lists:https://beta.reactjs.org/learn#rendering-lists
const Problem0 = () => {

  return (
    <div className='row row-cols-2'>
      <div>
        {/* @todo Lets populate this <ul> with the first 10 items in the `animals` array */}
        <ul>
          {animals.map((animal, index) => <li key={index}>{animal}</li>).slice(0,10)}
        </ul>
      </div>
      <div>
        <ul>
          {/* @todo Lets populate this <ul> with the first 10 items in the `capitals` array. This is an array of objects
           so we choose which properties to display. It should appear as <li>CITY NAME, STATE NAME</li> */}
          {capitals.map((capital, index) => <li key={index}>{capital.capital}, {capital.name}</li>).slice(0,10)}
        </ul>
      </div>
    </div>
    )
}
export default Problem0;

// slack
// import {animals, capitals} from "../util/arrays";

// const Problem0 = () => {

//   return (
//     <div className='row row-cols-2'>
//       <div>
//         <ul>
//           {animals.map((animal, index) => <li key={index}>{animal}</li>).slice(0, 10)}
//         </ul>
//       </div>
//       <div>
//         <ul>
//           {capitals.map((capital, index) => <li key={index}>{capital.capital}, {capital.name}</li>).slice(0, 10)}
//         </ul>
//       </div>
//     </div>
//     )
// }
// export default Problem0;