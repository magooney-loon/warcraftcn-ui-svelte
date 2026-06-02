# SVELTE-PORT.md — warcraftcn/ui → SvelteKit (Svelte 5)

> Master plan for porting the warcraftcn/ui component library from React/Next.js to Svelte 5 + SvelteKit.

## Goals

1. **Parity** — All 19 themed components ported with identical visual output
2. **Idiomatic Svelte 5** — Use runes (`$state`, `$derived`, `$effect`, `$props`), snippets, and SvelteKit conventions
3. **Zero runtime dependencies** — Svelte 5.16+ has native `clsx`-like class merging built in
4. **Docs site** — SvelteKit-based documentation with MDsveX
5. **Fork-based for now** — Users fork the repo. npm package later. No shadcn registry.

---

## Tech Stack

| Layer              | React/Next.js (Current)     | Svelte 5 / SvelteKit (Target)         |
| ------------------ | --------------------------- | -------------------------------------- |
| Framework          | Next.js 16 (App Router)     | SvelteKit (Svelte 5 runes)            |
| Language           | TypeScript (strict)         | TypeScript (strict)                    |
| Styling            | Tailwind CSS v4             | Tailwind CSS v4 (unchanged)           |
| Headless Primitives| Radix UI (7 packages)       | **None** — native HTML + Svelte state  |
| Variant System     | `cva`                       | **Dropped** — plain objects + native class merging |
| Class Merging      | `tailwind-merge` + `clsx`   | **Built-in** — Svelte 5.16+ `class` accepts objects/arrays natively |
| Animation          | `motion` (framer-motion)    | Svelte transitions (built-in)         |
| Toast              | `sonner`                    | **Custom** — Svelte transitions       |
| Icons              | `lucide-react`              | Inline SVG (existing assets)          |
| Docs Engine        | `fumadocs` (MDX)            | MDsveX + custom layout                |
| Linting            | Biome (`ultracite`)         | Prettier (ships with Svelte)          |
| Package Mgr        | pnpm                        | pnpm                                   |
| Distribution       | shadcn registry (CLI)       | **Fork now → npm later** (no shadcn)   |

### Dependencies

```json
{
  "devDependencies": {
    "@sveltejs/kit": "latest",
    "@sveltejs/adapter-static": "latest",
    "@sveltejs/package": "latest",
    "svelte": "^5",
    "svelte-check": "latest",
    "tailwindcss": "^4",
    "@tailwindcss/vite": "^4",
    "typescript": "^5",
    "mdsvex": "latest",
    "prettier": "latest",
    "prettier-plugin-svelte": "latest"
  },
  "dependencies": {}
}
```

**Zero runtime deps.** Svelte 5.16+ natively supports `class` with objects and arrays (powered by `clsx` internally):

```svelte
<!-- Object syntax — truthy keys are applied -->
<div class={{ 'bg-red-500': isError, 'bg-green-500': isSuccess }}>...</div>

<!-- Array syntax — truthy values are combined -->
<div class={['btn-base', isActive && 'btn-active', props.class]}>...</div>

<!-- Nested — arrays can contain objects and other arrays -->
<button {...props} class={['warcraft-btn', props.class]}>
  {@render children?.()}
</button>
```

No need for `clsx` or `tailwind-merge` — it's all built in.

---

## Why no headless UI library works here

- **13 components** are just `<div>`, `<button>`, `<input>`, `<svg>`, `<label>` with CSS classes. No Radix behavior — only styling via `border-image` and Tailwind.
- **6 components** use Radix but only for basic open/close/toggle state trivial in Svelte 5:
  - **Accordion** → `$state` toggle
  - **Tabs** → `$state` for active tab
  - **DropdownMenu** → `$state` + `clickOutside` action
  - **Tooltip** → `$state` hover + `position: fixed`
  - **Label** → literally just a `<label>` element
  - **Checkbox / RadioGroup** → native `<input>` with CSS styling

---

## Proposed Project Structure

```
warcraftcn-ui-svelte/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   └── warcraftcn/       # ★ Component library (public API)
│   │   │       ├── accordion/
│   │   │       │   ├── Accordion.svelte
│   │   │       │   ├── AccordionItem.svelte
│   │   │       │   ├── AccordionTrigger.svelte
│   │   │       │   ├── AccordionContent.svelte
│   │   │       │   └── index.ts
│   │   │       ├── tabs/
│   │   │       │   ├── Tabs.svelte
│   │   │       │   ├── TabsList.svelte
│   │   │       │   ├── TabsTrigger.svelte
│   │   │       │   ├── TabsContent.svelte
│   │   │       │   └── index.ts
│   │   │       ├── dropdown-menu/
│   │   │       │   ├── DropdownMenu.svelte
│   │   │       │   ├── DropdownMenuItem.svelte
│   │   │       │   ├── DropdownMenuContent.svelte
│   │   │       │   └── index.ts
│   │   │       ├── tooltip/
│   │   │       │   ├── Tooltip.svelte
│   │   │       │   ├── TooltipContent.svelte
│   │   │       │   └── index.ts
│   │   │       ├── toast/
│   │   │       │   ├── Toaster.svelte
│   │   │       │   ├── ScrollToast.svelte
│   │   │       │   └── index.ts
│   │   │       ├── Avatar.svelte
│   │   │       ├── Badge.svelte
│   │   │       ├── Button.svelte
│   │   │       ├── Card.svelte
│   │   │       ├── Checkbox.svelte
│   │   │       ├── Cursor.svelte
│   │   │       ├── Input.svelte
│   │   │       ├── Label.svelte
│   │   │       ├── Pagination.svelte
│   │   │       ├── RadioGroup.svelte
│   │   │       ├── Skeleton.svelte
│   │   │       ├── Spinner.svelte
│   │   │       ├── Textarea.svelte
│   │   │       ├── index.ts          # Barrel re-exports
│   │   │       ├── assets/           # WebP/SVG assets (unchanged)
│   │   │       └── styles/
│   │   │           └── warcraft.css
│   │   ├── actions/
│   │   │   └── clickOutside.ts      # Svelte action for dropdowns/tooltips
│   │   └── index.ts                 # Package entry point
│   │
│   ├── routes/                      # Docs/demo site (not packaged)
│   │   ├── +layout.svelte          # Root layout (theme, toaster, header)
│   │   ├── +page.svelte            # Landing page
│   │   └── docs/
│   │       ├── +layout.svelte      # Docs layout (sidebar)
│   │       └── [[slug]]/
│   │           └── +page.svelte    # MDsveX content pages
│   │
│   └── app.html                     # SvelteKit HTML shell
│
├── static/                          # Public assets (logos, images)
├── content/                         # MDsveX documentation
│   └── docs/components/
├── svelte.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── .prettierrc                      # Prettier config
```

### How `svelte-package` works

Running `npx svelte-package` takes `src/lib/` and outputs a `dist/` directory with:
- Preprocessed Svelte components
- Transpiled TypeScript → JavaScript
- Auto-generated `.d.ts` type definitions

The docs site (`src/routes/`) is **not packaged** — it's the demo/documentation.

Our `package.json` exports:
```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "svelte": "./dist/index.js"
    }
  },
  "files": ["dist"],
  "svelte": "./dist/index.js",
  "sideEffects": ["**/*.css"]
}
```

---

## Component Porting Guide

### Props → `$props()`

```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface ButtonProps {
    class?: string;
    variant?: 'default' | 'frame';
    children?: Snippet;
    [key: string]: unknown;
  }

  let { class: className = '', variant = 'default', children, ...rest }: ButtonProps = $props();
</script>
```

### State → `$state()`

```svelte
let phase = $state(0);
let isOpen = $state(false);
```

### Derived → `$derived()` / `$derived.by()`

```svelte
let activeTab = $state('');
let context = $derived({ activeTab, setActive: (v: string) => activeTab = v });
```

### Effects → `$effect()`

```svelte
$effect(() => {
  const t = setTimeout(() => phase = 1, 600);
  return () => clearTimeout(t);
});
```

> **Important:** Don't use `$effect` to synchronize state. Use `$derived` instead.

### Context → `createContext()` (Svelte 5.40+)

The new preferred way — type-safe, no string keys:

```ts
// accordion-context.ts
import { createContext } from 'svelte';

interface AccordionCtx {
  toggle: (value: string) => void;
  isOpen: (value: string) => boolean;
}

export const [getAccordionCtx, setAccordionCtx] = createContext<AccordionCtx>();
```

```svelte
<!-- Parent sets -->
<script>
  import { setAccordionCtx } from './accordion-context';
  setAccordionCtx({ toggle, isOpen });
</script>

<!-- Child gets -->
<script>
  import { getAccordionCtx } from './accordion-context';
  const { isOpen } = getAccordionCtx();
</script>
```

### Children → Snippets

```svelte
{@render children?.()}
```

Named snippets for compound components:

```svelte
{#snippet icon()}
  <SomeIcon />
{/snippet}
<Component {icon} />
```

### Variants → native class objects (no `cva`, no `clsx`)

```svelte
<script lang="ts">
  const variants = {
    default: 'bg-center px-5 py-4 bg-cover bg-no-repeat text-white hover:brightness-110',
    frame: 'bg-center bg-cover bg-no-repeat text-white hover:brightness-110',
  } as const;

  let { variant = 'default', class: className = '', ...rest }: Props = $props();
</script>

<button
  {...rest}
  class={[
    'fantasy inline-flex shrink-0 items-center justify-center ...',
    variants[variant],
    'border-solid [border-image-repeat:stretch] border-5 [border-image-slice:16_fill]',
    variant === 'frame' ? 'wc-btn-border-frame' : 'wc-btn-border',
    className
  ]}
>
  {@render children?.()}
</button>
```

Svelte's native class merging handles the rest. No external libraries needed.

---

### Replacing Radix Primitives

#### Accordion → `$state` + `transition:slide`

```svelte
<!-- Accordion.svelte -->
<script lang="ts">
  import { slide, fade } from 'svelte/transition';
  import { setAccordionCtx } from './accordion-context';

  let value = $state<string[]>([]);

  function toggle(itemValue: string) {
    value = value.includes(itemValue)
      ? value.filter(v => v !== itemValue)
      : [...value, itemValue];
  }

  function isOpen(itemValue: string) {
    return value.includes(itemValue);
  }

  setAccordionCtx({ toggle, isOpen });
  let { children, class: className = '' } = $props();
</script>

<div class={['flex flex-col', className]}>
  {@render children?.()}
</div>
```

#### Tabs → `$state` + context

```svelte
<!-- Tabs.svelte -->
<script lang="ts">
  import { setTabsCtx } from './tabs-context';

  let activeTab = $state('');
  setTabsCtx($derived({
    activeTab,
    setActive: (v: string) => activeTab = v
  }));

  let { children, class: className = '' } = $props();
</script>

<div class={['flex flex-col', className]}>
  {@render children?.()}
</div>
```

#### DropdownMenu → `$state` + `use:clickOutside`

```svelte
<script lang="ts">
  import { fade } from 'svelte/transition';

  let open = $state(false);
  function toggle() { open = !open; }
  function close() { open = false; }
</script>
```

A Svelte action for click-outside:

```ts
// src/lib/actions/clickOutside.ts
export function clickOutside(node: HTMLElement, callback: () => void) {
  const handler = (e: MouseEvent) => {
    if (!node.contains(e.target as Node)) callback();
  };
  document.addEventListener('click', handler, true);
  return {
    destroy() { document.removeEventListener('click', handler, true); }
  };
}
```

#### Tooltip → `$state` hover + `position: fixed`

```svelte
<script lang="ts">
  import { fade } from 'svelte/transition';

  let visible = $state(false);
  let position = $state({ x: 0, y: 0 });

  function onmouseenter(e: MouseEvent) {
    visible = true;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    position = { x: rect.left, y: rect.bottom + 8 };
  }
</script>
```

#### Checkbox / RadioGroup → native `<input>` + CSS

Svelte's `bind:group` handles radio groups natively. `bind:checked` handles checkboxes. Style with CSS.

#### Label → plain `<label>` element

No Radix needed.

---

### Toast → custom with Svelte transitions

```svelte
<!-- Toaster.svelte -->
<script lang="ts">
  import { slide, fade } from 'svelte/transition';

  type Toast = { id: string; message: string; faction: string; };
  let toasts = $state<Toast[]>([]);

  export function addToast(toast: Omit<Toast, 'id'>) {
    const id = crypto.randomUUID();
    toasts = [...toasts, { ...toast, id }];
    setTimeout(() => removeToast(id), 5000);
  }

  function removeToast(id: string) {
    toasts = toasts.filter(t => t.id !== id);
  }
</script>
```

The scroll unroll animation maps to a custom Svelte transition using the `css` callback.

---

## Porting Priority

### Phase 1 — Foundation (1 day)

1. Scaffold SvelteKit library project — `npx sv create --template library --types ts --add prettier tailwindcss mdsvex --install pnpm .`
2. Copy `warcraft.css` + all WebP/SVG assets to `src/lib/components/warcraftcn/`
3. Set up Tailwind v4 with CSS theme variables from old `global.css`
4. Port theme system — dark/light via CSS class toggle
5. Configure `package.json` exports for `svelte-package`

### Phase 2 — Zero-Logic Components (2 days)

These are pure styled elements with no state management:

| #  | Component   | What it is                       |
| -- | ----------- | -------------------------------- |
| 1  | Badge       | Styled `<div>` with variants     |
| 2  | Skeleton    | `<div>` with CSS pulse animation |
| 3  | Spinner     | `<svg>` with CSS animation       |
| 4  | Avatar      | `<div>` + `<img>` + CSS frame    |
| 5  | Button      | `<button>` with border-image     |
| 6  | Card        | Compound `<div>` components      |
| 7  | Input       | `<input>` with border-image      |
| 8  | Textarea    | `<textarea>` with border-image   |
| 9  | Cursor      | Wrapper `<div>` with CSS cursors |
| 10 | Label       | Styled `<label>`                 |

### Phase 3 — Stateful Components (2–3 days)

These need Svelte 5 state but no external library:

| #  | Component      | Svelte 5 replacement                    |
| -- | -------------- | --------------------------------------- |
| 11 | Checkbox       | Native button + `$state`                |
| 12 | RadioGroup     | Native `<input type="radio">` + `bind:group` + CSS |
| 13 | Pagination     | `$state` page + Button component        |
| 14 | Tooltip        | `$state` hover + `transition:fade`      |
| 15 | Accordion      | `$state` + context + `transition:slide` |
| 16 | Tabs           | `$state` + context                      |
| 17 | DropdownMenu   | `$state` + `use:clickOutside` action    |
| 18 | Toast          | Custom toaster + Svelte transitions     |

### Phase 4 — Documentation Site (3–5 days)

1. Set up MDsveX content pipeline
2. Port docs layout with sidebar, search
3. Migrate all 20 MDX → MDsveX component docs
4. Landing page with SvelteKit routing
5. Dark/light theme toggle

### Phase 5 — Clean Up (1 day)

1. Barrel exports via `src/lib/index.ts`
2. README with fork instructions
3. Remove any leftover React/Next.js files
4. Verify `svelte-package` builds correctly

### Future — npm Package

When ready, publish to npm:

1. `npx svelte-package` to generate `dist/`
2. `npm publish` — users can then `npm install warcraftcn-ui`
3. Import: `import { Button } from 'warcraftcn-ui'`
4. The `package.json` exports and `svelte-package` setup in Phase 1 already prepare for this

No shadcn registry. No CLI installer. Just fork or npm.

---

## CSS Migration Notes

`warcraft.css` ports with **zero changes**. It uses:
- Pure CSS `border-image-source` with `url()` references
- CSS keyframe animations
- CSS custom properties
- No React-specific features

**Asset path resolution** — move assets to `static/warcraftcn/assets/` and update CSS `url()` paths to `/warcraftcn/assets/...`. Or keep co-located in `src/lib/` and import via Vite's `?url` suffix.

---

## File Naming Convention

Compound components use a directory with an `index.ts` barrel:

```
accordion/
├── Accordion.svelte
├── AccordionItem.svelte
├── AccordionTrigger.svelte
├── AccordionContent.svelte
├── accordion-context.ts
└── index.ts
```

```ts
// accordion/index.ts
export { default as Accordion } from './Accordion.svelte';
export { default as AccordionItem } from './AccordionItem.svelte';
export { default as AccordionTrigger } from './AccordionTrigger.svelte';
export { default as AccordionContent } from './AccordionContent.svelte';
```

Simple single-file components live directly in `warcraftcn/`:
```
Button.svelte
Badge.svelte
Input.svelte
...
```

---

## SvelteKit Best Practices for Libraries

From the official packaging docs:

1. **Don't use SvelteKit-specific modules** (`$app/environment`, `$app/navigation`) in `src/lib/` — use generic alternatives like `esm-env`
2. **Define aliases in `svelte.config.js`**, not `vite.config.js` or `tsconfig.json` — `svelte-package` only reads `svelte.config.js`
3. **Use `.js` extensions in imports** even for `.ts` files (TypeScript ESM convention)
4. **Ship type definitions** — `svelte-package` auto-generates them, keep the `types` condition in exports
5. **Mark CSS files with side effects** — `"sideEffects": ["**/*.css"]` in `package.json`

---

## Timeline Estimate

| Phase | Description                        | Estimated Effort |
| ----- | ---------------------------------- | ---------------- |
| 1     | Foundation (scaffold, deps, utils) | 1 day            |
| 2     | Zero-logic components (10)         | 2 days           |
| 3     | Stateful components (8)            | 2–3 days         |
| 4     | Documentation site                 | 3–5 days         |
| 5     | Clean up                           | 1 day            |
| **Total** |                                | **9–12 days**    |
