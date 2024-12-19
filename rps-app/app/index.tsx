import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';

// Define types for Bluetooth device data
interface Device {
  id: string;
  name: string;
}

export default function App() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [devices, setDevices] = useState<Device[]>([]);
  const [receivedData, setReceivedData] = useState<string>('');

  // Simulating Bluetooth device list (in case no Bluetooth module is used directly)
  useEffect(() => {
    // Assuming this is how you fetch a list of available devices manually
    setDevices([
      { id: '1', name: 'Device 1' },
      { id: '2', name: 'Device 2' },
      { id: '3', name: 'Device 3' }
    ]);

    // Cleanup if necessary (empty in this case since we aren't managing listeners)
    return () => {};
  }, []);

  const connectToDevice = (deviceId: string) => {
    // Simulate the process of connecting to the device
    console.log(`Simulating connection to device with ID: ${deviceId}`);
    setIsConnected(true); // Mock connection state
  };

  const sendData = (message: string) => {
    // Simulating sending data if connected
    if (isConnected) {
      console.log('Sending message:', message);
      // Mock a received response after sending data
      setReceivedData('Data received by the device');
    } else {
      console.log('Not connected to any device');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Bluetooth Communication with Arduino (Mocked)</Text>

      {devices.length > 0 ? (
        <View>
          <Text>Available Devices:</Text>
          {devices.map((device, index) => (
            <Button
              key={index}
              title={`Connect to ${device.name}`}
              onPress={() => connectToDevice(device.id)}
            />
          ))}
        </View>
      ) : (
        <Text>No Bluetooth devices found</Text>
      )}

      {isConnected && (
        <View style={{ marginTop: 20 }}>
          <Text>Connection Status: Connected</Text>
          <Button title="Send 'Hello Arduino'" onPress={() => sendData('Hello Arduino')} />
          <Text>Received Data: {receivedData}</Text>
        </View>
      )}
    </View>
  );
}
