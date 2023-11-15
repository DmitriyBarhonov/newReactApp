// @ts-ignore
import React from 'react'

type Props = {
    text: string
    id: string
}


export const Post: React.FC<Props> = (props) => {
    console.log(props)
    return (    
        <>
        <div>
            <img alt='img' src='https://img.gazeta.ru/files3/949/12549949/kitty-pic905-895x505-61908.jpg' />
            <div >{props.text}</div>
        </div>

        <div>
            <span>Like</span>
            <span>Dislake</span>
        </div>
    </>
    )
}