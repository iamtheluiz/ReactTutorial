import { useEffect, useState } from "react"

function Counter() {
  const [contador, setContador] = useState(0);

  useEffect(() => {

  }, [])

  function handleClick() {
    setContador(contador + 1)
  }

  return (
    <div>
      <h1>Counter</h1>
      <strong>{contador}</strong><br />
      <button onClick={handleClick}>Me Clique</button>
    </div>
  )
}

export default Counter