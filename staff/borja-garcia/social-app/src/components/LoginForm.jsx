import { IconEmail, IconLogin, IconPassword } from "./icons";
import classNames from "classnames";

function LoginForm({ className }) {
  return (
    <>
      <div className={classNames("bg-red-400 max-w-screen-sm", className)}>
        <form>
          <div>
            <IconLogin />
          </div>
          <h3>Bienvenido de vuelta</h3>
          <fieldset>
            <legend>Introduce tus datos de inicio de sesión</legend>
            <label className="input input-bordered flex items-center gap-2">
              <IconEmail />
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <IconPassword />
              <input type="password" className="grow" value="password" />
            </label>
          </fieldset>
          <div id="show-errors">
            <span></span>
          </div>
          <div>
            <button>Iniciar sesión</button>
          </div>
          <div>
            <button>¿Has olvidado la contraseña?</button>
            <button>Formulario de registro</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
