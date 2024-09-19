import PropTypes from "prop-types"



// const newMessge={
// message:'Hola Mundo'
// }
// const name = 'Neo'
// const getResult = (a, b) => {

//   return a + b;
// }
export const FirstApp = ({ title, subTitle ,name}) => {

  // console.log(props);
  return (
    <>
      {/* <h1>{name}</h1> */}
      <h1 data-testid= 'test-title'>{ title }</h1>
      <h2> {name}</h2>
      <h2>{subTitle}</h2>
      <h2>{subTitle}</h2>
      {/*       <p>{getResult(2, 7)}</p> */}
      {/* <code>{JSON.stringify(newMessge)}</code>   */}
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps={
name:'Neo si hay name',
subTitle: 'No hay subtitulos',
title: '"Hola, Soy Goku',
}