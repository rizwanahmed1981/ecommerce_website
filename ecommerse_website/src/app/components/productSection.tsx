import React from 'react'
import SectionHeader from './sectionHeader'
import LiveDateTime from './liveDateTime'
import ProductsColllection from './producs-col'

export interface Product {
    name: string,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number
    }
}

interface ProductSectionProps {
    heading: string,
    subheading: string,
    showTimer: boolean,
    action: React.ReactNode,
    products: Product[],
    isCarousel: boolean,
    ctaText?: string
}

const ProductSection = ({
    subheading,
    heading,
    showTimer,
    action,
    products,
    isCarousel,
    ctaText
}: ProductSectionProps) => {
    return (
        <div className='flex flex-col justify-center'>
            { /* Header part */}
            <div className='flex items-end justify-between'>
                <div className='space-x-10 flex items-end '>
                    <SectionHeader heading={heading} subheading={subheading} />
                    {showTimer && <LiveDateTime />}
                </div>
                {action}
            </div>
            {/* products Part */}
            <div className="mt-10">
                <ProductsColllection products={products} isCarousel={isCarousel} />
            </div>
            {/* CTA*/}
            <button className='bg-brandcolor text-white w-fit rounded-none mx-auto mt-4'></button>



        </div>
    )
}

export default ProductSection