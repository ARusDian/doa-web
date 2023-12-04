import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function SkeletonAyahCard() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="flex gap-4 bg-stone-100 rounded-lg shadow-xl p-2 hover:shadow-sm opacity-90 my-5 animate-pulse">
                <div className="">
                    <Skeleton width={36} height={36} />
                </div>
                <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-center">
                        <Skeleton  width={100} height={20} />
                        <div className="flex gap-3 text-[#4248a1]">
                            <Skeleton  width={50} height={10} />
                            <Skeleton  width={50} height={10} />
                        </div>
                    </div>
                    <div>
                        <Skeleton  width={50} height={20} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}
