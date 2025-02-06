import { render, screen } from '@/utils/tests';
import "@testing-library/jest-dom";

import { SwitchThemeComponent } from '.';

describe('<SwitchThemeComponent />', () => {
  it('should render correctly', () => {
    render(<SwitchThemeComponent />);

    expect(screen.getByRole('heading', { name: /SwitchThemeComponent/i })).toBeInTheDocument();
  });
});
