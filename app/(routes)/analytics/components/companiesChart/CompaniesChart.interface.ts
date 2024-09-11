import { Company, Event } from "@prisma/client";

export interface CompaniesChartProps {
    companies: Company[];
    events: Event[];
}