import { Body, Tables } from "database.types";
import { Client } from "../clients/types";
import { Log } from "../logs/types";

export type Project = Tables<"projects">;

export type ProjectWithRelations = Project & { client: Client; logs: Log[] };

export type CreateProjectBody = Body<"projects">["Insert"];
export type UpdateProjectBody = Body<"projects">["Update"];
