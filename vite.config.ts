import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cwd = process.cwd();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lodash: "lodash-es",
      $types: `${cwd}/src/types.d.ts`,
      "$types/api": `${cwd}/src/api.d.ts`,
      $application: `${cwd}/src/application`,
      $components: `${cwd}/src/components`,
      $queries: `${cwd}/src/queries`,
      $pages: `${cwd}/src/pages`,
      $utils: `${cwd}/src/utils`,
      $hooks: `${cwd}/src/hooks`,
      $controllers: `${cwd}/src/controllers`,
      "$entities.types": `${cwd}/entities.types.ts`,
      $ztypes: `${cwd}/ztypes`,
      $: `${cwd}/src`,
    },
  },
});
