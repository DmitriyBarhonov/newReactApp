import { NavLink } from "react-router-dom";
import header from './header.module.css';

export const Header = (props) => {
    return (
        <header className={header.header}>
            <img alt='ujdyj' src='https://img.kvmeter.ru/upload/resize_cache/iblock/1f7/270_225_2/1f7948af9ba872b373e573c0a386abff.jpg' />
            <div className={header.login}>
                <div>
                    {props.isAuth 
                    ? <div>{props.login} <button onClick={props.loginOutThunkCreator}>Log out</button> </div>
                    : <NavLink className={header.link} to={'login/'}>Login</NavLink>}

                </div>
            </div>
        </header>
    )
}


