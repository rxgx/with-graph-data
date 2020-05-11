### _Note: `recompose` is deprecated, hard to test, and not good with Typescript_

**USE HOOKS INSTEAD!** They are easier and essentially vanilla functions. For example:

```jsx
function ProductsPreloader(props) {
  const { query, variables } = props

  const { loading, error, data } = useQuery(query, { variables })

  if (loading) return <LoadingComponent />
  if (error || !data) return <ErrorComponent error={error || 'Failed to load products'} />
  return <ProductsDisplay products={data.products} />
}
```

---

# with-graph-data

An HoC, higher-order component, that handles the loading and error conditions for a GraphQL query HoC.

## Installation

Install the module:

```
npm install @rxgx/with-graph-data
```

## Usage

```js
import { compose } from 'recompose';
import { graphql } from 'apollo-client';
import withGraphData from '@rxgx/with-graph-data';

function ErrorComponent() {
  return <p>Error happened</p>;
}

function LoadingComponent() {
  return <p>Now loading...</p>;
}

export default compose(
  graphql(query),
  withGraphData(LoadingComponent, ErrorComponent)
};
```

The function `withGraphData` takes two parameters:

- `LoadingComponent`

  A React component that will display when `props.data.loading` is `true`.

- `ErrorComponent`

  A React component that will display when `props.data.error` exists. The component will receive the `props.data.error` directly passed from Apollo client.
