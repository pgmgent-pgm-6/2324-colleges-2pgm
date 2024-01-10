import { supabase } from "@core/api/supabase";
import { CreateLogBody, LogWithRelations, UpdateLogBody } from "./types";

export const getLogsByDate = async (date: Date) => {
  const response = await supabase
    .from("logs")
    .select("*, project:projects(name, client:clients(name))")
    .eq("date", date)
    .returns<LogWithRelations[]>()
    .throwOnError();

  return Promise.resolve(response.data);
};

export const getLogById = async (uid: string | number) => {
  const response = await supabase
    .from("logs")
    .select("*")
    .eq("id", uid)
    .returns<LogWithRelations>()
    .throwOnError()
    .single();
  return Promise.resolve(response.data);
};
export const createLog = async (log: CreateLogBody) => {
  const response = await supabase.from("logs").insert(log).select().throwOnError().single();
  return Promise.resolve(response.data);
};

export const updateLog = async (log: UpdateLogBody) => {
  const response = await supabase.from("logs").update(log).eq("id", log.id).select().throwOnError().single();
  return Promise.resolve(response.data);
};

export const deleteLog = async (uid: number) => {
  const response = await supabase.from("logs").delete().eq("id", uid).throwOnError();
  return Promise.resolve(response.data);
};
