import React from 'react'

const SectionHeader = ({ heading, subheading }: { heading: string, subheading: string }) => {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <div className='w-5 h-10 bg-brandcolor rounded'/>
                <h3 className='text-brandcolor text-lg font-semibold'>{subheading}</h3>
            </div>
            <h1 className='font-semibold text-4xl mt-2'>{heading}</h1>
        </div>
    )
}

export default SectionHeader