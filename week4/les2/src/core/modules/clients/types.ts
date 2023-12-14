import { Body, Tables } from "database.types";

export type Client = Tables<"clients">;

export type CreateClientBody = Body<"clients">["Insert"];
export type UpdateClientBody = Body<"clients">["Update"];
