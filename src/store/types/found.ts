import { TApiResponse } from "./constant";

export type TRegisterFoundItemsDto = {
  title: string;
  category: string;
  description: string;
  foundAt: string;
  foundDate: string;
  uniqueIdentifier: string;
  itemBrand: string;
  image: string;
  color: string;
};

export type TRegisterFoundItemsResponse = TApiResponse<{}>;

export type TItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  foundAt: string;
  foundDate: string;
  uniqueIdentifier: string;
  itemBrand: string;
  image: string;
  color: string;
};
