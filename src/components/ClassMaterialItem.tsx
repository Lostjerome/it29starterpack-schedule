import { ClassMaterialItemProps } from "@/types/ClassMaterialItem";
import SlideIcon from "@/assets/googleslideicon.png";
import LinkIcon from "@/components/icons/linkIcon";

function ClassMaterialItem({ item }: { item: ClassMaterialItemProps }) {
    return (
        <div className="w-full bg-white hover:bg-gray-200 text-sm duration-150 p-2 rounded-xl flex justify-between  border box-border border-slate-300">
            <p>{item.title}</p>
            <div className="flex space-x-1 w-28 justify-end">
                {item.slide ? (
                    <a
                        href={item.slide}
                        target="_blank"
                        className="bg-yellow-400 hover:bg-yellow-500 duration-150 p-2 flex justify-center items-center rounded-lg"
                    >
                        <img src={SlideIcon} alt="slide_icon" className="w-4" />
                    </a>
                ) : null}

                {item.resource ? (
                    <a
                        href={item.resource}
                        target="_blank"
                        className="bg-blue-500 hover:bg-blue-600 duration-150 p-2 flex justify-center items-center rounded-lg text-white"
                    >
                        <LinkIcon />
                    </a>
                ) : null}
            </div>
        </div>
    );
}

export default ClassMaterialItem;
