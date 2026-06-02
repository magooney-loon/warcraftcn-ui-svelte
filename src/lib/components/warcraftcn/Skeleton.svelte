<script lang="ts">
  type Variant = 'default' | 'circular';
  type Faction = 'default' | 'orc' | 'elf' | 'human' | 'undead';

  interface SkeletonProps {
    variant?: Variant;
    faction?: Faction;
    class?: string;
    [key: string]: unknown;
  }

  const variantClasses: Record<Variant, string> = {
    default: 'rounded-md',
    circular: 'rounded-full',
  };

  const factionClasses: Record<Faction, string> = {
    default: 'wc-skeleton',
    orc: 'wc-skeleton-orc',
    elf: 'wc-skeleton-elf',
    human: 'wc-skeleton-human',
    undead: 'wc-skeleton-undead',
  };

  let {
    variant = 'default',
    faction = 'default',
    class: className,
    ...rest
  }: SkeletonProps = $props();
</script>

<div
  class={['fantasy relative overflow-hidden', variantClasses[variant], factionClasses[faction], className]}
  data-slot="skeleton"
  {...rest}
>
  <div class="wc-skeleton-icons" aria-hidden="true"></div>
  <div class="wc-skeleton-shimmer" aria-hidden="true"></div>
</div>
