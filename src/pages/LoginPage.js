import Login from '../components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login/>
            <p>
                Or <Link to="/reg">register</Link>
            </p>
        </div>
    )
}

export default LoginPage
