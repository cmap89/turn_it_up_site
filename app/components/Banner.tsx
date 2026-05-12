import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface BannerProps  {
    bannerContainer?: string;
    children?: ReactNode;    
}

export default function Banner({
    bannerContainer,
    children,
}: BannerProps) {
    return <div className={cn(
        "flex flex-col w-full items-center py-6",
        bannerContainer)}
        >
        {children}
        </div>
}