import React from "react";
import {Header} from "@/components/header";

export const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white">
            <Header />
            <section className="min-h-[60vh] flex items-center justify-center">
                <div className="container px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                        𝕏pert
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
                        Enhance your 𝕏 experience with our powerful Chrome extension.
                    </p>
                    <a target="_blank" href="https://chromewebstore.google.com/detail/%F0%9D%95%8Fpert/plakjgodbjmllkmoiehefjdmhfnkeffb">
                        <button
                            className="px-8 py-2.5 text-lg rounded-lg transition-all duration-300 bg-primary text-white hover:bg-primary/90"
                        >
                            Add to Chrome
                        </button>
                    </a>

                </div>
            </section>
        </div>
    );
};