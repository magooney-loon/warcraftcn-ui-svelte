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

	<!-- Installation -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Installation</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>npm install warcraftcn-ui-svelte</code>`}</pre>
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
      &lt;PaginationPrevious href="/page/1" /&gt;
    &lt;/PaginationItem&gt;
    &lt;PaginationItem&gt;
      &lt;PaginationLink href="/page/1"&gt;1&lt;/PaginationLink&gt;
    &lt;/PaginationItem&gt;
    &lt;PaginationItem&gt;
      &lt;PaginationLink href="/page/2" isActive={true}&gt;2&lt;/PaginationLink&gt;
    &lt;/PaginationItem&gt;
    &lt;PaginationItem&gt;
      &lt;PaginationEllipsis /&gt;
    &lt;/PaginationItem&gt;
    &lt;PaginationItem&gt;
      &lt;PaginationNext href="/page/3" /&gt;
    &lt;/PaginationItem&gt;
  &lt;/PaginationContent&gt;
&lt;/Pagination&gt;</code>`}</pre>
	</section>
</div>
