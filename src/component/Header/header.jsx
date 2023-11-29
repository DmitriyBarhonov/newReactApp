import { NavLink } from "react-router-dom";
import header from "./header.module.css";
import { loginOutThunkCreator } from "../../redux/authReducer.ts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button} from 'antd';

export const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const login = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();

  const logonization = () => {
    dispatch(loginOutThunkCreator());
  };

  return (
    <header className={header.header}>
      <div className={header.login}>
        <div>
          {isAuth ? (
            <div>
              {login}{" "}
              <Button onClick={logonization} type="primary">
                Log out
              </Button>
            </div>
          ) : (
            <NavLink className={header.link} to={"login/"}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};
