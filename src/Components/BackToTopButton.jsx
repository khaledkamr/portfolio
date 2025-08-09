import { useEffect, useState } from "react";

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <button className="z-50 icon-glow fixed bottom-6 right-6 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white p-3 rounded-full transition-all duration-400 hover:scale-110"
                onClick={scrollToTop}>
                    <i className="fa-solid fa-angles-up"></i>
            </button>
        )
    )
}