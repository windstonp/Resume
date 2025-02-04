import { ThemeProvider } from "@/contexts/useTheme";
import { RenderOptions, render } from "@testing-library/react";

function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

const customRender = (
  ui: React.ReactElement,
  { ...renderOptions }: Omit<RenderOptions, "wrapper"> = {}
) => render(ui, { wrapper: Provider, ...renderOptions });

export * from "@testing-library/react";
export { customRender as render };
