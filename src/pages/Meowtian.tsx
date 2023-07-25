import Schedule from "@/components/Schedule";
import mascot from "@/assets/mascots/meowtian.png";
import data from "@/utils/meowtian";

export default function Meowtian() {
    return (
        <>
            <Schedule data={data} planet="meowtian" mascot={mascot} />
        </>
    );
}
