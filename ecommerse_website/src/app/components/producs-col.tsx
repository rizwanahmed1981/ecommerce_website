import React from 'react'
import { Product } from './productSection'
import ProductCard from './productCard'

const ProductsColllection = ({ products, isCarousel }: {
    products: Product[],
    isCarousel: boolean
}) => {
    if(isCarousel){
        return <div>carousel</div>
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-4'>
            {products.map(
                (product, index)=>(
                    <ProductCard
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            discountedPrice={34}
                            isNew
                            orignalPrice={product.price}
                            rating={product.rating.rate}
                            review={product.rating.count}
                    // product ={product}
                    />

                )
            )}

        </div>
    )
}

export default ProductsColllection