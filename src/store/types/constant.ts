export type TApiResponse<T> = {
  isOK: boolean;
  status: boolean;
  statusCode: string;
  message: string;
  data: T;
};

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
