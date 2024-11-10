<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';

	const { children, data } = $props();
</script>

<Navbar />

{@render children()}
