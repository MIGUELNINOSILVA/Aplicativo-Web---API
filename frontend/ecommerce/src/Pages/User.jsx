import { Button, FormHelperText, Input, InputLabel } from "@mui/material";
import "./../styles/User.css";
import FormControl from "@mui/material/FormControl";

export const User = () => {
  return (
    <div className="container main-content">
      <div className="user-main-card">
        <div className="user-logo d-flex justify-content-center ">
          <img src="src/assets/logo.png" alt="" />
        </div>
        <div className="user-form d-flex justify-content-center p-5">
          <form className="container">
            <div className="form-group col-auto">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Ingrese Nombre"
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                className="form-control"
                placeholder="Ingrese Apellido"
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Ingrese Apellido"
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Ingrese Contraseña"
              />
            </div>
            <div className="buttons-effects d-flex gap-2 justify-content-end mt-3">
            <Button variant="contained" color="primary" type="submit">
              Editar
            </Button>
            <Button variant="contained" color="error">
              Log out
            </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
