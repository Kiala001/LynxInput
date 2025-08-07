import { useContext } from "@lynx-js/react";
import { RoutingContext } from "./routing";

export function useNavigate() {
    const { setRoute } = useContext(RoutingContext);

    return (to) => {
        setRoute(to);
    };
}