import React, { useState, FormEvent, useEffect } from "react";
import "../Auth.scss";
import "./LoginView.scss";
import { generatePlaceholder } from "../../../utils";
import API from "../../../api/api";
import store from "../../../store";
import { setToken, setUser } from "../../../store/auth/actions";
import Input from "../../../components/input/Input";

const LoginView: React.FC = () => {
    const [placeholder, setPlaceholder] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [userError, setUserError] = useState<string | undefined>(undefined);
    const [passwordError, setPasswordError] = useState<string | undefined>(undefined);

    useEffect(() => {
        generatePlaceholder("usernames").then((placeholder: string) => setPlaceholder(placeholder));
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        API.users
            .login(username, password)
            .then(data => {
                if (data) {
                    store.dispatch(setToken(data.token));
                    store.dispatch(setUser(data.user));
                }
            })
            .catch(err => {
                const error: string = err.response.data;
                if (error.toLowerCase().includes("user")) setUserError(error);
                if (error.includes("name")) setUserError("Invalid username/email.");
                if (error.includes("password")) setPasswordError("Invalid password.");
            });
    };

    return (
        <div className="auth__wrapper">
            <form onSubmit={handleSubmit} className={`form${placeholder ? " form--loaded" : ""}`}>
                <h3>Login</h3>
                <div className="form__group">
                    <label htmlFor="username">Username or Email</label>
                    <Input
                        type="text"
                        className="input input--full"
                        name="username"
                        placeholder={placeholder}
                        autoComplete="username"
                        required
                        value={username}
                        onChange={e => {
                            setUsername(e.target.value);
                            setUserError(undefined);
                        }}
                        error={userError}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        className="input input--full"
                        name="password"
                        placeholder="P@ssw0rd*"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                            setPasswordError(undefined);
                        }}
                        error={passwordError}
                    />
                </div>
                <div className="form__button">
                    <button type="submit" className="button button--wide button--primary">
                        LOG IN
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginView;
