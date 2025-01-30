import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import driverData from "@/data/driverData";

type DriverDataType = {
  id: string;
  name: string;
  age: number;
  licenseNumber: string;
  vehicleType: string;
  rating: number;
  tripsCompleted: number;
  availability: boolean;
};

const driverProfile = () => {
  const [data, setData] = useState<DriverDataType>(
    driverData
  );

  return (
    <View>
      <Text>Driver Data: {JSON.stringify(data)}</Text>
    </View>
  );
  
};
export default driverProfile;
