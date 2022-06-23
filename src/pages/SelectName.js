import { useState } from "react"

function SelectName() {
  const [title, setTitle] = useState("Selecione um nome")

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle("Ana")}>Ana</button>
      <button onClick={() => setTitle("Kelly")}>Kelly</button>
      <button onClick={() => setTitle("Felipe")}>Felipe</button>
      <button onClick={() => setTitle("Luiz")}>Luiz</button>
    </div>
  )
}

export default SelectName