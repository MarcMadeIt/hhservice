"use server";

import { createServerClientInstance } from "@/utils/supabase/server";

export async function setNewNews() {
  try {
    const supabase = await createServerClientInstance();

    const { data, error } = await supabase
      .from("news")
      .insert({ title: "New news" });

    if (error) {
      console.error("Error inserting news:", error.message);
    } else {
      console.log("News inserted:", data);
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}
