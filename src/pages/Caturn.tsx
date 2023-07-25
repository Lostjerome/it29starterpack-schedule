import Schedule from "@/components/Schedule";
import mascot from "@/assets/mascots/caturn.png";
import data from "@/utils/caturn";

export default function Caturn() {
    return (
        <>
            <Schedule data={data} planet="caturn" mascot={mascot} />
        </>
    );
}
