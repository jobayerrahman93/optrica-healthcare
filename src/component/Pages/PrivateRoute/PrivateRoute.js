import { Redirect, Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


function PrivateRoute({ children, ...rest }) {

    const { user, isLoading } = useAuth();
    // console.log(user)

    if (isLoading) {
        return (
            
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-warning  my-5" role="status">
                <span className="visually-hidden ">Loading...</span>
            </div>
            </div>
            
        )
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;