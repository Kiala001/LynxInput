import 'react';


interface CustomEvent<T = any> {
  detail: T;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'page': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'view': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        bindtap?: (event?: any) => void;
      }, HTMLElement>;
      'text': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        bindtap?: (event?: any) => void;
      }, HTMLElement>;
      'scroll-view': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'image': React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement> & {
        bindtap?: (event?: any) => void;
      }, HTMLImageElement>;
      'camera': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        mode?: 'scan' | string;
        onscancode?: (event: CustomEvent<{ result: string }>) => void;
      }, HTMLElement>;
      'input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        bindinput?: (e: { detail: { value: string } }) => void;
        type?: string;
        value?: string;
        placeholder?: string;
        className?: string; 
      }, HTMLElement>;
    }
  }
}