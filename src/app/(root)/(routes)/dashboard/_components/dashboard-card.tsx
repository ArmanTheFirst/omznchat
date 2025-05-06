import { cn } from "@/utils/utils";

export const DashboardCard = ({
  label,
  Icon,
  amount,
  description,
  children,
}: {
  label: string;
  Icon: React.ElementType;
  amount?: string | number;
  description?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="group relative flex h-full flex-col gap-3 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

      <section className="flex items-center justify-between">
        <p className="text-md font-medium text-gray-700 dark:text-gray-200">
          {label}
        </p>
        {Icon && (
          <Icon className="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
        )}
      </section>

      <section className="flex flex-col gap-2">
        {amount !== undefined && (
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {amount}
          </h2>
        )}
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </section>

      {children && <div className="mt-auto pt-4">{children}</div>}
    </div>
  );
};

export function DashboardCardContent(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      {...props}
      className={cn(
        "group relative flex h-full flex-col gap-3 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-md dark:border-gray-800 dark:bg-gray-900",
        props.className,
      )}
    />
  );
}
