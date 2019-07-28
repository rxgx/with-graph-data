import { branch, compose } from "recompose";

function isDataLoading(props) {
  return Boolean(props.data.isLoading);
}

interface Props {}

export default function withGraphData(LoadingComponent) {
  return branch(
    isDataLoading,
    component => component,
    renderComponent(LoadingComponent)
  )(Component);
}
