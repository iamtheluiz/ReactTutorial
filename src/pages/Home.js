import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <span>Você está na Home page</span>
      <Link to="/list">Ir para List</Link>
    </div>
  )
}

export default Home