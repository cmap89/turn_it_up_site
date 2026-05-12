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
            "flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black",
            bodyWrapperStyles
            )}>
            <main className={ cn("flex flex-1 w-full flex-col items-center justify-between px-2 py-32 bg-zinc-50 dark:bg-black sm:items-start",
            mainWrapperStyles)
            }>
                {children}
            </main>
        </div>
        )
};