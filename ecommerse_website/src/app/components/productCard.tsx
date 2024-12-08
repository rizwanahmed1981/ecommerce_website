import React from 'react'
import { Product } from './productSection'
import { Card, CardContent } from '@/components/ui/card'

interface ProductCardProps {
    name: string,
    price: number,
    orignalPrice: number,
    discountedPrice?: number,
    rating: number,
    review: number,
    image: string,
    isNew: boolean
}


const ProductCard = ({ 
    name,
    price,
    orignalPrice,
    discountedPrice,
    rating,
    review,
    image,
    isNew 
}:ProductCardProps) => {
    return (
        <Card className='group relative overflow-hidden'>
            <CardContent className='p-0'>
                <div className='realative aspect-square'>
                    <img src={image} className='w-full h-full object-cover' />
                </div>
            </CardContent>

        </Card>
    )
}

export default ProductCard