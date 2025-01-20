"use server";

import { createClient } from "@/utils/supabase/client";

export async function getAllNews() {
  const supabase = createClient();

  const { data, error } = await supabase.from("news").select("*");

  if (error) {
    throw new Error("Failed to fetch news: " + error.message);
  }

  return data;
}
