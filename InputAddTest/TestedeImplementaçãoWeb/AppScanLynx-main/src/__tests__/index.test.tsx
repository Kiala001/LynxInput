// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
import '@testing-library/jest-dom'
import { expect, test, vi } from 'vitest'
import { render, getQueriesForElement } from '@lynx-js/react/testing-library'

import { App } from '../Screens/App.js'

test('renders App component', () => {
  const { container } = render(<App />)
  const queries = getQueriesForElement(container)

  expect(queries.getByText('APP-SCAN')).toBeInTheDocument()
  expect(queries.getByText('Productos')).toBeInTheDocument()
  expect(queries.getByText('Arroz Carmita')).toBeInTheDocument()
  expect(queries.getByText('Feijão Preto')).toBeInTheDocument()
  expect(queries.getByText('Macarrão')).toBeInTheDocument()
})
