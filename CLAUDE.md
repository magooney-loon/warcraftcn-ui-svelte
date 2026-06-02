# CLAUDE.md — warcraftcn-ui (Original React Codebase)

> Reference document for the **original** React/Next.js project, now archived in `OLD/`.  
> For the Svelte 5 port plan, see [`SVELTE-PORT.md`](./SVELTE-PORT.md).

## What is this?

**warcraftcn/ui** is an open-source, Warcraft III-themed UI component library and documentation website. It provides copy-paste-ready components styled after the classic Warcraft III RTS aesthetics — fantasy borders, scroll textures, faction-based color themes (Orc, Human, Undead, Elf), and gold/amber color palettes.

Live at [warcraftcn.com](https://warcraftcn.com/).

## Tech Stack

| Layer          | Technology                                        |
| -------------- | ------------------------------------------------- |
| Framework      | Next.js 16 (App Router, React 19, RSC)            |
| Language       | TypeScript (strict mode)                          |
| Styling        | Tailwind CSS v4 + custom CSS (`warcraft.css`)     |
| Component Head | Radix UI (accordion, tabs, dialog, dropdown, etc.) |
| Variants       | `class-variance-authority` (cva)                  |
| Merging        | `tailwind-merge` + `clsx` → `cn()` util           |
| Animation      | `motion` (framer-motion v12)                      |
| Toast          | `sonner` (custom scroll-toast overlay)            |
| Icons          | `lucide-react`                                    |
| Docs Engine    | `fumadocs` (MDX, search, sidebar, layout)         |
| Linting        | Biome (`ultracite` presets)                       |
| Package Mgr    | pnpm                                              |
| Commit Hooks   | Husky (`pre-commit`)                              |

## Project Structure

The original React/Next.js codebase lives in `OLD/`:

```
OLD/
├── app/                          # Next.js App Router
│   ├── (home)/                   # Landing page
│   ├── docs/                     # Documentation pages (fumadocs)
│   │   └── [[...slug]]/
│   ├── api/                      # API routes
│   ├── r/                        # Registry API (shadcn-compatible)
│   ├── llms.txt / llms-full.txt  # LLM-friendly docs
│   ├── layout.tsx                # Root layout (ThemeProvider, Toaster, Header)
│   ├── global.css                # Tailwind + CSS variable theme
│   └── not-found.tsx             # 404 page
│
├── components/
│   ├── ui/
│   │   ├── warcraftcn/           # ★ THE COMPONENT LIBRARY
│   │   │   ├── *.tsx             # 19 themed components
│   │   │   ├── assets/           # WebP backgrounds, SVGs, cursor images
│   │   │   ├── styles/           # warcraft.css (border-image, animations)
│   │   │   └── example/          # ToastExample.tsx
│   │   ├── button.tsx            # Standard shadcn/ui wrappers
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ... (12 more)
│   ├── ai/                       # AI-specific page actions
│   ├── site-header.tsx           # Global nav header
│   ├── site-footer.tsx
│   ├── docs-sidebar.tsx
│   ├── theme-provider.tsx        # next-themes wrapper
│   └── search.tsx                # Search dialog
│
├── content/docs/                 # MDX documentation pages
│   └── components/               # Per-component docs (accordion.mdx, button.mdx, etc.)
│
├── hooks/
│   └── use-mobile.ts             # Mobile breakpoint hook
│
├── lib/
│   ├── utils.ts                  # cn() utility
│   ├── cn.ts                     # Alternative cn export
│   ├── source.ts                 # fumadocs source config
│   ├── package.ts                # Package info util
│   └── layout.shared.tsx         # Shared layout components
│
├── config/
│   └── nav-items.ts              # Navigation config
│
├── public/                       # Static assets (logos, warcraft images)
│
├── registry.json                 # ★ shadcn/ui registry (all component metadata)
├── components.json               # shadcn/ui project config (radix-nova style)
├── source.config.ts              # fumadocs MDX config
├── biome.jsonc                   # Biome lint config
└── mdx-components.tsx            # MDX component mapping
```

## Warcraft Components (19 total)

All themed components live under `OLD/components/ui/warcraftcn/`:

| Component         | File              | Radix Dependency              | Key Features                                     |
| ----------------- | ----------------- | ----------------------------- | ------------------------------------------------ |
| Accordion         | accordion.tsx     | `@radix-ui/react-accordion`   | Animated sword/shield/rune icons, scroll content |
| Avatar            | avatar.tsx        | —                             | Faction-based (orc/elf/human/undead/default)     |
| Badge             | badge.tsx         | —                             | Variant-based fantasy styling                    |
| Button            | button.tsx        | `@radix-ui/react-slot`        | `border-image` frames, default + frame variants  |
| Card              | card.tsx          | —                             | `border-image` card frame, size variants         |
| Checkbox          | checkbox.tsx      | —                             | Faction-themed checked/unchecked images          |
| Cursor            | cursor.tsx        | —                             | Faction-based custom CSS cursors                 |
| Dropdown Menu     | dropdown-menu.tsx | `@radix-ui/react-dropdown-menu`| Full Radix dropdown with fantasy borders         |
| Input             | input.tsx         | —                             | Frame variant with border-image                  |
| Label             | label.tsx         | `@radix-ui/react-label`       | Styled label                                     |
| Pagination        | pagination.tsx    | —                             | Uses Button's `buttonVariants`                   |
| Radio Group       | radio-group.tsx   | —                             | Faction-based radio buttons                      |
| Skeleton          | skeleton.tsx      | —                             | Pulsing fantasy placeholder                      |
| Spinner           | spinner.tsx       | —                             | SVG path-based spinner                           |
| Tabs              | tabs.tsx          | `@radix-ui/react-tabs`        | Faction-themed tabs, vertical/horizontal         |
| Textarea          | textarea.tsx      | —                             | Styled with warcraft frame                       |
| Toast             | toast.tsx         | `sonner` + `motion`           | Scroll-unroll animation, 5 factions              |
| Tooltip           | tooltip.tsx       | `@radix-ui/react-tooltip`     | Fantasy-themed tooltip                           |

## Key Patterns

### Faction Theming
Most components support a `faction` prop: `"default" | "orc" | "elf" | "human" | "undead"`. Each faction maps to CSS classes that apply different `border-image`, background images, and color schemes.

### CSS Architecture
- `warcraft.css` defines `border-image-source` rules using `wc-*` class prefixes (e.g., `wc-btn-border`, `wc-card-border`, `wc-dropdown-border`)
- Animations are keyframe-based: `wc-accordion-down`, `wc-accordion-up`, `wc-light-sweep`
- Component sizes use CSS `border-image-slice` and `border-width` for the frame effect

### Variant System
Components use `cva()` from `class-variance-authority` to define variant classes, merged via the `cn()` utility (`clsx` + `tailwind-merge`).

### Component Props Pattern
```tsx
function Component({
  className,
  variant,
  ...props
}: React.ComponentProps<"element"> & VariantProps<typeof variants>) {
  return <element className={cn(variants({ variant }), className)} {...props} />;
}
```

### Registry System
`registry.json` follows the [shadcn/ui registry schema](https://ui.shadcn.com/registry). Each component entry lists its files, dependencies, and registry dependencies. This enables `npx shadcn add @warcraftcn/button` for consumers.

## Development Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start Next.js dev server
pnpm build            # Production build
pnpm check            # Lint with Biome (ultracite)
pnpm fix              # Auto-fix lint issues
pnpm types:check      # Full TypeScript check
```

## Commit Convention

Uses conventional commits: `category(scope): message`

Categories: `feat`, `fix`, `refactor`, `docs`, `build`, `test`, `ci`, `chore`

## Notes

- The project uses React 19 with `"use client"` directives for interactive components
- `fumadocs-mdx` runs as a `postinstall` script to generate `.source/` types
- The `@/` path alias maps to the project root
- All components are designed to be consumed via the shadcn registry system, not as an npm package
