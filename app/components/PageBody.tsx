import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface PageBodyProps {
    children: ReactNode;
    bodyWrapperStyles?: string;
    mainWrapperStyles?: string;
};

export default function PageBody ({
    children,
    bodyWrapperStyles, 
    mainWrapperStyles
}: PageBodyProps) {
    return (
        <div className={cn(
            "flex flex-col flex-1 items-center justify-center bg-background font-sans",
            bodyWrapperStyles
            )}>
            <main className={ cn("flex flex-1 flex-col items-center w-1/2 justify-evenly px-2 py-2 bg-background",
            mainWrapperStyles)
            }>
                {children}
            </main>
        </div>
        )
};