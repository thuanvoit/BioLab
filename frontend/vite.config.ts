import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import liveReload from "vite-plugin-live-reload";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), liveReload("./src/**/*")],
});
