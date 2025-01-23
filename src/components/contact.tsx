import { Mail, MessageCircle } from "lucide-react";

export const Contact = () => {
    return (
        <section className="py-20 bg-white mx-4" id="contact">
                <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
            <div className="max-w-4xl mx-auto">
                <p className="mb-2">If you have any questions or want to report a bug</p>
                <div className="flex flex-row items-center">
                    <a className="font-bold flex items-center mr-1" href="mailto:xpert-contact@proton.me">
                        <Mail className="w-8 h-8 text-primary mr-2"/>
                        <p className="text-gray-600">xpert-contact@proton.me</p>
                    </a>

                </div>
                <div className="flex flex-row items-center">
                    <a className="flex flex-row items-center font-bold mr-1" target="_blank" href="https://x.com/xdnibor">
                        <MessageCircle className="w-8 h-8 text-primary mr-2"/>
                        <p className="text-gray-600">DM or post @xdNiBoR</p>
                    </a>
                </div>
            </div>
        </section>
    );
};