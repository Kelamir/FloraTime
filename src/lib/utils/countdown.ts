import { TimerState } from "../types";
import type { TimerStateType } from "../types";

export function shouldFinish(timeRemaining: number) {
  return timeRemaining <= 0;
}

export function nextState(timerState:TimerStateType): TimerStateType {
  if(timerState === TimerState.NotStarted) {
    return TimerState.Started;
  }
  return TimerState.Finished;
}

export function formatTimeRemaining(timeRemaining: number) {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = Math.floor(timeRemaining % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}