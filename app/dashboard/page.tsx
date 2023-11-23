import DonutChart from "@/components/charts/DonutChart";
import { Card, Divider } from "@nextui-org/react";
import { MapPinned } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface Props {}

const DashBoardPage: FC<Props> = ({}) => {
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

  return (
    <main className="py-6 px-3 sm:px-6">
      <div className="flex gap-2">
        <MapPinned size={20} />
        <p className="text-sm">Lagos, Nigeria</p>
      </div>

      <div className="grid gap-3 md:grid-cols-3 mt-10 2xl:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="md:col-span-2">
            <h1 className="my-4 mx-4">Air Quality Index (AQI)</h1>
            <DonutChart />
          </Card>
        </div>

        <div className="">
          <Card className="p-6">
            <h1 className="text-xl">Pollutants</h1>
            <div className="">
              {pollutants.map((pollutant, i) => (
                <div className="" key={i}>
                  <div className="flex mt-10 justify-between">
                    <p>{pollutant.name}</p>

                    <div className="flex gap-8">
                      <p>{pollutant.value}</p>
                      <span>{pollutant.unit}</span>
                    </div>
                  </div>
                  <Divider />
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="md:col-span-3 2xl:col-span-1">
          <Card className="p-6">
            <h1 className="text-xl">Weather</h1>
            <div className="flex items-center gap-4 justify-center my-8">
              <Image src="/weather.svg" width={70} height={70} alt="" />
              <div className="flex">
                <h1 className="text-3xl">32</h1>
                <span className="text-sm">℃</span>
              </div>
            </div>

            <div className="flex justify-evenly">
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 bg-[#E7F5FE] flex items-center justify-center rounded-md">
                  <Image src="/humidity.svg" width={24} height={24} alt="" />
                </div>
                <p className="text-sm text-foreground-500 mt-1">Humidity</p>
                <p>75%</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 bg-[#FDF3E7] flex items-center justify-center rounded-md">
                  <Image src="/sun.svg" width={24} height={24} alt="" />
                </div>
                <p className="text-sm text-foreground-500 mt-1">UV Index</p>
                <p>5</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 bg-[#EBE7FE] flex items-center justify-center rounded-md">
                  <Image src="/wind.svg" width={24} height={24} alt="" />
                </div>
                <p className="text-sm text-foreground-500 mt-1">Wind</p>
                <p>12 Km/h</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 bg-[#FEEAE7] flex items-center justify-center rounded-md">
                  <Image src="/visibility.svg" width={24} height={24} alt="" />
                </div>
                <p className="text-sm text-foreground-500 mt-1">Visibility</p>
                <p>6 mi</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default DashBoardPage;
