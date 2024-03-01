import { Skeleton } from "@/components/ui/skeleton";

const FoodSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-start bg-gray-100  rounded-3xl  md:w-[15rem] md:h-[22rem]">
      <Skeleton className="w-full h-full" />
      <div className="border px-4 py-8 w-full flex flex-col gap-3">
        <Skeleton className="h-4 bg-gray-500 w-[100px]" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded-full bg-gray-400" />
          <Skeleton className="h-4 w-[100px] bg-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default FoodSkeleton;
