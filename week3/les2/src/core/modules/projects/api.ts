import { supabase } from "@core/api/supabase";
import { Project } from "./types";

export const getProjects = async (): Promise<Project[] | null> => {
  const { data } = await supabase.from("projects").select("*").order("name").throwOnError();
  return Promise.resolve(data);
};
