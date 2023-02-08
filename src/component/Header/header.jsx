import { NavLink } from "react-router-dom";
import header from './header.module.css';
import {  loginOutThunkCreator } from "../../redux/authReducer.ts"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"

export const Header = () => {

    const isAuth = useSelector((state)=>state.auth.isAuth)
    const login = useSelector((state)=>state.auth.login)
    const dispatch = useDispatch()

    const logonization = ()=>{ 
        dispatch(loginOutThunkCreator())
    }

    return (
        <header className={header.header}>
            <img alt='ujdyj' src='https://img.kvmeter.ru/upload/resize_cache/iblock/1f7/270_225_2/1f7948af9ba872b373e573c0a386abff.jpg' />
            <div className={header.login}>
                <div>
                    {isAuth 
                    ? <div>{login} <button onClick={logonization}>Log out</button> </div>
                    : <NavLink className={header.link} to={'login/'}>Login</NavLink>}

                </div>
            </div>
        </header>
    )
}


