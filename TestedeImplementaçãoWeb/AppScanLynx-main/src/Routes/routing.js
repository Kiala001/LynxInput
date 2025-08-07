import {createContext, useState} from '@lynx-js/react'

export const RoutingContext = createContext();

export function RoutingProvider({children}) {
    const [route, setRoute] = useState('home');

    return (
        <RoutingContext.Provider value={{route, setRoute}}>
            {children}
        </RoutingContext.Provider>
    );
}