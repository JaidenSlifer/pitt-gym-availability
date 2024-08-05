export interface Count {
  id: number;
  facility: string;
  count: number;
  time_posted: string;
  time_recorded: string;
}

export interface AverageCount {
  facility: string;
  hour_posted: number;
  avg_count: number;
}