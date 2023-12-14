import { supabase } from "@core/api/supabase";
import { Client, CreateClientBody } from "./types";

export const getClients = async (): Promise<Client[] | null> => {
  const { data } = await supabase.from("clients").select("*").order("name").throwOnError();
  return Promise.resolve(data);
};

export const getClientById = async (uid: string | number) => {
  const response = await supabase
    .from("clients")
    .select("*, projects(*)")
    .eq("id", uid)
    .throwOnError()
    .single();

  return Promise.resolve(response.data);
};

export const createClient = async (client: CreateClientBody) => {
  const response = await supabase.from("clients").insert(client).throwOnError().single();
  return Promise.resolve(response.data);
};
