import { ClassListItemProps } from "@/types/ClassListItem";
import SlideIcon from "@/assets/googleslideicon.png";
import LinkIcon from "@/components/icons/linkIcon";
import { dateFormat } from "@/utils/dateFormat";

function ClassListItem({ item }: { item: ClassListItemProps }) {
    const now = new Date();
    const isNow = item.startTime < now && item.finishTime > now;
    return (
        <div
            className={
                (item.finishTime < now ? "opacity-50" : "opacity-100") +
                " bg-white p-4 py-6 rounded-xl"
            }
        >
            <div className="flex justify-between items-center gap-2">
                <p className="font-bold">{item.subject}</p>
                <div className="inline-flex items-center">
                    <p className="text-sm">
                        {isNow
                            ? "Now"
                            : item.startTime.toLocaleTimeString(
                                  "en-UK",
                                  dateFormat
                              )}
                    </p>
                    <p>&nbsp;-&nbsp;</p>
                    <p className="text-sm">
                        {item.finishTime.toLocaleTimeString(
                            "en-UK",
                            dateFormat
                        )}
                    </p>
                </div>
            </div>
            <p className="text-sm text-gray-500">{item.title}</p>
            {isNow ? (
                <div className="flex gap-2 mt-5">
                    {item.slide ? (
                        <a
                            href={item.slide}
                            target="_blank"
                            className="w-full inline-flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 duration-200 p-2 rounded-lg font-bold text-white text-center"
                        >
                            <img
                                src={SlideIcon}
                                alt="slide_icon"
                                className="w-3"
                            />
                            <span>Slide</span>
                        </a>
                    ) : null}
                    {item.resource ? (
                        <a
                            href={item.resource}
                            target="_blank"
                            className="w-full inline-flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 duration-200 p-2 rounded-lg font-bold text-white text-center"
                        >
                            <LinkIcon />
                            <span>Resource</span>
                        </a>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}

export default ClassListItem;
