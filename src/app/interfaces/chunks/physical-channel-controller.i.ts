import { IDmxColor, IDiscreteState, } from "../";
import { Shape } from 'svg.js'

export interface IPhysicalChannelController {
  name: string;
  isDiscrete: boolean;
  discreteStates?: IDiscreteState[];
  naturalState: IDiscreteState;
  whenOffline: 'natural-state'|'last-state';
  // continuum
  continuumResponseFunction?: "linear" | "log" | "exp";
  continuumResponseInverted?: boolean;
  continuumLogFactor?: number;
  continuumExpFactor?: number;
  // visualize
  drawVisualizer?: boolean;
  visualizerColor?: IDmxColor;
  visualizerOverlayWay?: 'mix'|'draw-over'|'hide';
  visualizerOverlayPriority?: number;
  visualizerShape?: Shape;
  visualizerFunction?: any;
}
