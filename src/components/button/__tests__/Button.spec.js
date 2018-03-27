import * as React from 'react';
import Button from '../Button';
import './Button.spec.styl';

const ButtonSpec = () => (
  <div>
    <Button>Test button</Button>
    <Button loading>Loading button</Button>
    <Button disabled>Disabled button</Button>
    <Button className="custom_button">Custom button</Button>
  </div>
);

export default ButtonSpec;
