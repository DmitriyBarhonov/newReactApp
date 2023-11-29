// @ts-ignore
import React from 'react'
import s from './post.module.css'

type Props = {
    text: string
    id: string
}


export const Post: React.FC<Props> = (props) => {
    return (    
        <>
        <div>
            <img className={s.postPhoto} alt='img' src='https://img.gazeta.ru/files3/949/12549949/kitty-pic905-895x505-61908.jpg' />
            <div >{props.text}</div>
        </div>
    </>
    )
}