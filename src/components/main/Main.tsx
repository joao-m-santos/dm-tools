import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import "./Main.scss";
import { Campaign } from "../../store/campaigns/types";
import API from "../../api/api";
import Loader2 from "../loader2/Loader2";
import { User } from "../../store/auth/types";
import LoginView from "../../views/auth/Login/LoginView";
import SignupView from "../../views/auth/Signup/SignupView";
import SignupRedirect from "../../views/auth/SignupRedirect";
import { SelectCampaign, NoCampaigns } from "../../views/campaign/CampaignViews";
import CampaignContainer from "../../views/campaign/CampaignContainer";
import NewCampaign from "../../views/campaign/NewCampaign";

interface MainProps {
    token: string | undefined;
    user: User | null;
    campaigns: Array<Campaign> | null;
    current: Campaign | null;
    setCampaigns: (campaigns: Array<Campaign>) => void;
    newCampaign: (campaign: Campaign) => void;
}

const Main: React.FC<MainProps> = (props: MainProps) => {
    const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
        if (props.user) {
            setLoader(true);
            API.campaigns.get().then(data => {
                props.setCampaigns(data);
                setLoader(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.user]);

    const _renderContent = (): JSX.Element => {
        if (!props.token) {
            return (
                <Switch>
                    <Route exact path="/(|login)" component={LoginView} />

                    <Route path="/signup" component={SignupView} />

                    <Route exact path="/signup-redirect" component={SignupRedirect} />

                    <Route>
                        <Redirect to="/login" />
                    </Route>
                </Switch>
            );
        } else {
            if (props.campaigns) {
                return (
                    <Switch>
                        <Route exact path="/new-campaign">
                            <NewCampaign />
                        </Route>

                        <Route path={`/campaign/:id`}>
                            <CampaignRouter campaigns={props.campaigns} />
                        </Route>

                        <Route path="/campaign">
                            <Redirect to={`/campaign/${props.current?._id}`} />
                        </Route>

                        {props.campaigns.length > 0 ? (
                            <>
                                <Route exact path="/select-campaign">
                                    <SelectCampaign campaigns={props.campaigns} />
                                </Route>

                                <Route exact path="/">
                                    <Redirect to="/select-campaign" />
                                </Route>

                                <Route>
                                    <Redirect to="/select-campaign" />
                                </Route>
                            </>
                        ) : (
                            <>
                                <Route exact path="/no-campaigns">
                                    <NoCampaigns />
                                </Route>
                                <Route>
                                    <Redirect to="/no-campaigns" />
                                </Route>
                            </>
                        )}
                    </Switch>
                );
            } else {
                return (
                    <div>
                        Loading... <Loader2 />
                    </div>
                );
            }
        }
    };

    return (
        <>
            <main className="main">
                {loader ? (
                    <div>
                        Loading... <Loader2 />
                    </div>
                ) : (
                    _renderContent()
                )}
            </main>
        </>
    );
};

export default Main;

export const CampaignRouter = (props: { campaigns: Array<Campaign> | null }) => {
    let { id } = useParams();
    const campaign = props.campaigns?.find((c: Campaign) => c._id === id);
    return campaign ? <CampaignContainer {...campaign} /> : <div>Error rendering content</div>;
};
