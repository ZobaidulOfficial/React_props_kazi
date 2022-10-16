const variant = {
    primary: {
        backgroundColor: '#000',
        color:'#fff'
    },
    sucess: {
        backgroundColor: '#405',
        color: '#ddd'
    },
    error: {
        backgroundColor: '#B73E3E',
        color: '#ddd'
    },
    warning: {
        backgroundColor: '#FFFF00',
        color: '#ddd'
    },
    info: {
        backgroundColor: '#FF731D',
        color: '#ddd'
    }

}


const sizes = {
    small: {
        padding: '0.5rem 1rem',
        fontSize: '10px',

    },
    medim: {
        padding: '1rem 2rem',
        fontSize: '20px'
    },
    leag: {
        padding: '2rem 3rem',
        fontSize: '30px'
    }
}





const ButtonValidator = (props) => {

    const userVariant = variant[props.variant];
    const size = sizes[props.sizes]


 
    return(
        <div>

            <button style={{
            padding: '0.9rem',
            fontSize: '1rem', 
            ...userVariant,
            ...size

            }}>{props.text}</button>

            

        </div>
    )
}


export default ButtonValidator;