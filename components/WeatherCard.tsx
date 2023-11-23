import { Card } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface WeatherCardProps {}

const WeatherCard: FC<WeatherCardProps> = ({}) => {
  return (
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
  );
};

export default WeatherCard;
