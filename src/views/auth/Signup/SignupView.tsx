import React, { useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../Auth.scss";
import "./SignupView.scss";
import { generatePlaceholder } from "../../../utils";
import API from "../../../api/api";
import Input from "../../../components/input/Input";

const SignupView: React.FC = () => {
    const [placeholder, setPlaceholder] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");

    const [nameError, setNameError] = useState<string | undefined>(undefined);
    const [passwordError, setPasswordError] = useState<string | undefined>(undefined);

    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

    const history = useHistory();

    useEffect(() => {
        generatePlaceholder("usernames").then((placeholder: string) => setPlaceholder(placeholder));
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setPasswordsMatch(password === repeatPassword);

        if (passwordsMatch) {
            setNameError(undefined);
            setPasswordError(undefined);

            API.users
                .signup(username, email, password)
                .then(data => {
                    if (data === "success") history.push("/signup-redirect");
                })
                .catch(err => {
                    const error: string = err.response.data;
                    if (error.includes("name")) setNameError(error);
                    if (error.includes("password")) setPasswordError(error);
                });
        }
    };

    return (
        <div className="auth__wrapper">
            <form onSubmit={handleSubmit} className={`form${placeholder ? " form--loaded" : ""}`}>
                <h3>Sign up</h3>
                <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <Input
                        type="email"
                        className="input input--full"
                        name="email"
                        placeholder="john.doe@doma.in"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="username">Username</label>
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
                            setNameError(undefined);
                        }}
                        error={nameError}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        className="input input--full"
                        name="password"
                        placeholder="P@ssw0rd*"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                            setPasswordsMatch(true);
                            setPasswordError(undefined);
                        }}
                        error={passwordsMatch ? passwordError || undefined : "The passwords do not match."}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="password">Repeat password</label>
                    <Input
                        type="password"
                        className="input input--full"
                        name="repeat_password"
                        placeholder="P@ssw0rd*"
                        autoComplete="new-password"
                        required
                        value={repeatPassword}
                        onChange={e => {
                            setRepeatPassword(e.target.value);
                            setPasswordsMatch(true);
                        }}
                        error={passwordsMatch ? undefined : "The passwords do not match."}
                    />
                </div>
                <div className="form__button">
                    <button type="submit" className="button button--primary">
                        SIGN UP
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupView;
