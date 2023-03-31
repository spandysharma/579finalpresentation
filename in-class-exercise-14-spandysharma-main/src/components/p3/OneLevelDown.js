import TwoLevelsDown from "./TwoLevelsDown";

// Concept: passing ALL props to a child component
const OneLevelDown = (props) => {
  // This should return the following markup:
  //<p><b>ONE LEVEL DOWN MESSAGE:</b>[THE MESSAGE WE SENT DOWN FROM Problem3]</p>
  // <TwoLevelsDown> with EVERY prop that this component received.
  return <>
    <p>
      <b>ONE LEVEL DOWN MESSAGE:{props.message}</b></p>
    <TwoLevelsDown {...props} />
  </>
}
OneLevelDown.displayName = 'OneLevelDown';
export default OneLevelDown

// slack
// import TwoLevelsDown from "./TwoLevelsDown";

// const OneLevelDown = (props) => {
//   return (
//     <>
//       <p><b>ONE LEVEL DOWN MESSAGE:</b>{props.message}</p>
//       <TwoLevelsDown {...props} />
//     </>
//   )
// }
// OneLevelDown.displayName = 'OneLevelDown';
// export default OneLevelDown
