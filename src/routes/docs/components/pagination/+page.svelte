<script lang="ts">
	import {
		Pagination,
		PaginationContent,
		PaginationItem,
		PaginationLink,
		PaginationPrevious,
		PaginationNext,
		PaginationEllipsis
	} from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Pagination — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Pagination</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed page navigation component with gold border-image styled links, Previous/Next
			buttons, and ellipsis support.
		</p>
	</div>

	<!-- Standard -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Standard</h2>
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive={true}>2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">10</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	</section>

	<!-- First Page (Previous disabled) -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">First Page</h2>
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" disabled />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive={true}>1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	</section>

	<!-- Last Page (Next disabled) -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Last Page</h2>
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">8</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">9</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive={true}>10</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" disabled />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	</section>

	<!-- Large Set with Ellipsis -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Many Pages</h2>
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">5</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive={true}>6</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">7</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">20</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
		  import {
		    Pagination, PaginationContent, PaginationItem,
		    PaginationLink, PaginationPrevious,
		    PaginationNext, PaginationEllipsis
		  } from 'warcraftcn-ui-svelte';
		&lt;/script&gt;

		&lt;Pagination&gt;
		  &lt;PaginationContent&gt;
		    &lt;PaginationItem&gt;
		      &lt;PaginationPrevious href="#" /&gt;
		    &lt;/PaginationItem&gt;
		    &lt;PaginationItem&gt;
		      &lt;PaginationLink href="#"&gt;1&lt;/PaginationLink&gt;
		    &lt;/PaginationItem&gt;
		    &lt;PaginationItem&gt;
		      &lt;PaginationLink href="#" isActive={true}&gt;2&lt;/PaginationLink&gt;
		    &lt;/PaginationItem&gt;
		    &lt;PaginationItem&gt;
		      &lt;PaginationEllipsis /&gt;
		    &lt;/PaginationItem&gt;
		    &lt;PaginationItem&gt;
		      &lt;PaginationNext href="#" /&gt;
		    &lt;/PaginationItem&gt;
		  &lt;/PaginationContent&gt;
		&lt;/Pagination&gt;</code>`}</pre>
	</section>

	<!-- Props -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Props</h2>
		<p class="text-xs font-semibold tracking-wider text-amber-400 uppercase">PaginationLink</p>
		<div class="overflow-x-auto rounded-lg border border-amber-900/30">
			<table class="w-full text-sm text-amber-100/80">
				<thead class="border-b border-amber-900/30 bg-black/20">
					<tr>
						<th class="px-4 py-2 text-left text-amber-300">Prop</th>
						<th class="px-4 py-2 text-left text-amber-300">Type</th>
						<th class="px-4 py-2 text-left text-amber-300">Default</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">isActive</td>
						<td class="px-4 py-2">boolean</td>
						<td class="px-4 py-2">false</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">disabled</td>
						<td class="px-4 py-2">boolean</td>
						<td class="px-4 py-2">false</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">href</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">—</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p class="mt-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
			PaginationPrevious / PaginationNext
		</p>
		<div class="overflow-x-auto rounded-lg border border-amber-900/30">
			<table class="w-full text-sm text-amber-100/80">
				<thead class="border-b border-amber-900/30 bg-black/20">
					<tr>
						<th class="px-4 py-2 text-left text-amber-300">Prop</th>
						<th class="px-4 py-2 text-left text-amber-300">Type</th>
						<th class="px-4 py-2 text-left text-amber-300">Default</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">href</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">""</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">disabled</td>
						<td class="px-4 py-2">boolean</td>
						<td class="px-4 py-2">false</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
