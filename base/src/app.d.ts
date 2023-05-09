declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare type Recordable<T = any> = Record<string, T>;

declare type TargetContext = '_self' | '_blank';

export declare type InternalNamePath = (string | number)[];
export declare type NamePath = string | number | InternalNamePath;

declare type EmitType = (event: string, ...args: any[]) => void;

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

declare global {
  interface Window {
    qiankunStarted: boolean;
  }
}
