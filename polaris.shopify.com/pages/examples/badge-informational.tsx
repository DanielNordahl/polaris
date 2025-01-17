import {Badge, Card} from '@shopify/polaris';
import React from 'react';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function BadgeExample() {
  return (
    <Card>
      <Badge status="info">Draft</Badge>
    </Card>
  );
}

export default withPolarisExample(BadgeExample);
