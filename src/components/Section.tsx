import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export function Section({ id, className, children, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn('py-16 md:py-24', className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {children}
            </div>
        </section>
    );
}
