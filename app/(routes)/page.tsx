import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";

export const dataCardsSummary = [
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
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
    </div>
  );
}
