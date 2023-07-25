import Schedule from "@/components/Schedule";
import mascot from "@/assets/mascots/catterra.png";
import data from "@/utils/catterra";

export default function Catterra() {
    return (
        <>
            <Schedule data={data} planet="catterra" mascot={mascot} />
        </>
    );
}
