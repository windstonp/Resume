import React from 'react';
import { render } from '@testing-library/react'
import Button from '../../../atoms/button';
import Theme from '../../../global/styles/theme';

describe('Button test', ()=>{
  it('should have title of button', ()=>{
    const { container } = render(
      <Button
        title={'Button'}
      />
    )
    expect(container.props.children).toContain('Button');
  });

  it('should be an primary button', ()=>{
    const { container } = render(<Button isSecondary={false} />)
    
    expect(container.props.style[0].backgroundColor).toBe(Theme.colors.primary);
  })
});