"use client";

import { useTheme } from "@/contexts/useTheme";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SegmentedControl } from "@radix-ui/themes";

export function SwitchThemeComponent({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <SegmentedControl.Root
      className={className}
      value={theme}
      defaultValue={theme}
    >
      <SegmentedControl.Item value="light" onClick={toggleTheme}>
        <div style={{ alignItems: "center", display: "flex" }}>
          <SunIcon />
        </div>
      </SegmentedControl.Item>
      <SegmentedControl.Item value="dark" onClick={toggleTheme}>
        <div style={{ alignItems: "center", display: "flex" }}>
          <MoonIcon />
        </div>
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}
