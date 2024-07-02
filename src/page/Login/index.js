import { Link, useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      Login
      <Link to='/article'>to article</Link>
      <button onClick={() => navigate('/article')}>to article</button>
      {/* <button onClick={() => navigate('/article?id=1001&name=jack')}>params1 to article</button> */}
      <button onClick={() => navigate('/article/1001/jack')}>params2 to article</button>
    </div>)
}

export default Login