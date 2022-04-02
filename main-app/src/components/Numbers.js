import Number from "./Number";

let i =0; 

function Numbers(props){
    i = 0
    return(
    <>
        {
            props.array.map((a) => ( 
                <Number key = {a} num={a} rowID={props.rowID} arrayID={props.arrayID} id={++i} /> 
            ))
        }
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
    )
}

export default Numbers;