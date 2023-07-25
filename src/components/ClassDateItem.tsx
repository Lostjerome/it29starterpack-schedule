import { ClassDateItemProps } from "@/types/ClassDateItem";
import ClassListItem from "@/components/ClassListItem";
import { motion } from "framer-motion";

function ClassDateItem({ date, item }: ClassDateItemProps) {
    return (
        <div id={date.toDateString()} className="flex flex-col gap-y-3">
            <p className="text-sm text-white">{date.toDateString()}</p>
            {item.map((item, index) => {
                return (
                    <motion.div whileHover={{ y: -5 }} key={index}>
                        <ClassListItem key={index} item={item} />
                    </motion.div>
                );
            })}
        </div>
    );
}

export default ClassDateItem;
