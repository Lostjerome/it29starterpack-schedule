import Container from "@/components/Container";
import ClassDateItem from "@/components/ClassDateItem";
import ClassMaterial from "@/components/ClassMaterial";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { dateFormat } from "@/utils/dateFormat";
import { ClassListItemProps } from "@/types/ClassListItem";

function Schedule({
    data,
    planet,
    mascot,
}: {
    data: ClassListItemProps[];
    planet: string;
    mascot: string;
}) {
    data = data.sort((a, b) => {
        return a.startTime.getTime() - b.startTime.getTime();
    });

    const groupByDateTime = data.reduce((acc, item) => {
        const key = item.startTime.toDateString();
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {} as { [key: string]: typeof data });

    const programming = data.filter((item) => {
        return item.subject === "Programming";
    });

    const webtech = data.filter((item) => {
        return item.subject === "Web Technology";
    });

    const database = data.filter((item) => {
        return item.subject === "Database";
    });

    const subjects = [
        { subjectName: "Programming", items: programming },
        { subjectName: "Web Technology", items: webtech },
        { subjectName: "Database", items: database },
    ];

    const [value] = useState(new Date());

    const [time, setTime] = useState(
        new Date().toLocaleTimeString("en-UK", dateFormat)
    );

    useEffect(() => {
        // Scroll to ref that has the current date
        const today = new Date().toDateString();
        const element = document.getElementById(today);
        // scroll to top with smooth transition
        window.scrollTo({ top: 0 });

        setTimeout(() => {
            element?.scrollIntoView({ behavior: "smooth" });
        }, 1000);

        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-UK", dateFormat));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={planet + "-bg"}>
            <div className="backdrop-blur-sm">
                <Container>
                    <div className="flex sm:space-x-3">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 120,
                            }}
                            className="w-2/3 hidden sm:block "
                        >
                            <ClassMaterial subjects={subjects} />
                        </motion.div>
                        <motion.div className="w-full flex flex-col space-y-6">
                            {Object.keys(groupByDateTime).map((key, index) => {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            type: "spring",
                                            stiffness: 120,
                                            delay: 0.15 * index + 0.1,
                                        }}
                                        key={index}
                                    >
                                        <ClassDateItem
                                            key={index}
                                            date={new Date(key)}
                                            item={groupByDateTime[key]}
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 120,
                                delay: 0.2,
                            }}
                            className="w-2/3 hidden lg:block"
                        >
                            <div className="flex flex-col space-y-3 sticky top-2">
                                <div className="bg-white p-6 rounded-xl">
                                    <div className="mb-5">
                                        <p className="font-bold">
                                            {new Date().toDateString()}
                                        </p>
                                        <p className="text-2xl ">{time}</p>
                                    </div>
                                    <Calendar
                                        className="w-full border-none"
                                        value={value}
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 120,
                                        delay: 0.3,
                                    }}
                                    className={`${planet} bg-white p-5 max-h-96 h-96 rounded-xl border border-gray-200 flex flex-col justify-center items-center`}
                                >
                                    <motion.img
                                        animate={{
                                            y: [0, 10, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                        src={mascot}
                                        alt=""
                                        className="w-2/3 pb-4"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Schedule;
