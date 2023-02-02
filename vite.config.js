import { defineConfig } from 'vite'
import fs from 'fs/promises';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    {
      name: "load-js-files-as-jsx",
      setup(build) {
        build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
          loader: "jsx",
          contents: await fs.readFile(args.path, "utf8"),
        }));
      },
    },],
})
