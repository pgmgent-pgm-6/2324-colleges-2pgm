import { Body, Tables } from "database.types";
import { Project } from "../projects/types";

export type Client = Tables<"clients">;

export type ClientWithRelations = Client & {
  projects: Project[];
};

export type CreateClientBody = Body<"clients">["Insert"];
export type UpdateClientBody = Body<"clients">["Update"];
