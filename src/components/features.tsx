import {Navigation, Bell, Paintbrush, ArrowRight} from "lucide-react";
import Link from "next/link";

export const Features = () => {
    const features = [
        {
            icon: <Navigation className="w-8 h-8 text-primary" />,
            title: "Custom Navigation",
            description: "Customize your X navigation with a personalized layout and custom buttons.",
        },
        {
            icon: <Bell className="w-8 h-8 text-primary" />,
            title: "Notification Filters",
            description: "Filter notifications by selecting your favorite accounts.",
        },
        {
            icon: <Paintbrush className="w-8 h-8 text-primary" />,
            title: "UI and UX Fixes",
            description: "Enjoy an improved experience with enhanced UI and UX fixes.",
        },
    ];

    return (
        <section className="py-20 max-w-5xl mx-auto bg-white flex items-center justify-center" id="features">
            <div className="container px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
                <div className="mb-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card group p-6 bg-white border border-gray-200 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300"
                        >
                            <Link href="/features">
                                <div className="mb-4 text-primary">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link href="/features" className="ml-1 underline flex">View all <ArrowRight /></Link>
            </div>
        </section>
    );
};
