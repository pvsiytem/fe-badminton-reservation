import ClientSide from "./ClientSide";
import { heading1, section2 } from "./ServerSide";

const Hero = () => {
    return (
        <>
            <ClientSide section2={section2} heading1={heading1} />
        </>
    );
};

export default Hero;