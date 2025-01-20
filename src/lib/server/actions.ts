"use server";

import {
  createAdmin,
  createServerClientInstance,
} from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useAuthStore } from "../store/authStore";

//REGISTER

export async function createMember(data: {
  email: string;
  password: string;
  role: "editor" | "admin";
  name: string;
}) {
  const supabase = await createAdmin();

  try {
    const createResult = await supabase.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true,
      user_metadata: {
        role: data.role,
      },
    });

    if (createResult.error) {
      console.error("Failed to create user:", createResult.error.message);
      throw new Error("Failed to create user: " + createResult.error.message);
    }

    console.log("User created:", createResult.data.user);

    const memberResult = await supabase
      .from("members")
      .insert({ name: data.name, id: createResult.data.user?.id });

    if (memberResult.error) {
      console.error(
        "Failed to insert into members:",
        memberResult.error.message
      );
      throw new Error(
        "Failed to insert into members: " + memberResult.error.message
      );
    }

    console.log("Member inserted:", memberResult.data);

    const permissionsResult = await supabase
      .from("permissions")
      .insert({ role: data.role, member_id: createResult.data.user?.id });

    if (permissionsResult.error) {
      console.error(
        "Failed to insert into permissions:",
        permissionsResult.error.message
      );
      throw new Error(
        "Failed to insert into permissions: " + permissionsResult.error.message
      );
    }

    console.log("Permissions inserted:", permissionsResult.data);

    return createResult.data.user;
  } catch (err) {
    console.error("Unexpected error during member creation:", err);
    throw err;
  }
}

//LOGOUT

export async function signOut() {
  const supabase = await createServerClientInstance();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/login");
}

// ADMIN GET ALL USERS

export async function getAllUsers() {
  const supabase = await createAdmin();

  const {
    data: { users },
    error: fetchError,
  } = await supabase.auth.admin.listUsers();

  if (fetchError) {
    throw new Error("Failed to fetch users: " + fetchError.message);
  }

  return users || [];
}

// DELETE USER

export async function deleteUser(userId: string) {
  const supabase = await createAdmin();

  try {
    // Step 1: Delete user from Supabase Auth
    const { error: deleteAuthError } = await supabase.auth.admin.deleteUser(
      userId
    );

    if (deleteAuthError) {
      console.error(
        "Failed to delete user from auth:",
        deleteAuthError.message
      );
      throw new Error(
        "Failed to delete user from auth: " + deleteAuthError.message
      );
    }

    console.log("User deleted from auth:", userId);

    // Step 2: Delete user from members table
    const { error: deleteMemberError } = await supabase
      .from("members")
      .delete()
      .eq("id", userId);

    if (deleteMemberError) {
      console.error(
        "Failed to delete user from members:",
        deleteMemberError.message
      );
      throw new Error(
        "Failed to delete user from members: " + deleteMemberError.message
      );
    }

    console.log("User deleted from members:", userId);

    // Step 3: Delete user from permissions table
    const { error: deletePermissionError } = await supabase
      .from("permissions")
      .delete()
      .eq("member_id", userId);

    if (deletePermissionError) {
      console.error(
        "Failed to delete user from permissions:",
        deletePermissionError.message
      );
      throw new Error(
        "Failed to delete user from permissions: " +
          deletePermissionError.message
      );
    }

    console.log("User deleted from permissions:", userId);

    return { success: true };
  } catch (err) {
    console.error("Unexpected error during user deletion:", err);
    throw err;
  }
}
