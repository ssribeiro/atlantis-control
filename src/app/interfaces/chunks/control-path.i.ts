import {
  IDmxDevice,
  IDmxValue,
  IMidiDevice,
  IMidiValue,
  IPhysicalChannel,
  IPhysicalChannelController
} from "../";

export interface IControlPath {
  midiDevice: IMidiDevice;
  midiChannel: IMidiValue;
  dmxDevice: IDmxDevice;
  dmxChannel: IDmxValue;
  physicalChannelController: IPhysicalChannelController;
  physicalChannel: IPhysicalChannel;
}
