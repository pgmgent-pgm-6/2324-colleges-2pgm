import { supabase } from "@core/api/supabase";
import { Project } from "./types";

export const getProjects = async (): Promise<Project[] | null> => {
  const { data } = await supabase.from("projects").select("*").order("name").throwOnError();
  return Promise.resolve(data);
};

export const getProjectById = async (uid: string | number) => {
  const response = await supabase.from("projects").select("*").eq("id", uid).throwOnError().single();
  return Promise.resolve(response.data);
};
