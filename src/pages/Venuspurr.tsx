import Schedule from "@/components/Schedule";
import mascot from "@/assets/mascots/venuspurr.png";
import data from "@/utils/venuspurr";

export default function Venuspurr() {
    return (
        <>
            <Schedule data={data} planet="venuspurr" mascot={mascot} />
        </>
    );
}
