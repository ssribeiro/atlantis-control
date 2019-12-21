import { IDmxColor, IDiscreteState } from "../";
import { Shape } from "svg.js";

export interface IPhysicalChannel {
  name: string;
  isDiscrete: boolean;
  controllabe: boolean;
  visible: boolean;
  ignoreFade: boolean;
  discreteStates: IDiscreteState[];
  naturalState: IDiscreteState;
  // continuum
  continuumResponseFunction?: "linear" | "log" | "exp";
  continuumResponseInverted?: boolean;
  continuumLogFactor?: number;
  continuumExpFactor?: number;
  // visualize
  drawVisualizer?: boolean;
  visualizerColor?: IDmxColor;
  visualizerOverlayWay?: "mix" | "draw-over" | "hide";
  visualizerOverlayPriority?: number;
  visualizerShape?: Shape;
  visualizerFunction?: any;
}
