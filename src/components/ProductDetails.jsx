import { useParams } from "react-router-dom"

function ProductDetails(){

    const {id} = useParams()
    console.log(id)

    return(
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default ProductDetails