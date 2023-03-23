import { writable } from "svelte/store";
import { TimerState } from "./lib/types";
import type { TimerStateType } from "./lib/types";

export const inputMinutes = writable(25);

export const timerState = writable<TimerStateType>(TimerState.NotStarted);

export const pomCount = writable(0);