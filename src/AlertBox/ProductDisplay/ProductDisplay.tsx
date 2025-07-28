import type {ProductDisplayProps} from "../../types";

export default function ProductDisplayprops(props: ProductDisplayProps){
    return (
        <div className="Product">
            <p>Product</p>
            <p>Product:{props.product.name}</p>
            <p>Description:{props.showDescription}</p>
            <p>Stock Status:{props.showStockStatus}</p>
            <button onClick={props.onAddToCart}>Add To Cart</button>
            {props.children}
        </div>
        
    )

}