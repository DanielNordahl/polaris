import {Card, Text, VerticalStack} from '@shopify/polaris';
import React from 'react';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function CardExample() {
  return (
    <VerticalStack gap="400">
      <Card>
        <Placeholder label="Content inside a card" />
      </Card>
      <Card padding="400">
        <Placeholder label="Content inside a card" />
      </Card>
      <Card padding="200">
        <Placeholder label="Content inside a card" />
      </Card>
      <Card padding="0">
        <Placeholder label="Content inside a card" />
      </Card>
    </VerticalStack>
  );
}

const Placeholder = ({label = '', height = 'auto', width = 'auto'}) => {
  return (
    <div
      style={{
        background: 'var(--p-color-text-info)',
        height: height,
        width: width,
      }}
    >
      <div
        style={{
          color: 'var(--p-color-text-on-color)',
        }}
      >
        <Text as="h2" variant="bodyMd">
          {label}
        </Text>
      </div>
    </div>
  );
};

export default withPolarisExample(CardExample);
