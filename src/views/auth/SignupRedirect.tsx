import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader2 from "../../components/loader2/Loader2";

const SignupRedirect: React.FC = () => {
    const history = useHistory();

    useEffect(() => {
        if (history)
            setTimeout(() => {
                history.push("/login");
            }, 3000);
    }, [history]);

    return (
        <div className="auth__wrapper">
            <div className="form form--loaded">
                <h3>Signup successful!</h3>
                <p>
                    You'll be redirected to the login page in a moment... <Loader2 />
                </p>
            </div>
        </div>
    );
};

export default SignupRedirect;
