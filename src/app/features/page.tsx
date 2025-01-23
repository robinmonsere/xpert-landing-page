"use client";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Features() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (src: string) => {
        setSelectedImage(src); // Set the selected image source
    };

    const closeModal = () => {
        setSelectedImage(null); // Close the modal
    };

    // Custom feature array
    const features = [
        {
            title: "Custom navigation menu",
            description: "Fully customize the navigation menu to suit your preferences. Add hidden options like Statistics or Scheduled Posts, or remove items such as the 'More' button. This functionality also works for mobile.",
            image: "/images/custom_nav.png",
        },
        {
            title: "Feature 2",
            description: "The second feature is even better. Check it out!",
            image: "https://placehold.co/600x400?text=Feature+2",
        },
        {
            title: "Feature 3",
            description: "Don't miss this feature. It's a game changer.",
            image: "https://placehold.co/600x400?text=Feature+3",
        },
        {
            title: "Feature 4",
            description: "The final feature will blow your mind.",
            image: "https://placehold.co/600x400",
        },
    ];

    return (
        <div className={"min-h-screen bg-gradient-to-b from-blue-50 to-white"}>
            <header className="max-w-5xl mx-auto flex items-center justify-between px-4 py-6">
                <Link className="flex items-center" href="/">
                    <ArrowLeft className="w-8 h-8" />
                </Link>
                <h1 className="text-4xl md:text-4xl font-bold text-gray-900 animate-fade-in">
                    𝕏pert Features
                </h1>
                <div className="w-8 h-8"></div>
            </header>

            <section className="max-w-5xl mx-auto py-12 space-y-12 px-4">
                {features.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-start gap-6"
                            >
                                {/* Large image with click functionality */}
                                <img
                                    className="w-full max-h-80 md:w-1/2 rounded-lg object-cover shadow-md cursor-pointer hover:opacity-90"
                                    src={feature.image}
                                    alt={feature.title}
                                    onClick={() => handleImageClick(feature.image)}
                                />

                                {/* Text content */}
                                <div className="flex flex-col justify-center text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                        {feature.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
            </section>

            {/* Popup Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={closeModal} // Close modal when clicking outside the image
                >
                    <img
                        src={selectedImage}
                        alt="Enlarged Feature"
                        className="rounded-lg max-w-full max-h-full"
                        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking the image
                    />
                </div>
            )}
        </div>
    );
}