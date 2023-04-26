## Task
The output data objects represent files and folders, each one has a unique "id", a "type" ('folder'/'file'), a "parent" property referencing ancestor folder (or a null value, for root-level directories) and an optional "ext" (extension) property for "file" items.

- The goal of this task is to build a Next.js web app that would render a file explorer ui, with a hierarchical tree of folders which would allow the user to expand/collapse individual branches and view folder contents.
- Re-fetch the data every 30 seconds and when user switches back to the app tab/window.
- Build the UI the way you think is best, using any libraries/icons/etc.

## Structure
- components - UI components
- models - the logic of converting an array to a tree, tree search, sorting
- providers - here to fetch files
- pages -  root page
- styles - global styles
- types - reusable types

## Solution
- Server side data fetching runs in the Root Page in src/pages/index.tsx
- The received response is converted into a tree and set as a property
- Based on the tree, the data of the active node is displayed.
- The node is sorted in such a way that among the elements folders are displayed first and then files
- The refreshing timer functionality is implemented by reloading the page (not the best way, it is better to update the data without reloading the page.) I just did not have time to implement it

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.