import { branch, renderComponent } from "recompose";

interface Props {
  data: {
    loading: boolean;
    items: Array<any>;
    error: any;
  };
}

function isDataLoading(props: Props): boolean {
  return Boolean(props.data.loading);
}

export default function withGraphData(
  LoadingComponent: React.ComponentClass | React.FunctionComponent | string
) {
  return branch(
    isDataLoading,
    (Component: any) => Component,
    renderComponent(LoadingComponent)
  );
}
