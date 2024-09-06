import { TApiResponse } from "./constant";

export type TLoginDto = {
  email: string;
  password: string;
};

export type TRegisterDto = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type TRegisterResponse = TApiResponse<{
  accessToken: string;
  user: {
    createdAt: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    password: string;
    updatedAt: string;
  };
}>;
export type TLoginResponse = TApiResponse<{
  accessToken: string;
  user: {
    createdAt: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    password: string;
    updatedAt: string;
  };
}>;

export type TUser = TLoginResponse["data"]["user"];
