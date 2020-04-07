import React, { useState, useEffect, FormEvent } from "react";
import "./Campaign.scss";
import Input from "../../components/input/Input";
import { generatePlaceholder } from "../../utils";
import API from "../../api/api";
import Loader2 from "../../components/loader2/Loader2";
import { useHistory } from "react-router-dom";
import store from "../../store";
import { setCampaigns } from "../../store/campaigns/actions";

interface NewCampaignProps {}

const NewCampaign: React.FC<NewCampaignProps> = (props: NewCampaignProps) => {
    const [loader, setLoader] = useState<boolean>(false);

    const [placeholder, setPlaceholder] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<string | undefined>(undefined);

    const history = useHistory();

    useEffect(() => {
        generatePlaceholder("campaigns").then((placeholder: string) => setPlaceholder(placeholder));
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoader(true);
        API.campaigns
            .new({ name })
            .then(res => {
                if (res && res._id) {
                    API.campaigns.get().then(data => store.dispatch(setCampaigns(data)));
                    history.push("/campaign/" + res._id);
                }
            })
            .catch(err => {
                setLoader(false);
                const error: string = err.response.data;
                if (error.includes("name")) setNameError(error);
            });
    };

    return (
        <div className="campaign campaign--new">
            <div className="campaign__header">
                <h2 className="header__name">New Campaign</h2>
            </div>
            <form onSubmit={handleSubmit} className={`form${placeholder ? " form--loaded" : ""}`}>
                <div className="form__group">
                    <label htmlFor="name">Campaign name</label>
                    <Input
                        type="text"
                        className="input input--full"
                        name="name"
                        placeholder={placeholder}
                        required
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                            setNameError(undefined);
                        }}
                        error={nameError}
                    />
                </div>
                <div className="form__button">
                    <button type="submit" className="button button--wide button--primary">
                        CREATE CAMPAIGN
                    </button>
                </div>
                {loader && (
                    <div className="form__loader">
                        <Loader2 />
                    </div>
                )}
            </form>
        </div>
    );
};

export default NewCampaign;
