function Button(props){
 
    return (

        <>
        <p>text :{props.text}</p>
         <button onClick={()=>{alert ("hello")}}> Click me</button>
        </>
    )

}
export default Button;