import React, { Component } from 'react';
import { Stylesheet } from 'react-native';

import { Button, Block, Text } from '../components';

export default class Welome extends Component {
  render() {
    return (
      <Block center middle>
        <Block center middle flex={0.3}>
          <Text h1 center bold>
            Your Home.
          </Text>
          <Text h1 center bold>
            Greener.
          </Text>
          <Text>Welcome</Text>
        </Block>
        <Text>Welcome</Text>
      </Block>
    );
  }
}

const styles = Stylesheet.create({});
