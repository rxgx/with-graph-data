import { branch, compose, renderComponent } from "recompose";

interface Props {
  data: {
    loading?: boolean;
    error?: any;
  };
}

export function hasDataError(props: Props): boolean {
  return Boolean(props.data.error);
}

export function isDataLoading(props: Props): boolean {
  return Boolean(props.data.loading);
}

export function withGraphLoading(
  LoadingComponent: React.ComponentClass | React.FunctionComponent | string
) {
  return branch(isDataLoading, renderComponent(LoadingComponent));
}

export function withGraphError(
  ErrorComponent: React.ComponentClass | React.FunctionComponent | string
) {
  return branch(hasDataError, renderComponent(ErrorComponent));
}

export default function withGraphData(
  LoadingComponent: any,
  ErrorComponent: any
) {
  return compose(
    withGraphLoading(LoadingComponent),
    withGraphError(ErrorComponent)
  );
}
