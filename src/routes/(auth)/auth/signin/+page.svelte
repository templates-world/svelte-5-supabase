<script>
	import Google from '$lib/icons/Google.svelte';
	import { fade } from 'svelte/transition';

	let loading = false;
</script>

<main in:fade={{ duration: 300 }}>
	<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
		<h1 class="text-3xl font-bold mb-8 text-center">Welcome to Briefly</h1>
		<div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
			<form method="POST" action="/auth?/signin" class="form-control">
				<button
					formaction="/auth?/signin&provider=google"
					class="btn btn-primary w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-md text-white hover:bg-blue-700 transition duration-300 ease-in-out"
					on:click={() => (loading = true)}
				>
					{#if loading}
						<span class="loading loading-spinner"></span>
					{:else}
						<Google />
					{/if}
					<span>{loading ? 'Signing in...' : 'Sign in with Google'}</span>
				</button>
			</form>
		</div>
	</div>
</main>
