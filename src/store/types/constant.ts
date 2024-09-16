export type TApiResponse<T> = {
  isOK: boolean;
  status: boolean;
  statusCode: string;
  message: string;
  data: T;
};

export type TFoundItemDto = {
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
export type TFoundItemResponse = {
  UserId: number;
  id: number;
  title: string;
  category: string;
  description: string;
  foundAt: string;
  foundDate: string;
  uniqueIdentifier: string;
  itemBrand: string;
  imageUrl: string;
  color: string;
  createdAt: string;
  comparisonString: string;
  user_id: number;
};

export type TLostItemDto = {
  id: number;
  title: string;
  category: string;
  description: string;
  lostAt: string;
  lostDate: string;
  uniqueIdentifier: string;
  itemBrand: string;
  image: string;
  color: string;
};
export type TLostItemResponse = {
  UserId: number;
  id: number;
  title: string;
  category: string;
  description: string;
  lostAt: string;
  lostDate: string;
  uniqueIdentifier: string;
  itemBrand: string;
  imageUrl: string;
  color: string;
  createdAt: string;
  comparisonString: string;
  user_id: number;
};
