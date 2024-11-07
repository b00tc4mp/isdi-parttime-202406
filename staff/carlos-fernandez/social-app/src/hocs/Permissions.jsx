import { Navigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";

export function Permissions({ children, role: _role, redirectPath }) {
  const { role } = useRole();

  if (!(_role === role)) return <Navigate to={redirectPath} replace />;

  return <>{children}</>;
}

const withPermissions = (Component) => {
  return (props) => {
    const { role, redirectPath, ...restProps } = props;
    return (
      <>
        <Permissions role={role} redirectPath={redirectPath}>
          <Component {...restProps} />
        </Permissions>
      </>
    );
  };
};

export default withPermissions;
