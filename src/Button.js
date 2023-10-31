import React, {useState} from 'react'
function Button() {
  const [counts1, setCounts1] = useState(100)
  function myfunc() {
    setCounts1(counts1+1)
  }
  function myfunc1() {
    setCounts1(counts1 - 1)
  }
  return (
    <>
      <button onMouseOver={myfunc}> Increase</button>&emsp;
      <span>{counts1}</span>&emsp;
      <button onMouseOver={myfunc1}>{counts1}</button>
    </>
  );
}
export default Button