_Note: work in progress, not yet released_

# with-graph-data

An HoC, higher-order component, that handles the loading and error conditions for a GraphQL query HoC.

## Usage

```js
import { compose } from 'recompose';
import { graphql } from 'apollo-client';
import withGraphData from 'with-graph-data';

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
