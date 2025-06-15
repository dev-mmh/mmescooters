import React, { useEffect, useState } from "react";
const NewsLayout = () => {
 
    
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Top Featured Section */}
            <div className="grid md:grid-cols-3 gap-4">
                {/* Main Featured News */}
                <div className="md:col-span-2 relative">
                    <img src="/images/rhodes-fire.jpg" alt="Rhodes Fire" className="w-full h-80 object-cover rounded-lg" />
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded">
                        <h2 className="text-2xl font-bold">Thousands flee hotels on Rhodes as fires spread</h2>
                        <p className="text-sm">Greece's deputy fire chief says the island's fires are the most difficult his service is now facing.</p>
                    </div>
                </div>

                {/* 4 Smaller Articles */}
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { title: "Polarised Spain eyes the hard-right ahead of vote", tag: "EUROPE", img: "/images/spain-election.jpg" },
                        { title: "Earth in uncharted waters as climate records tumble", tag: "SCIENCE & ENVIRONMENT", img: "/images/climate-records.jpg" },
                        { title: "Root strikes but Ashes hopes hang in the balance", tag: "CRICKET", img: "/images/ashes-cricket.jpg" },
                        { title: "Festival axed as 1975 singer attacks Malaysian LGBT laws", tag: "ASIA", img: "/images/1975-singer.jpg" },
                    ].map((item, i) => (
                        <div key={i} className="relative">
                            <img src={item.img} alt={item.title} className="w-full h-32 object-cover rounded-lg" />
                            <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white p-2 rounded">
                                <h3 className="text-sm font-semibold">{item.title}</h3>
                                <p className="text-xs">{item.tag}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* News Row */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold border-l-4 border-red-500 pl-2 mb-4">News</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        { img: "/images/bridge.jpg", alt: "Bridge" },
                        { img: "/images/fashion-guy.jpg", alt: "Fashion" },
                        { img: "/images/woman-drink.jpg", alt: "Woman with drink" },
                    ].map((item, i) => (
                        <img key={i} src={item.img} alt={item.alt} className="w-full h-64 object-cover rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsLayout;
