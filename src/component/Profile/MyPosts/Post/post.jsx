import post from './post.module.css'

export const Post = (props) => {
    return (
        <>
            <div className={post.post_item}>
                <img src='https://img.gazeta.ru/files3/949/12549949/kitty-pic905-895x505-61908.jpg' />
                <div className={post.item}>{props.text}</div>
            </div>

            <div>
                <span>Like</span>
                <span>Dislake</span>
            </div>
        </>
    )
}