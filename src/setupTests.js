// src/setupTests.js
import React from 'react';

jest.mock('react-c3js', () => {
  return {
    __esModule: true,
    default: (props) => <div data-testid="mock-c3-chart" />, // simple placeholder div
  };
});

