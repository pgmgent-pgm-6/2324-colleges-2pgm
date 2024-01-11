import { ProjectWithRelations } from "./types";

export const getTotalLogTime = (project: ProjectWithRelations) => {
  if (project.logs) {
    return project.logs.reduce((total, current) => total + current.time, 0);
  }
  return 0;
};
