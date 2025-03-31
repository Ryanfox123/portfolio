declare module "vanta/dist/vanta.net.min" {
  import { Base } from "vanta/types/base";
  import * as THREE from "three";

  interface VantaNetOptions {
    el: HTMLElement;
    THREE?: typeof THREE;
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
