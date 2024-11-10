import { json, redirect } from "@sveltejs/kit";

export const GET = async ({ locals: { supabase } }) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return json({ status: 500, body: error.message });
  }
  return redirect(303, "/auth");
};
