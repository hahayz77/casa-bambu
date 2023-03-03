export function DiscountToBRL(product){
        return parseFloat(parseFloat(product.price).toFixed(2)*(1-(product.discount)/100)).toFixed(2).replace(".",",");
}