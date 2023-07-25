import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import planets from "@/utils/planets";
import { useState } from "react";

export default function Home() {
    const [onHover, setOnHover] = useState(-1);
    return (
        <div className="catstronaut-bg">
            <div className="backdrop-blur-sm">
                <div className="min-h-screen h-full max-w-7xl m-auto flex flex-col items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-center text-4xl md:text-5xl font-bold m-8 mt-12"
                    >
                        Catstronaut, where do you want to go?
                    </motion.h1>
                    <div className="p-5 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-y-8 ">
                        {planets.map((planet, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 150,
                                        delay: 0.05 * index,
                                    },
                                }}
                                onHoverStart={() => setOnHover(index)}
                                onHoverEnd={() => setOnHover(-1)}
                            >
                                <NavLink to={`/${planet.name}`} key={index}>
                                    <div
                                        className={
                                            (onHover !== -1
                                                ? onHover === index
                                                    ? "scale-105 drop-shadow-xl"
                                                    : "scale-95 grayscale"
                                                : "") +
                                            (index === 5
                                                ? " hidden min-[500px]:flex xl:hidden catstronaut-card"
                                                : "") +
                                            ` ${planet.name}-card border border-gray-400 w-56 h-80 bg-white rounded-xl duration-200 flex flex-col justify-end items-center pb-12`
                                        }
                                    >
                                        <motion.img
                                            whileInView={
                                                onHover === index
                                                    ? {
                                                          y: [0, -10, 0],

                                                          transition: {
                                                              duration: 1.5,
                                                              repeat: Infinity,
                                                          },
                                                      }
                                                    : {}
                                            }
                                            src={planet.mascot}
                                            alt={planet.name}
                                            className="w-2/3 pb-8"
                                        />
                                        <p
                                            className={
                                                (onHover === index
                                                    ? "text-2xl"
                                                    : "text-xl") +
                                                " text-white font-bold duration-150"
                                            }
                                        >
                                            {planet.name
                                                .charAt(0)
                                                .toUpperCase() +
                                                planet.name.slice(1)}
                                        </p>
                                    </div>
                                </NavLink>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
