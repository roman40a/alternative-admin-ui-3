import { RegisterData } from '../module/sign-up/components/sign-up.component';
import { LoginData } from '../module/sign-in/components/sign-in.component';

export type User = {
    name: string;
};

export const TOKEN_KEY = 'token';
const BACK_END_BASE_URL = 'https://soroka-task-manager.herokuapp.com';

const saveTokenToLS = (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
};

class Api {
    signUp = async (data: RegisterData): Promise<User | null> => {
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            const raw = JSON.stringify(data);

            const requestOptions: any = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                mode: 'no-cors',
            };

            const res = await fetch(BACK_END_BASE_URL + '/users', requestOptions);
            const status = res.status;

            if (status === 201) {
                const resData = await res.json();
                saveTokenToLS(resData.token);
                return {
                    name: resData.user.name,
                };
            }
            return null;
        } catch (e) {
            return null;
        }
    };
    signIn = async (data: LoginData): Promise<User | null> => {
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            const raw = JSON.stringify(data);

            const requestOptions: any = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                mode: 'no-cors',
            };

            const res = await fetch(BACK_END_BASE_URL + '/users/login', requestOptions);
            const status = res.status;

            if (status === 200) {
                const resData = await res.json();
                saveTokenToLS(resData.token);
                return {
                    name: resData.user.name,
                };
            }
            return null;
        } catch (e) {
            return null;
        }
    };
    getUser = async (): Promise<User | null> => {
        try {
            const token = localStorage.getItem(TOKEN_KEY);
            if (!token) {
                return null;
            }
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Authorization', `Bearer ${token}`);

            const requestOptions: any = {
                method: 'GET',
                headers: myHeaders,
                mode: 'no-cors',
            };

            const res = await fetch(BACK_END_BASE_URL + '/users/me', requestOptions);
            const status = res.status;

            if (status === 200) {
                const resData = await res.json();
                return {
                    name: resData.name,
                };
            }
            return null;
        } catch (e) {
            return null;
        }
    };
}

export const api = new Api();
