import { Body, Tables } from "database.types";

export type Project = Tables<"projects">;

export type CreateProjectBody = Body<"projects">["Insert"];
export type UpdateProjectBody = Body<"projects">["Update"];
