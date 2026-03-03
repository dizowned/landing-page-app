export interface Devices {
  device_groups: DeviceGroup[];
}

export interface DeviceGroup {
  name: string;
  type: string;
  devices: Device[];
}

export interface Device {
  name: string;
  description: string;
  url: string;
  status: string;
}
