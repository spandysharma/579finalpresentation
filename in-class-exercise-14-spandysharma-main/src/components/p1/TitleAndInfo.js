const TitleAndInfo = (props) => {
  return <div className='row'>
        <h3>{props.title}</h3>
        <p>{props.info}</p>
      </div>;
}
// const TitleAndInfo = ({title,info}) => {
//   return <div className='row'>
//         <h3>{title}</h3>
//         <p>{info}</p>
//       </div>;
// }
TitleAndInfo.displayName = 'TitleAndInfo';
export default TitleAndInfo;

// slack
// const TitleAndInfo = ({title, info}) => {
//   return (
//     <div className='row'>
//       <h3>{title}</h3>
//       <p>{info}</p>
//     </div>
//   )
// }
// TitleAndInfo.displayName = 'TitleAndInfo';
// export default TitleAndInfo;
