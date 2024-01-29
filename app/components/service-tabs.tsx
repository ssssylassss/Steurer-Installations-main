"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tabName) => {
        event.preventDefault();
        setActiveTab(tabName);
    };

    const renderServiceContent = () => {
        switch (activeTab) {
            case 'hardwoodInstallation':
                return (
                    <div>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            className=""
                            width={246}
                            height={110}
                            priority
                        />
                        <h3>Transform Your Space with Timeless Elegance</h3>
                        <p>Elevate your home with the unparalleled beauty of hardwood floors. Our expert installation ensures a perfect blend of craftsmanship and durability. Experience the natural warmth and charm of hardwood that lasts for generations.</p>
                    </div>
                );
            case 'hardwoodRefinishing':
                return (
                    <div>
                        <h3>Revitalize Your Living Space</h3>
                        <p>Breathe new life into your home by refinishing your hardwood floors. Our refinishing services extend beyond the surface, turning worn-out wood into a glossy masterpiece. Renew the character of your space with expert refinishing for stairs, landings, railings, and more.</p>
                    </div>
                );
            case 'laminateVinylPlank':
                return (
                    <div>
                        <h3>Quick, Durable, Affordable Flooring Solutions</h3>
                        <p>Embrace the modern versatility of laminate and vinyl plank flooring. With swift installation, remarkable durability, and cost-effectiveness, these flooring options provide a contemporary edge to your space. Experience the perfect blend of style and practicality.</p>
                    </div>
                );
            case 'carpet':
                return (
                    <div>
                        <h3>Luxurious Comfort</h3>
                        <p>Indulge in the plush comfort of carpet flooring. Our selection offers a diverse range of styles and textures, providing a cozy and luxurious feel to your home. Discover the perfect blend of functionality and aesthetics with our high-quality carpeting solutions.</p>
                    </div>
                );
            case 'tile':
                return (
                    <div>
                        <h3>Luxurious Comfort</h3>
                        <p>Indulge in the plush comfort of carpet flooring. Our selection offers a diverse range of styles and textures, providing a cozy and luxurious feel to your home. Discover the perfect blend of functionality and aesthetics with our high-quality carpeting solutions.</p>
                    </div>
                );
            default:
                return null;
        }
    };


    return (
        <div className="text-center mb-5 text-3xl font-semibold items-center">
            <h2 className="m-5">Services We Offer...</h2>
            <div className="flex justify-center items-center lg:w-full lg:mb-0 space-x-4">
                {serviceTabs.map((tab) => (
                    <a
                        key={tab.id}
                        href="#"
                        className={`flex flex-col items-center justify-center w-40 h-40 rounded-lg border border-transparent px-5 py-4 transition-colors bg-gray-200 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${activeTab === tab.id ? 'bg-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>{tab.title}</h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{tab.description}</p>
                    </a>
                ))}
            </div>

            <div className="mt-8">{renderServiceContent()}</div>
        </div>
    );
};

const serviceTabs = [
    {
        id: 'hardwoodInstallation',
        title: 'Hardwood Floor Installation',
        description: '',
    },
    {
        id: 'hardwoodRefinishing',
        title: 'Hardwood Refinishing',
        description: '',
    },
    {
        id: 'laminateVinylPlank',
        title: 'Laminate and Vinyl Plank',
        description: '',
    },
    {
        id: 'carpet',
        title: 'Carpet',
        description: '',
    },
    {
        id: 'tile',
        title: 'Tile',
        description: '',
    },
];

export default ServiceTabs;
