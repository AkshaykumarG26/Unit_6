
const Child = (props) => {
    const data = 100
    
    return (
        <div>
            
            {/* // This is for sending data from parent to child */}
            <h1>{props.count}</h1>

            {/* // same for calling function from parent to child */}
            <button onClick={() => props.callSum()}>Call Sum Functiom</button>
        <br /><br />
            {/* sending data from child to parent */}
            <button onClick={() => props.callIt(data)}>call Function</button>
        </div>
    )
}

export default Child