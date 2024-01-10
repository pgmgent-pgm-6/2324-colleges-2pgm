import { supabase } from "@core/api/supabase";
import { CreateProjectBody, Project, ProjectWithRelations, UpdateProjectBody } from "./types";

export const getProjects = async (): Promise<Project[] | null> => {
  const { data } = await supabase.from("projects").select("*").order("name").throwOnError();
  return Promise.resolve(data);
};

export const getProjectById = async (uid: string | number) => {
  const response = await supabase
    .from("projects")
    .select("*, client:clients(*), logs(*)")
    .eq("id", uid)
    .throwOnError()
    .returns<ProjectWithRelations>()
    .single();
  return Promise.resolve(response.data);
};

export const createProject = async (project: CreateProjectBody) => {
  const response = await supabase.from("projects").insert(project).select().throwOnError().single();
  return Promise.resolve(response.data);
};

export const updateProject = async (project: UpdateProjectBody) => {
  const response = await supabase
    .from("projects")
    .update(project)
    .eq("id", project.id)
    .select()
    .throwOnError()
    .single();
  return Promise.resolve(response.data);
};
