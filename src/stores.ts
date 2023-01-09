import { writable } from "svelte/store";

export const inputMinutes = writable(0.1);

export enum timerStates {NotStarted, Started, Finished}

export const timerState = writable(timerStates.NotStarted);
