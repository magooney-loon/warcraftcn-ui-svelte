<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { resolve } from '$app/paths';

	throw redirect(302, resolve('/docs'));
</script>
