const TwoLevelsDown =({count, setCount, message, setMessage}) => {
  // @todo, when the button is clicked the count should go up by one
  //   and the message should say `Cool Message for when click {CURRENT CLICK COUNT} happens.`

  return (
    <>
      <p><b>TWO LEVEL DOWN MESSAGE:</b>{message}</p>
      <button 
      onClick = {() => {
        setCount(count + 1)
        setMessage(`Cool Message for when click ${count + 1} happens.`)
      }}
      className='btn btn-primary btn-lg'>
        Number of clicks: {count}
      </button>
    </>)
}
TwoLevelsDown.displayName = 'TwoLevelsDown';
export default  TwoLevelsDown;

// slack
// const TwoLevelsDown =({count, setCount, message, setMessage}) => {
//   return (
//     <>
//       <p><b>TWO LEVEL DOWN MESSAGE:</b>{message}</p>
//       <button
//       className='btn btn-primary btn-lg'
//       onClick={() => {
//         setCount(count + 1);
//         setMessage(`Cool Message for when click ${count + 1} happens.`)
//       }}>
//         Number of clicks: {count}
//       </button>
//     </>)

// }
// TwoLevelsDown.displayName = 'TwoLevelsDown';
// export default  TwoLevelsDown;