import Link from 'next/link';
import React from 'react';
import { Input } from "@/components/ui/input"
import { Heart, Menu, Search, ShoppingCart } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const NavBar = () => {
    return (
        <nav className='w-full border-b-2 border-gray-400 px-4'>
            <div className=" max-w-7xl mx-auto flex items-center justify-between">

                <h1 className="font-bold text-3xl">Exclusive</h1>
                <div className='hidden md:flex gap-4'>
                    <Link href='#' className='font-normal text-[16px]'>Home</Link>
                    <Link href='#' className='font-normal text-[16px]'>Contact</Link>
                    <Link href='#' className='font-normal text-[16px]'>About</Link>
                    <Link href='#' className='font-normal text-[16px]'>sign Up</Link>
                </div>
                <div className='hidden md:flex gap-4 py-2'>
                    <div className="relative">
                        <Input placeholder='what are you looking for?' className='bg-[#F5F5F5] rounded w-60' />
                        <Search className='absolute right-2 top-2' />
                    </div>
                    <Button variant={"outline"} size={"icon"} className='rounded-full'>
                        <Heart />
                    </Button>
                    <Button variant={"outline"} size={"icon"} className='rounded-full'>
                        <ShoppingCart />
                    </Button>
                </div>
                <div className="md:hidden">
                <Sheet >
                    <SheetTrigger>
                        <Button variant={"outline"} size={"icon"} className='rounded-full'>
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                Exclusive
                            </SheetTitle>

                        </SheetHeader>
                        <div className='flex flex-col gap-6 mt-6 '>
                            <Link href='#' className='font-normal text-[16px]'>Home</Link>
                            <Link href='#' className='font-normal text-[16px]'>Contact</Link>
                            <Link href='#' className='font-normal text-[16px]'>About</Link>
                            <Link href='#' className='font-normal text-[16px]'>sign Up</Link>
                        </div>
                        <div className="mt-4 mb-4">
                            <div className="relative">
                                <Input placeholder='Search Products' className='bg-[#F5F5F5] rounded' />
                                <Search className='absolute right-2 top-2' />
                            </div>
                            <div className="mt-6 flex gap-4">
                            <Button variant={"outline"} size={"icon"} className='rounded-full'>
                                <Heart />
                            </Button>
                            <Button variant={"outline"} size={"icon"} className='rounded-full'>
                                <ShoppingCart />
                            </Button>
                            </div>
                        </div>
                    </SheetContent>

                </Sheet>
                </div>
            </div>

        </nav>
    )
}

export default NavBar