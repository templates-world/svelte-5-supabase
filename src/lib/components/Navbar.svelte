<script lang="ts">
	import { page } from '$app/stores';

	const user = $page.data.session?.user.user_metadata;

	const name = user?.name;
	const avatar = user?.picture;
</script>

<nav class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl">Briefly</a>
	</div>
	<div class="flex-none gap-2">
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img alt={name} src={avatar} />
				</div>
			</div>
		</div>
	</div>
</nav>
