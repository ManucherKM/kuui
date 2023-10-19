// vite.config.ts
import { defineConfig } from "file:///C:/Users/Manucher/Desktop/Manucher/Frontend/kuui/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/Manucher/Desktop/Manucher/Frontend/kuui/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///C:/Users/Manucher/Desktop/Manucher/Frontend/kuui/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "file:///C:/Users/Manucher/Desktop/Manucher/Frontend/kuui/node_modules/glob/dist/mjs/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Manucher/Desktop/Manucher/Frontend/kuui/vite.config.ts";
var input = Object.fromEntries(
  glob.sync("src/**/*.{ts,tsx}", {
    ignore: ["src/**/*.stories.tsx", "src/**/*.d.ts"]
  }).map((file) => [
    relative("src", file.slice(0, file.length - extname(file).length)),
    fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
  ])
);
var vite_config_default = defineConfig({
  plugins: [dts(), libInjectCss()],
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["es"]
    },
    copyPublicDir: true,
    rollupOptions: {
      input,
      external: ["react", "react/jsx-runtime", "react-dom", "react-router-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom"
        },
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve("./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNYW51Y2hlclxcXFxEZXNrdG9wXFxcXE1hbnVjaGVyXFxcXEZyb250ZW5kXFxcXGt1dWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE1hbnVjaGVyXFxcXERlc2t0b3BcXFxcTWFudWNoZXJcXFxcRnJvbnRlbmRcXFxca3V1aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTWFudWNoZXIvRGVza3RvcC9NYW51Y2hlci9Gcm9udGVuZC9rdXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzJ1xyXG5pbXBvcnQgeyBleHRuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCdcclxuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ2dsb2InXHJcblxyXG5jb25zdCBpbnB1dCA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuXHRnbG9iXHJcblx0XHQuc3luYygnc3JjLyoqLyoue3RzLHRzeH0nLCB7XHJcblx0XHRcdGlnbm9yZTogWydzcmMvKiovKi5zdG9yaWVzLnRzeCcsICdzcmMvKiovKi5kLnRzJ10sXHJcblx0XHR9KVxyXG5cdFx0Lm1hcChmaWxlID0+IFtcclxuXHRcdFx0cmVsYXRpdmUoJ3NyYycsIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBleHRuYW1lKGZpbGUpLmxlbmd0aCkpLFxyXG5cdFx0XHRmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXHJcblx0XHRdKSxcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHRwbHVnaW5zOiBbZHRzKCksIGxpYkluamVjdENzcygpXSxcclxuXHRidWlsZDoge1xyXG5cdFx0bGliOiB7XHJcblx0XHRcdGVudHJ5OiAnc3JjL2luZGV4LnRzJyxcclxuXHRcdFx0ZmlsZU5hbWU6ICdpbmRleCcsXHJcblx0XHRcdGZvcm1hdHM6IFsnZXMnXSxcclxuXHRcdH0sXHJcblx0XHRjb3B5UHVibGljRGlyOiB0cnVlLFxyXG5cdFx0cm9sbHVwT3B0aW9uczoge1xyXG5cdFx0XHRpbnB1dCxcclxuXHRcdFx0ZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QvanN4LXJ1bnRpbWUnLCAncmVhY3QtZG9tJywgXCJyZWFjdC1yb3V0ZXItZG9tXCJdLFxyXG5cdFx0XHRvdXRwdXQ6IHtcclxuXHRcdFx0XHRnbG9iYWxzOiB7XHJcblx0XHRcdFx0XHRyZWFjdDogJ3JlYWN0JyxcclxuXHRcdFx0XHRcdCdyZWFjdC1kb20nOiAncmVhY3QtZG9tJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXVtleHRuYW1lXScsXHJcblx0XHRcdFx0ZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdGFsaWFzOiB7XHJcblx0XHRcdCdAJzogcmVzb2x2ZSgnLi9zcmMnKSxcclxuXHRcdH0sXHJcblx0fSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVixTQUFTLG9CQUFvQjtBQUM3VyxPQUFPLFNBQVM7QUFDaEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxTQUFTLFVBQVUsZUFBZTtBQUMzQyxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLFlBQVk7QUFMZ00sSUFBTSwyQ0FBMkM7QUFPdFEsSUFBTSxRQUFRLE9BQU87QUFBQSxFQUNwQixLQUNFLEtBQUsscUJBQXFCO0FBQUEsSUFDMUIsUUFBUSxDQUFDLHdCQUF3QixlQUFlO0FBQUEsRUFDakQsQ0FBQyxFQUNBLElBQUksVUFBUTtBQUFBLElBQ1osU0FBUyxPQUFPLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxRQUFRLElBQUksRUFBRSxNQUFNLENBQUM7QUFBQSxJQUNqRSxjQUFjLElBQUksSUFBSSxNQUFNLHdDQUFlLENBQUM7QUFBQSxFQUM3QyxDQUFDO0FBQ0g7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztBQUFBLEVBQy9CLE9BQU87QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDZjtBQUFBLElBQ0EsZUFBZTtBQUFBLElBQ2YsZUFBZTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFVBQVUsQ0FBQyxTQUFTLHFCQUFxQixhQUFhLGtCQUFrQjtBQUFBLE1BQ3hFLFFBQVE7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNkO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNqQjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLLFFBQVEsT0FBTztBQUFBLElBQ3JCO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
