import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Home', module)
  .add('one', () => <div onClick={linkTo('two')}>two</div>)
  .add('two', () => <div onClick={linkTo('one')}>two</div>);
