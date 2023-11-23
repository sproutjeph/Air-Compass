import ColumnChart from "@/components/charts/ColumnChart";
import DonutChart from "@/components/charts/DonutChart";
import WeatherCard from "@/components/WeatherCard";
import Pollutants from "@/components/Pollutants";
import { Card } from "@nextui-org/react";
import { MapPinned } from "lucide-react";
import { FC } from "react";

interface Props {}

const DashBoardPage: FC<Props> = ({}) => {
  return (
    <main className="py-6 px-3 sm:px-6">
      <div className="flex gap-2">
        <MapPinned size={20} />
        <p className="text-sm">Lagos, Nigeria</p>
      </div>

      <div className="grid gap-3 xl:grid-cols-5 mt-10">
        <div className="xl:col-span-2">
          <Card className="">
            <h1 className="my-4 mx-4">Air Quality Index (AQI)</h1>
            <DonutChart />
          </Card>
        </div>
        <div className="">
          <Pollutants />
        </div>
        <div className="xl:col-span-2">
          <WeatherCard />
        </div>

        {/* <div className="xl:col-span-4">
          <Card>
            <div className="p-6">
              <h1>AQI Value Chart</h1>
            </div>
            <ColumnChart />
          </Card>
        </div> */}
      </div>
    </main>
  );
};

export default DashBoardPage;
