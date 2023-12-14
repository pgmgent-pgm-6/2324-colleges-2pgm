export type UserMetaData = {
  first_name: string;
  last_name: string;
  avatar?: string | null;
};

export type User = {
  id: string;
  email: string;
} & UserMetaData;
