import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Home', module)
  .add('one', () => <div onClick={linkTo('Home', 'two')}>one</div>)
  .add('two', () => <div onClick={linkTo('Home', 'one')}>two</div>);
