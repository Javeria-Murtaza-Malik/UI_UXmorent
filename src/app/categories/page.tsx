'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='w-full flex'>
      <div className="first hidden sm:flex w-[20%]">
        <Image src={'/Images/Nav Bar Side.png'} alt='' width={360} height={1600}/>
      </div>
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <Image src={"/Images/Pick - Up.png"} alt="" width={582} height={132} className="w-[200px] md:w-[270px] lg:w-[582px]" />
          <Image src={"/Images/Switch.png"} alt="" width={60} height={60} className="w-[80px]" />
          <Image src={"/Images/Drop - Off.png"} alt="" width={582} height={132} className=' w-[200px] md:w-[270px] lg:w-[582px]' />
        </section>
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {[
              { title: 'Koenigsegg', image: '/Images/car.png', desc: 'Sport' },
              { title: 'Nissan GT - R', image: '/Images/car (1).png', desc: 'sport' },
              { title: 'Rolls-Royce', image: '/Images/Car (2).png', desc: 'Sport' },
              { title: 'All New Rush', image: '/Images/suv (2).png', desc: 'Suv' },
              { title: 'CR - V', image: '/Images/suv (4).png', desc: 'Suv' },
              { title: 'ALLNEW TERIOS', image: '/Images/suv.png', desc: 'SUV' },
              { title: 'MGZX Exclusive', image: '/Images/suv (5).png', desc: 'Hatchback' },
              { title: 'NEW MGZS', image: '/Images/suv (1).png', desc: 'SUV' },
              { title: 'MGZX Exclusive', image: '/Images/suv (5).png', desc: 'Hatchback' },

            ].map((car, index) => (
              <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.title} <Image src={"/Images/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="" width={220} height={68} />
                  <Image src={"/Images/Specification.png"} alt="" width={256} height={24} className='hidden md:flex' />
                  <Image src={"/Images/Specification (1).png"} alt="" width={256} height={24} className='md:hidden' />
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/details'}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className="sec grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {[
                { title: 'MG ZX Exclusive', image: '/Images/suv.png', desc: 'SUV' },
                { title: 'NEW MG ZS', image: '/Images/suv (4).png', desc: 'Sedan' },
                { title: 'New MG ZX Excite', image: '/Images/suv.png', desc: 'Sport' },
              ].map((car, index) => (
                <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                      {car.title} <Image src={"/Images/heart.png"} alt="" width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="" width={220} height={68} />
                    <Image src={"/Images/Specification.png"} alt="" width={256} height={24} className='hidden md:flex' />
                    <Image src={"/Images/Specification (1).png"} alt="" width={256} height={24} className='md:hidden' />
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
               
                    <Link href={'/details'}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
                   </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className="button w-full text-center">
          <button 
            onClick={toggleShowMore} 
            className="bg-[#7384b8] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}