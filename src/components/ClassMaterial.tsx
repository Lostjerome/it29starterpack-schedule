import { useState } from "react";
import ClassMaterialItem from "@/components/ClassMaterialItem";
import ArrowIcon from "@/components/icons/arrowIcon";
import { ClassListItemProps } from "@/types/ClassListItem";

function ClassMaterial({
    subjects,
}: {
    subjects: { subjectName: string; items: ClassListItemProps[] }[];
}) {
    const [active, setActive] = useState(0);
    return (
        <div className="bg-white p-5 rounded-xl sticky top-2">
            <p className="font-bold">Class materials</p>
            <div className="flex items-center justify-between mt-8 mb-4 ">
                <button
                    onClick={() => {
                        setActive(
                            active === 0 ? subjects.length - 1 : active - 1
                        );
                    }}
                    className="p-2 rounded-full hover:bg-gray-200 duration-150"
                >
                    <ArrowIcon />
                </button>
                <h1 className="text-center font-bold">
                    {subjects[active].subjectName}
                </h1>
                <button
                    onClick={() => {
                        setActive(
                            active === subjects.length - 1 ? 0 : active + 1
                        );
                    }}
                    className="p-2 rounded-full hover:bg-gray-200 duration-150"
                >
                    <ArrowIcon className="rotate-180" />
                </button>
            </div>
            <div className="flex flex-col space-y-2">
                {subjects[active].items.map((item, index) => {
                    return <ClassMaterialItem key={index} item={item} />;
                })}
            </div>
        </div>
    );
}

export default ClassMaterial;
