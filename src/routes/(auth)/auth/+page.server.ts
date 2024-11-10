import type { Provider } from '@supabase/supabase-js';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = async ({ locals: { session } }) => {
	if (session) {
		throw error(401, 'Unauthorized');
	}
};

export const actions = {
	signin: async ({ request, locals, url }) => {
		const provider = url.searchParams.get('provider') as Provider;

		if (provider) {
			switch (provider) {
				case 'google':
					const { data: authData, error: authError } = await locals.supabase.auth.signInWithOAuth({
						provider: 'google',
						options: {
							redirectTo: `${url.origin}/auth/callback`,
							queryParams: {
								access_type: 'offline',
								prompt: 'consent'
							}
						}
					});

					if (authError) {
						return fail(500, { message: 'Something went wrong.' });
					}

					throw redirect(303, authData.url);
				default:
					return { status: 400, body: { error: 'Invalid provider' } };
			}
		}
	}
} satisfies Actions;
