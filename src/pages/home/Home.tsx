import { requestAuth } from '../../services/apis';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
    const dispatch = useDispatch();
    const userAuthInfo = useSelector((state: any) => state.auth.entities);
    const handleUserInfo = (e: any) => {
        e.preventDefault();
        const userInfo = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        console.log('userInfo', userInfo);
        dispatch(requestAuth(userInfo));
        console.log('enteties============', userAuthInfo);
    };
    return (
        <div>
            <h3>Redux-toolKit-with-Saga</h3>
            <form onSubmit={(e) => handleUserInfo(e)}>
                <p>E-mail</p>
                <input type="email" id="email" name="email" placeholder="Enter you Email ..." />
                <br />
                <p>Password</p>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password ..."
                />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
