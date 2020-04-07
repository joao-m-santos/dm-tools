export interface User {
    name: string;
    email: string;
}

export interface AuthState {
    token: string | undefined;
    user: User | null;
}
export interface AuthAction {
    type: string;
    payload?: string | User;
}
