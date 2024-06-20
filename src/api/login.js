import {getApiUrl} from "./common";

export async function login({ username, password }) {
    const url = `${getApiUrl()}/login?username=${username}&password=${password}`;
    const response = await fetch(url);
    return response.json();
}