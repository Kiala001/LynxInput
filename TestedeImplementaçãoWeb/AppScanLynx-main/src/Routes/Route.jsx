import { useContext } from "@lynx-js/react";
import { RoutingContext } from "./routing";

export function Route({ name, children }) {
    const { route } = useContext(RoutingContext);
    return route === name ? children : null;
}