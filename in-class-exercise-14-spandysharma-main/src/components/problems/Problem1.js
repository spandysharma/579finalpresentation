import TitleAndInfo from "../p1/TitleAndInfo";

// One more opportunity to create a custom comonent with props.
// we will also destructure the props on the way in
const Problem1 = () => {
  const title = 'This is in an h3 in problem one';
  const info = 'Getting me into a paragraph accomplishes the purpose of problem one'
  // @todo we need to create a TitleAndInfo component in components/p1 and it should return
  return <TitleAndInfo title={title} info={info}/>
}

export default Problem1;

// slack
// import TitleAndInfo from "../p1/TitleAndInfo";

// const Problem1 = () => {
//   const title = 'This is in an h3 in problem one';
//   const info = 'Getting me into a paragraph accomplishes the purpose of problem one'
//   return (<TitleAndInfo title={title} info={info}/>)
// }

// export default Problem1;