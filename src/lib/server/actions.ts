"use server";

import {
  createAdmin,
  createServerClientInstance,
} from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

//USERS

export async function getAllUsers() {
  const supabase = await createAdmin();

  const {
    data: { users },
    error: fetchError,
  } = await supabase.auth.admin.listUsers();

  if (fetchError) {
    throw new Error("Failed to fetch users: " + fetchError.message);
  }

  const userIds = users.map((user) => user.id);
  const { data: permissions, error: permissionsError } = await supabase
    .from("permissions")
    .select("member_id, role")
    .in("member_id", userIds);

  if (permissionsError) {
    throw new Error("Failed to fetch permissions: " + permissionsError.message);
  }

  const { data: members, error: membersError } = await supabase
    .from("members")
    .select("id, name")
    .in("id", userIds);

  if (membersError) {
    throw new Error("Failed to fetch members: " + membersError.message);
  }

  const usersWithRolesAndNames = users.map((user) => {
    const userPermission = permissions.find(
      (permission) => permission.member_id === user.id
    );
    const userName = members.find((member) => member.id === user.id)?.name;
    return {
      ...user,
      role: userPermission ? userPermission.role : null,
      name: userName || null,
    };
  });

  return usersWithRolesAndNames || [];
}

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

// UPDATE USER

export async function updateUser(
  userId: string,
  data: { email?: string; password?: string; role?: string; name?: string }
): Promise<void> {
  const supabase = await createAdmin();

  try {
    // Update user in Supabase Auth
    const { error: authError } = await supabase.auth.admin.updateUserById(
      userId,
      {
        email: data.email,
        password: data.password,
      }
    );

    if (authError) {
      throw new Error(`Failed to update user in auth: ${authError.message}`);
    }

    // Update user in members table
    const { error: memberError } = await supabase
      .from("members")
      .update({ name: data.name })
      .eq("id", userId);

    if (memberError) {
      throw new Error(
        `Failed to update user in members: ${memberError.message}`
      );
    }

    // Update user role in permissions table
    if (data.role) {
      const { error: permissionError } = await supabase
        .from("permissions")
        .update({ role: data.role })
        .eq("member_id", userId);

      if (permissionError) {
        throw new Error(
          `Failed to update user role: ${permissionError.message}`
        );
      }
    }
  } catch (error) {
    console.error("Error in updateUser:", error);
    throw error;
  }
}
// NEWS

export async function createNews(
  title: string,
  desc: string,
  city: string,
  formType: "normal" | "beforeAfter",
  image?: File,
  imageBefore?: File,
  imageAfter?: File
): Promise<void> {
  const supabase = await createServerClientInstance();

  try {
    let imageUrl: string | null = null;
    let imageBeforeUrl: string | null = null;
    let imageAfterUrl: string | null = null;

    const uploadFile = async (file: File, folder: string) => {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;

      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      if (userError || !userData?.user) {
        throw new Error("User not authenticated for photo upload");
      }

      const filePath = `${folder}/${userData.user.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("news-images")
        .upload(filePath, file);

      if (uploadError) {
        throw new Error(`File upload failed: ${uploadError.message}`);
      }

      const { data } = await supabase.storage
        .from("news-images")
        .getPublicUrl(filePath);

      if (!data || !data.publicUrl) {
        throw new Error("Failed to retrieve public URL");
      }

      return data.publicUrl;
    };

    if (formType === "normal" && image) {
      imageUrl = await uploadFile(image, "normal");
    }

    if (formType === "beforeAfter") {
      if (imageBefore) {
        imageBeforeUrl = await uploadFile(imageBefore, "beforeAfter");
      }
      if (imageAfter) {
        imageAfterUrl = await uploadFile(imageAfter, "beforeAfter");
      }
    }

    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) {
      throw new Error("User not authenticated");
    }

    const { error } = await supabase.from("news").insert([
      {
        title,
        desc,
        city,
        formType,
        image: imageUrl,
        imageBefore: imageBeforeUrl,
        imageAfter: imageAfterUrl,
        creator_id: userData.user.id,
      },
    ]);

    if (error) {
      throw new Error(`Failed to create news: ${error.message}`);
    }
  } catch (error) {
    console.error("Error in createNews:", error);
    throw error;
  }
}

export async function updateNews(
  id: number,
  title: string,
  desc: string,
  city: string,
  formType: "normal" | "beforeAfter",
  image?: File,
  imageBefore?: File,
  imageAfter?: File,
  created_at?: string
): Promise<void> {
  const supabase = await createServerClientInstance();

  try {
    let imageUrl: string | null = null;
    let imageBeforeUrl: string | null = null;
    let imageAfterUrl: string | null = null;

    const uploadFile = async (file: File, folder: string): Promise<string> => {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;

      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      if (userError || !userData?.user) {
        throw new Error("User not authenticated for photo upload");
      }

      const filePath = `${folder}/${userData.user.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("news-images")
        .upload(filePath, file);

      if (uploadError) {
        throw new Error(`File upload failed: ${uploadError.message}`);
      }

      const { data } = await supabase.storage
        .from("news-images")
        .getPublicUrl(filePath);

      if (!data || !data.publicUrl) {
        throw new Error("Failed to retrieve public URL");
      }

      return data.publicUrl; // Returtypen er nu `string`
    };

    if (formType === "normal" && image) {
      imageUrl = await uploadFile(image, "normal");
    } else {
      const { data: existingNews } = await supabase
        .from("news")
        .select("image")
        .eq("id", id)
        .single();
      imageUrl = existingNews?.image || null;
    }

    if (formType === "beforeAfter") {
      if (imageBefore) {
        imageBeforeUrl = await uploadFile(imageBefore, "beforeAfter");
      } else {
        const { data: existingNews } = await supabase
          .from("news")
          .select("imageBefore")
          .eq("id", id)
          .single();
        imageBeforeUrl = existingNews?.imageBefore || null;
      }
      if (imageAfter) {
        imageAfterUrl = await uploadFile(imageAfter, "beforeAfter");
      } else {
        const { data: existingNews } = await supabase
          .from("news")
          .select("imageAfter")
          .eq("id", id)
          .single();
        imageAfterUrl = existingNews?.imageAfter || null;
      }
    }

    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) {
      throw new Error("User not authenticated");
    }

    const updateData: {
      title: string;
      desc: string;
      city: string;
      formType: "normal" | "beforeAfter";
      image: string | null;
      imageBefore: string | null;
      imageAfter: string | null;
      creator_id: string;
      created_at?: string;
    } = {
      title,
      desc,
      city,
      formType,
      image: imageUrl,
      imageBefore: imageBeforeUrl,
      imageAfter: imageAfterUrl,
      creator_id: userData.user.id,
    };

    if (created_at) {
      updateData.created_at = created_at;
    }

    const { error } = await supabase
      .from("news")
      .update(updateData)
      .eq("id", id);

    if (error) {
      throw new Error(`Failed to update news: ${error.message}`);
    }
  } catch (error) {
    console.error("Error in updateNews:", error);
    throw error;
  }
}

export async function getAllNews(page: number = 1, limit: number = 6) {
  const supabase = await createServerClientInstance();
  const offset = (page - 1) * limit;

  try {
    const { data, count, error } = await supabase
      .from("news")
      .select("*", { count: "exact" }) // Sørg for at tælle det totale antal
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      throw new Error(`Failed to fetch news: ${error.message}`);
    }

    return { news: data, total: count || 0 };
  } catch (err) {
    console.error("Unexpected error during fetching news:", err);
    throw err;
  }
}

export async function getNewsById(newsId: number) {
  const supabase = await createServerClientInstance();

  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("id", newsId)
      .single();

    if (error) {
      throw new Error(`Failed to fetch news by ID: ${error.message}`);
    }

    return data;
  } catch (err) {
    console.error("Unexpected error during fetching news by ID:", err);
    throw err;
  }
}

export async function deleteNews(newsId: number): Promise<void> {
  const supabase = await createServerClientInstance();

  try {
    const { error } = await supabase.from("news").delete().eq("id", newsId);

    if (error) {
      throw new Error(`Failed to delete news: ${error.message}`);
    }
  } catch (error) {
    console.error("Error in deleteNews:", error);
    throw error;
  }
}

// REVIEWS

export async function createReview(
  name: string,
  city: string,
  desc: string,
  rate: number
): Promise<void> {
  const supabase = await createServerClientInstance();

  try {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) {
      throw new Error("User not authenticated");
    }

    const { error } = await supabase.from("reviews").insert([
      {
        creator: userData.user.id,
        name,
        city,
        desc,
        rate,
      },
    ]);

    if (error) {
      throw new Error(`Failed to create review: ${error.message}`);
    }
  } catch (error) {
    console.error("Error in createReview:", error);
    throw error;
  }
}

export async function getAllReviews(page: number = 1, limit: number = 6) {
  const supabase = await createServerClientInstance();
  const offset = (page - 1) * limit;

  try {
    const { data, count, error } = await supabase
      .from("reviews")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      throw new Error(`Failed to fetch reviews: ${error.message}`);
    }

    return { reviews: data, total: count || 0 };
  } catch (err) {
    console.error("Unexpected error during fetching reviews:", err);
    throw err;
  }
}

export async function deleteReview(reviewId: number): Promise<void> {
  const supabase = await createServerClientInstance();

  try {
    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", reviewId);

    if (error) {
      throw new Error(`Failed to delete review: ${error.message}`);
    }
  } catch (error) {
    console.error("Error in deleteReview:", error);
    throw error;
  }
}

export async function getLatestReviews(limit: number = 10) {
  const supabase = await createServerClientInstance();

  try {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      throw new Error(`Failed to fetch latest reviews: ${error.message}`);
    }

    return data;
  } catch (err) {
    console.error("Unexpected error during fetching latest reviews:", err);
    throw err;
  }
}

export async function updateReview(
  reviewId: number,
  name: string,
  city: string,
  desc: string,
  rate: number
): Promise<void> {
  const supabase = await createServerClientInstance();

  try {
    const { error } = await supabase
      .from("reviews")
      .update({ name, city, desc, rate })
      .eq("id", reviewId);

    if (error) {
      throw new Error(`Failed to update review: ${error.message}`);
    }
  } catch (error) {
    console.error("Error in updateReview:", error);
    throw error;
  }
}

export async function getReviewById(reviewId: number) {
  const supabase = await createServerClientInstance();

  try {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("id", reviewId)
      .single();

    if (error) {
      throw new Error(`Failed to fetch review by ID: ${error.message}`);
    }

    return data;
  } catch (err) {
    console.error("Unexpected error during fetching review by ID:", err);
    throw err;
  }
}

// REQUESTS

export async function getAllRequests(page: number = 1, limit: number = 6) {
  const supabase = await createServerClientInstance();
  const offset = (page - 1) * limit;

  try {
    const { data, count, error } = await supabase
      .from("requests")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      throw new Error(`Failed to fetch requests: ${error.message}`);
    }

    return { requests: data, total: count || 0 };
  } catch (err) {
    console.error("Unexpected error during fetching requests:", err);
    throw err;
  }
}

export async function deleteRequest(requestId: string): Promise<void> {
  const supabase = await createServerClientInstance();

  try {
    const { error } = await supabase
      .from("requests")
      .delete()
      .eq("id", requestId);

    if (error) {
      throw new Error(`Failed to delete request: ${error.message}`);
    }
  } catch (error) {
    console.error("Error in deleteRequest:", error);
    throw error;
  }
}

export async function updateRequest(
  requestId: string,
  data: {
    name?: string;
    category?: string;
    mobile?: string;
    mail?: string;
    massage?: string;
    address?: string;
    city?: string;
  }
): Promise<void> {
  const supabase = await createServerClientInstance();

  try {
    const { error } = await supabase
      .from("requests")
      .update(data)
      .eq("id", requestId);

    if (error) {
      throw new Error(`Failed to update request: ${error.message}`);
    }
  } catch (error) {
    console.error("Error in updateRequest:", error);
    throw error;
  }
}

export async function getRequestById(requestId: string) {
  const supabase = await createServerClientInstance();

  try {
    const { data, error } = await supabase
      .from("requests")
      .select("*")
      .eq("id", requestId)
      .single();

    if (error) {
      throw new Error(`Failed to fetch request by ID: ${error.message}`);
    }

    return data;
  } catch (err) {
    console.error("Unexpected error during fetching request by ID:", err);
    throw err;
  }
}

// REQUEST NOTES

export async function createRequestNote(
  desc: string,
  requestId: string
): Promise<{ id: string; desc: string; created_at: string }> {
  const supabase = await createServerClientInstance();

  try {
    // Hent den autentificerede bruger
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) {
      throw new Error("User not authenticated");
    }

    // Indsæt noten og returner dataene
    const { data, error } = await supabase
      .from("notes")
      .insert([
        {
          desc: desc,
          request_id: requestId,
          creator_id: userData.user.id,
        },
      ])
      .select("*")
      .single();

    if (error) {
      throw new Error(`Failed to create request note: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error in createRequestNote:", error);
    throw error;
  }
}

export async function getNotesByRequestId(requestId: string) {
  const supabase = await createServerClientInstance();

  try {
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("request_id", requestId);

    if (error) {
      throw new Error(`Failed to fetch notes: ${error.message}`);
    }

    return data;
  } catch (err) {
    console.error("Unexpected error during fetching notes:", err);
    throw err;
  }
}

export async function deleteRequestNote(noteId: string): Promise<void> {
  const supabase = await createServerClientInstance();

  try {
    const { error } = await supabase.from("notes").delete().eq("id", noteId);

    if (error) {
      throw new Error(`Failed to delete request note: ${error.message}`);
    }
  } catch (error) {
    console.error("Error in deleteRequestNote:", error);
    throw error;
  }
}
