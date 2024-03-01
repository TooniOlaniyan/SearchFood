import { Skeleton } from "@/components/ui/skeleton";

const FoodSkeleton = () => {
  return (
    <div className="flex items-center space-x-4 bg-green-800">
      <Skeleton className="h-12 w-12 rounded-full bg-red-500" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default FoodSkeleton;
