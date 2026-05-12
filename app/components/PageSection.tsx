import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface PageSectionProps {
    children?: ReactNode;
    customSectionStyles?: string;
}

export default function PageSection ({
    children,
    customSectionStyles
}: PageSectionProps) {
    return <section className={cn("flex flex-col items-center justify-evenly w-full gap-8", customSectionStyles)} >
        {children}
    </section>
};