import { writable } from "svelte/store";

export const queryParams = writable(new URLSearchParams(window.location.search));
export const CurrentPath = writable(window.location.pathname);
export const UpdatePath = () => queryParams.set(new URLSearchParams(window.location.search));

export function Navigate(path: string) {
    history.pushState({}, "", "?view=" + path);
    UpdatePath();
}
