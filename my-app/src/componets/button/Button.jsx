const Button = (props) => {
    return(
        <div>
            <button type={props.type}>{props.btnName}</button>


            <input type={props.type} name={props.name} />

            

        
        </div>
    )
}



export default Button;