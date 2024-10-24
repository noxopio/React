import { memo } from "react";



export const Small = memo(({value}) => {

  console.log('Rederizado :(');
  
  return (

<>
<small>{value}</small>
</>

)
})
