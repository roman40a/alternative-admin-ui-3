import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import {
    SignIn,
    LoginData,
} from '../module/sign-in/components/sign-in.component';
import {
    RegisterData,
    SignUp,
} from '../module/sign-up/components/sign-up.component';
import { Home } from '../module/home/components/home.component';
import { api } from '../api/api';
import { RemoteData } from '../utils/remote-data/remote-data';
import {
    failure,
    initial,
    pending,
    success,
} from '../utils/remote-data/helpers';
import { LoaderWrapper } from '../utils/remote-data/loader-wrapper';

import css from './app.module.css';

type AppState = {
    userName: RemoteData<string | undefined>;
};

export class App extends React.PureComponent<{}, AppState> {
    readonly state: AppState = {
        userName: initial,
    };

    async componentDidMount() {
        const user = await api.getUser();
        if (user) {
            this.setState({ userName: success(user.name) });
        } else {
            this.setState({ userName: success(undefined) });
        }
    }

    handleSignUp = async (data: RegisterData) => {
        const user = await api.signUp(data);

        this.setState({ userName: pending });
        if (user) {
            return this.setState({ userName: success(user.name) });
        }
        this.setState({ userName: failure('Что-то пошло не так:(') });
    };

    handleSignIn = async (data: LoginData) => {
        const user = await api.signIn(data);

        this.setState({ userName: pending });
        if (user) {
            return this.setState({ userName: success(user.name) });
        }
        this.setState({ userName: failure('Что-то пошло не так:(') });
    };

    renderSuccess = (userName: string | undefined) => (
        <Router>
            <Switch>
                <Route
                    path="/sign-up"
                    exact={true}
                    render={() => {
                        if (userName) {
                            return <Redirect to={'/'} />;
                        }
                        return <SignUp onSubmit={this.handleSignUp} />;
                    }}
                />
                <Route
                    path="/sign-in"
                    exact={true}
                    render={() => {
                        if (userName) {
                            return <Redirect to={'/'} />;
                        }
                        return <SignIn onSubmit={this.handleSignIn} />;
                    }}
                />
                <Route
                    path="/"
                    exact={true}
                    render={() => {
                        if (userName) {
                            return <Home userName={userName} />;
                        }
                        return <Redirect to={'/sign-in'} />;
                    }}
                />
            </Switch>
        </Router>
    );

    render() {
        const { userName } = this.state;

        return (
            <div className={css.container}>
                <LoaderWrapper data={userName}>
                    {userName => this.renderSuccess(userName)}
                </LoaderWrapper>
            </div>
        );
    }
}
