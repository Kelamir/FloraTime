import {writable} from "svelte/store";

export const isFinished = writable(false);
export const isStarted = writable(false);
export const inputMinutes = writable(25);