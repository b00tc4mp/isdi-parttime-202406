import { Navigate } from "react-router-dom";

export function Permissions({ children, isLogged, redirectPath }) {
  if (!isLogged) return <Navigate to={redirectPath} replace />;

  return <>{children}</>;
}

const withPermissions = (Component) => {
  return (props) => {
    const { isLogged, redirectPath, ...restProps } = props;
    return (
      <>
        <Permissions isLogged={isLogged} redirectPath={redirectPath}>
          <Component {...restProps} />
        </Permissions>
      </>
    );
  };
};

export default withPermissions;
