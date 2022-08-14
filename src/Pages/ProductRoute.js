import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const ProductRoute = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null)
    const { reviews, name, company, description, price, stars } = product || {}

    useEffect(() => {
        (
            async () => {
                const response = await fetch(`https://course-api.com/react-store-single-product?id=${id}`).then(res => res.json()).catch(err => console.log("have a some error", err));
                    
                setProduct(response)
            }
        )()
    }, [id]);

    return (
        <>
            {console.log(name)}

            <div>{name}</div>
        </>
    )
}

export default ProductRoute