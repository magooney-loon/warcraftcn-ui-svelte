<script lang="ts">
	import { triggerScrollToast, Button, Toaster } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Toast — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Toast</h1>
		<p class="mt-2 text-amber-100/70">
			A scroll-unroll toast notification with faction-based styling. Use
			<code class="text-amber-300">triggerScrollToast()</code> to display toasts.
		</p>
	</div>

	<!-- Toast Triggers -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Trigger Toasts</h2>
		<div class="flex flex-wrap gap-4">
			<Button
				onclick={() => triggerScrollToast({ message: 'Quest accepted!', faction: 'default' })}
			>
				Default Toast
			</Button>
			<Button onclick={() => triggerScrollToast({ message: 'For the Horde!', faction: 'orc' })}>
				Orc Toast
			</Button>
			<Button onclick={() => triggerScrollToast({ message: 'By the Light!', faction: 'human' })}>
				Human Toast
			</Button>
			<Button onclick={() => triggerScrollToast({ message: 'Nature guides us.', faction: 'elf' })}>
				Elf Toast
			</Button>
			<Button
				onclick={() => triggerScrollToast({ message: 'The Scourge spreads...', faction: 'undead' })}
			>
				Undead Toast
			</Button>
		</div>
	</section>

	<!-- Variant Toasts -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Variants</h2>
		<div class="flex flex-wrap gap-4">
			<Button
				onclick={() => triggerScrollToast({ message: 'Operation completed.', variant: 'success' })}
			>
				Success
			</Button>
			<Button
				onclick={() => triggerScrollToast({ message: 'Something went wrong!', variant: 'error' })}
			>
				Error
			</Button>
			<Button onclick={() => triggerScrollToast({ message: 'Watch out...', variant: 'warning' })}>
				Warning
			</Button>
			<Button
				onclick={() => triggerScrollToast({ message: 'Here is some info.', variant: 'info' })}
			>
				Info
			</Button>
		</div>
	</section>

	<!-- Toaster (rendered for this page) -->
	<Toaster />

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { triggerScrollToast, Toaster } from '$lib/components/warcraftcn/index.js';

  function showToast() {
    triggerScrollToast({
      message: 'Quest accepted!',
      faction: 'orc',
      durationMs: 5000
    });
  }
&lt;/script&gt;

&lt;button onclick={showToast}&gt;Show Toast&lt;/button&gt;

&lt;!-- Add Toaster to your root layout --&gt;
&lt;Toaster /&gt;</code>`}</pre>
	</section>
</div>
