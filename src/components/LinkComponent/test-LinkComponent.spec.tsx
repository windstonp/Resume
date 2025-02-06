import { render, screen } from "@/utils/tests";
import "@testing-library/jest-dom";

import { LinkComponent } from ".";

describe("<LinkComponent />", () => {
  it("should render correctly", () => {
    render(<LinkComponent href="*">Teste</LinkComponent>);

    expect(
      screen.getByRole("heading", { name: /LinkComponent/i })
    ).toBeInTheDocument();
  });
});
