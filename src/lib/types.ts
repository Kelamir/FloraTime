export enum TimerState {
  NotStarted,
  Started,
  Finished
}

export type TimerStateType = TimerState.NotStarted | TimerState.Started | TimerState.Finished;