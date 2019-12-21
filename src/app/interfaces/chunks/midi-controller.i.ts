import { IControlPath } from "../";

export interface IMidiController {
  name: string;
  controlPaths: IControlPath[];
}
