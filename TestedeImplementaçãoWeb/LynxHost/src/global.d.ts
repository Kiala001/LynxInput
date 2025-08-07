import 'react';
import type React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
          'lynx-view': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
           url: string ;
           style?: React.CSSProperties;
        };
    }
    }
}
export {};