import { BleError, BleManager, Characteristic, Device } from "react-native-ble-plx";
import { parseReceivedData } from './processDATA';
import base64 from 'react-native-base64';

const writeCurrentDateTimeToDevice = async (device) => {
  try {
    const currentDate = new Date();
    const year = currentDate.getUTCFullYear() - 2000;
    const month = currentDate.getUTCMonth() + 1;
    const day = currentDate.getUTCDate();
    const hour = currentDate.getUTCHours();
    const minute = currentDate.getUTCMinutes();
    const second = currentDate.getUTCSeconds();

    let checksum = 0;
    for (let i = 1; i <= 9; i++) {
      checksum += i === 1 ? 0x5a : i === 9 ? 2 : 0;
      switch (i) {
        case 2:
          checksum += 0x0a;
          break;
        case 3:
          checksum += 0x00;
          break;
        case 4:
          checksum += year;
          break;
        case 5:
          checksum += month;
          break;
        case 6:
          checksum += day;
          break;
        case 7:
          checksum += hour;
          break;
        case 8:
          checksum += minute;
          break;
        case 9:
          checksum += second;
          break;
      }
    }

    const dataPacket = [
      0x5a,
      0x0a,
      0x00,
      year,
      month,
      day,
      hour,
      minute,
      second,
      checksum,
    ];
    const encodedDataPacket = base64.encode(dataPacket.join(','));

    const serviceUUID = '0000fff0-0000-1000-8000-00805f9b34fb';
    const writeUUID = '0000fff1-0000-1000-8000-00805f9b34fb';
    const notifyUUID = '0000fff4-0000-1000-8000-00805f9b34fb';

    await device.writeCharacteristicWithResponseForService(serviceUUID, writeUUID, encodedDataPacket);

    console.log("Data successfully written to the device.");

    const onGlucoseUpdate = (error, characteristic) => {
      if (error) {
        console.log(error);
        return -1;
      } else if (!characteristic?.value) {
        console.log("No Data was received");
        return -1;
      }

      const rawData = characteristic.value;

      const parsedData = parseReceivedData(rawData);

      console.log("Parsed Data:", parsedData);
    };

    const startStreamingData = async () => {
      if (device) {
        device.monitorCharacteristicForService(
          serviceUUID,
          notifyUUID,
          onGlucoseUpdate
        );
      } else {
        console.log("No Device Connected");
      }
    };

    await startStreamingData();
  } catch (error) {
    console.error("Error writing data to the device:", error);
  }
};

export default writeCurrentDateTimeToDevice;
