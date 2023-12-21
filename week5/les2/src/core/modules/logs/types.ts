import { Body, Tables } from "../../../../database.types";
import { ProjectWithRelations } from "../projects/types";

export type Log = Tables<"logs">;

export type LogWithRelations = Log & { project: ProjectWithRelations };

export type CreateLogBody = Body<"logs">["Insert"];
export type UpdateLogBody = Body<"logs">["Update"];
