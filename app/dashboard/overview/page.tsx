import DonutChart from "@/components/charts/DonutChart";
import { Card } from "@nextui-org/react";
import { FC } from "react";

interface Props {}

const DashBoardPage: FC<Props> = ({}) => {
  return (
    <main className="">
      page
      <Card>
        <DonutChart />
      </Card>
    </main>
  );
};

export default DashBoardPage;
