import { supabase } from "@core/api/supabase";
import { Client } from "./types";

export const getClients = async (): Promise<Client[] | null> => {
  const { data } = await supabase.from("clients").select("*").order("name").throwOnError();
  return Promise.resolve(data);
};
