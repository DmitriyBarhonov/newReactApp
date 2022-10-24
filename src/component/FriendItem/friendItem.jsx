import cle from './friendItem.module.css';

 const Friend = (props) =>{
    return(
        <div>
            <div className={cle.item}>
                    <img src={props.img} />
                    {props.name}
                </div>
        </div>
    )
}

export default Friend;