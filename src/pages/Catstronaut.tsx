import mascot from "@/assets/mascots/catstronaut.png";
import { motion } from "framer-motion";

export default function Catstronaut() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <div className="catstronaut-bg">
            <div className="backdrop-blur-sm">
                <div className="min-h-screen flex flex-col justify-center items-center">
                    <a
                        href="https://www.youtube.com/watch?v=L3tsYC5OYhQ"
                        target="_blank"
                    >
                        <motion.img
                            animate={{
                                y: [0, -10, 0],
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity,
                                },
                            }}
                            whileHover={{
                                scale: [1, 1.05, 1],
                                transition: {
                                    duration: 0.6,
                                    repeat: Infinity,
                                },
                            }}
                            src={mascot}
                            alt="Catstronaut"
                            className="max-w-xl w-full p-5 m-auto"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
