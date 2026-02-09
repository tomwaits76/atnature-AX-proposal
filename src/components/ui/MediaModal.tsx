"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface MediaModalProps {
    isOpen: boolean;
    onClose: () => void;
    src: string;
    alt: string;
}

export default function MediaModal({ isOpen, onClose, src, alt }: MediaModalProps) {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative w-full h-auto max-h-[85vh] aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
