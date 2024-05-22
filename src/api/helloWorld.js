import {getApiUrl} from "./common";

export async function sayHelloWorld() {
    const response = await fetch(getApiUrl());
    return response.text();
}