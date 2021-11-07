import { useState } from "react"

const Item = () => {
    const [num, setNum] = useState(0)

    const handleAddItem = () => {
        setNum(num + 1)
    }
    const handleSubtractItem = () => {
        if(num <= 0){
            setNum(0)
        }else{
           setNum(num - 1)
        }
    }

    return (
        <div className="itemContainer">
            <div className="numOfItem">
                <button className="minus" onClick={handleSubtractItem}>-</button>
                <p >{ num }</p>
                <button className="plus" onClick={handleAddItem}>+</button>
            </div>
            <button className="reset" onClick={() => setNum(0)}></button>
        </div>
    )
}

export default Item;