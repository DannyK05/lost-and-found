export type TApiResponse<T> = {
  isOK: boolean;
  status: boolean;
  statusCode: string;
  message: string;
  data: T;
};
