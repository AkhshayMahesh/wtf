import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
	resolve: {
		alias: {
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@components": path.resolve(__dirname, "./src/components"),
		},
	},
});
