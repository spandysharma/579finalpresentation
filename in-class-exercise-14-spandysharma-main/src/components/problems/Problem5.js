import {useState} from "react";

function isOddNumber(number) {
  return !(number % 2 === 0);
}

// Concept: State can be used inside attributes, too!
const Problem5 = () => {
  // We already created the state to keep track of even/odd, there's more work to be done here.
  const [isOdd, setIsOdd] = useState(false);

  // @todo, if the number is odd, the <p> should have the class 'bg-success',
  //  otherwise it should be 'bg-danger
  // @todo we need to conditionally hide one of the two spans below depending
  //  on the value of isOdd
  // @todo when the number input changes, we need to update the isOdd state to
  //   reflect that number being even or add.
  const numberChangeHandler = (e) => {
    setIsOdd(isOddNumber(e.target.value))
  }

  return (
    <>
      <p className={isOdd ? "bg-success" : "bg-danger"}>
        <span hidden={isOdd}>Even: this will be red</span>
        <span hidden={!isOdd}>Odd: this will be green</span>
      </p>
      <input type='number' defaultValue="2" onChange={numberChangeHandler}/>
    </>
  )
}

export default Problem5;

// slack
// import {useState} from "react";

// function isOddNumber(number) {
//   return !(number % 2 === 0);
// }

// const Problem5 = () => {
//   const [isOdd, setIsOdd] = useState(false);

//   const numberChangeHandler = (e) => {
//     setIsOdd(isOddNumber(e.target.value))
//   }

//   return (
//     <>
//       <p className={isOdd ? 'bg-success' : 'bg-danger'}>
//         <span hidden={isOdd}>Even: this will be red</span>
//         <span hidden={!isOdd}>Odd: this will be green</span>
//       </p>
//       <input type='number' defaultValue="2" onChange={numberChangeHandler} />
//     </>
//   )
// }

// export default Problem5;