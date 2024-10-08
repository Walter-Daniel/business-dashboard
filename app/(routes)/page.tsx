import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";
import { LastCustomer } from "./components/lastCustomers";
import { SalesDistributor } from "./components/salesDostrobutors";
import { TotalSuscriber } from "./components/totalSuscriber";
import { ListIntegration } from "./components/listLintegration";

const dataCardsSummary = [
  {
    icon: UserRound,
    total: "12.450",
    average: 15,
    title: "Companies created",
    tooltipText: "See all of the companies created"
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    title: "Total Revenue",
    tooltipText: "See all of the summary"
  },
  {
    icon: BookOpenCheck, 
    total: "$365.95",
    average:30,
    title: "Bounce Rate",
    tooltipText: "See all of the bounce rate"
  }
];

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20 mb-4">
        {
          dataCardsSummary.map((data, index) =>(
            <CardSummary
              key={index}
              icon={data.icon}
              total={data.total}
              average={data.average}
              title={data.title}
              tooltipText={data.title}
            />
          ))
        }
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 gap-y-4 xl:gap-y-0">
        <LastCustomer />
        <SalesDistributor />
      </div>
      <div className="flex-col lg:flex lg:flex-row gap-y-4 lg:gap-x-10 lg:gap-y-0 mt-4 md:mb-5 justify-center">
        <TotalSuscriber />
        <ListIntegration />
      </div>
    </div>
  );
}
