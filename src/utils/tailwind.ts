import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const twConfig = resolveConfig(tailwindConfig);
const mdBreakpoint = Number.parseInt(twConfig.theme.screens.md);
const lgBreakpoint = Number.parseInt(twConfig.theme.screens.lg);
const smBreakpoint = Number.parseInt(twConfig.theme.screens.sm);

export { mdBreakpoint, lgBreakpoint, smBreakpoint };
