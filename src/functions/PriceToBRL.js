export function PriceToBRL(product){
        return parseFloat(product.price).toFixed(2).replace(".",",");
}