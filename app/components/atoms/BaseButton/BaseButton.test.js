import React from 'react';
import {render} from 'test-utils';
import BaseButton from './';
import theme from 'theme';

function renderButtonWithVariant(variant) {
  const {getByText} = render(
    <BaseButton variant={variant}>Click me</BaseButton>,
  );
  const button = getByText(/click me/i);
  return button;
}

test('renders a BaseButton', () => {
  const {getByText} = render(<BaseButton>Click me</BaseButton>);
  const button = getByText(/click me/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle(`
  background-color: ${theme.button.bgColor.default}; 
  color: ${theme.button.color.default};
  border-color: ${theme.button.borderColor.default};
  `);
});

test('renders a BaseButton with primary variant', () => {
  const button = renderButtonWithVariant('primary');
  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle(`
    background-color: ${theme.button.bgColor.primary}; 
    color: ${theme.button.color.primary};
    border-color: ${theme.button.borderColor.primary};
    `);
});

test('renders a BaseButton with secondary variant', () => {
  const button = renderButtonWithVariant('secondary');
  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle(`
    background-color: ${theme.button.bgColor.secondary}; 
    color: ${theme.button.color.secondary};
    border-color: ${theme.button.borderColor.secondary};
    `);
});

test('renders a BaseButton with accent variant', () => {
  const button = renderButtonWithVariant('accent');
  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle(`
    background-color: ${theme.button.bgColor.accent}; 
    color: ${theme.button.color.accent};
    border-color: ${theme.button.borderColor.accent};
    `);
});
