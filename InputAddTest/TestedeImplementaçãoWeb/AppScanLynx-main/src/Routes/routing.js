import {createContext, useState} from '@lynx-js/react'

export const RoutingContext = createContext();

export function RoutingProvider({children}) {
    const [route, setRoute] = useState({name: 'home', params: {}});

    return (
        <RoutingContext.Provider value={{route, setRoute}}>
            {children}
        </RoutingContext.Provider>
    );
}