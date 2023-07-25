import Schedule from "@/components/Schedule";
import mascot from "@/assets/mascots/neptunclaw.png";
import data from "@/utils/neptunclaw";

export default function Neptunclaw() {
    return (
        <>
            <Schedule data={data} planet="neptunclaw" mascot={mascot} />
        </>
    );
}
