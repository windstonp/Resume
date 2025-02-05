import { render, screen } from "@/utils/tests";
import "@testing-library/jest-dom";

import { Footer } from ".";

describe("<Footer />", () => {
  it("should render correctly", () => {
    render(<Footer />);

    expect(
      screen.getByRole("heading", { name: /Footer/i })
    ).toBeInTheDocument();
  });
});
