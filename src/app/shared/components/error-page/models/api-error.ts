export interface ApiError {
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: Date;
  trace: string;
}
