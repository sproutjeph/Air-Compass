import { Card, Divider } from "@nextui-org/react";
import { FC } from "react";

interface PollutantsProps {}

const pollutants = [
  {
    name: "O3",
    value: "58",
    unit: "μg/m³",
  },
  {
    name: "PM2.5",
    value: "4",
    unit: "μg/m³",
  },
  {
    name: "PM10",
    value: "15",
    unit: "μg/m³",
  },
  {
    name: "NO2",
    value: "5",
    unit: "μg/m³",
  },
  {
    name: "CO",
    value: "188",
    unit: "μg/m³",
  },
  {
    name: "SO2",
    value: "1",
    unit: "μg/m³",
  },
];

const Pollutants: FC<PollutantsProps> = ({}) => {
  return (
    <Card className="p-6">
      <h1 className="text-xl">Pollutants</h1>
      <div className="">
        {pollutants.map((pollutant, i) => (
          <div className="" key={i}>
            <div className="flex mt-6 justify-between">
              <p>{pollutant.name}</p>

              <div className="flex gap-4">
                <p>{pollutant.value}</p>
                <span>{pollutant.unit}</span>
              </div>
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Pollutants;
