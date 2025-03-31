declare module "vanta/dist/vanta.net.min" {
  import { Base } from "vanta/types/base";

  interface VantaNetOptions {
    el: HTMLElement;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
  }

  export default function NET(options: VantaNetOptions): Base;
}
