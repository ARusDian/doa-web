import { Surah } from "../../models/surah";

interface SurahCardProps {
    onClick: () => void;
    surah: Surah;
}

export default function SurahCard({
    surah,
}: SurahCardProps
) {
    return (
        <div onClick={
            () => {
                window.location.href = `/juz-amma/${surah.id}`;
            }
        } className="flex gap-4 bg-stone-100 rounded-lg shadow-xl p-2 hover:shadow-sm opacity-90">
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <g clip-path="url(#clip0_141_977)">
                        <path d="M31.0781 12.6219V5.97656C31.0781 5.39409 30.6059 4.92188 30.0234 4.92188H23.3781L18.7442 0.307336C18.3326 -0.102445 17.6673 -0.102445 17.2557 0.307336L12.6219 4.92188H5.97656C5.39409 4.92188 4.92188 5.39409 4.92188 5.97656V12.6219L0.307336 17.2558C-0.102445 17.6674 -0.102445 18.3327 0.307336 18.7443L4.92188 23.3781V30.0234C4.92188 30.6059 5.39409 31.0781 5.97656 31.0781H12.6219L17.2557 35.6927C17.4615 35.8976 17.7308 36 18 36C18.2692 36 18.5385 35.8976 18.7442 35.6927L23.3781 31.0781H30.0234C30.6059 31.0781 31.0781 30.6059 31.0781 30.0234V23.3781L35.6927 18.7443C36.1024 18.3327 36.1024 17.6674 35.6927 17.2558L31.0781 12.6219ZM29.2761 22.1983C29.0793 22.396 28.9688 22.6635 28.9688 22.9425V28.9688H22.9425C22.6636 28.9688 22.396 29.0793 22.1984 29.2761L18 33.4569L13.8017 29.2761C13.604 29.0793 13.3365 28.9688 13.0575 28.9688H7.03125V22.9425C7.03125 22.6636 6.92072 22.396 6.72391 22.1984L2.54313 18L6.72391 13.8017C6.92072 13.604 7.03125 13.3365 7.03125 13.0575V7.03125H13.0575C13.3364 7.03125 13.604 6.92072 13.8016 6.72391L18 2.54313L22.1984 6.72391C22.3961 6.92072 22.6636 7.03125 22.9425 7.03125H28.9688V13.0575C28.9688 13.3364 29.0793 13.604 29.2761 13.8016L33.4569 18L29.2761 22.1983Z" fill="#994EF8" />
                    </g>
                    <defs>
                        <clipPath id="clip0_141_977">
                            <rect width="36" height="36" fill="white" />
                        </clipPath>
                    </defs>
                    <text x="50%" y="50%" text-anchor="middle" fill="#240F4F" fontSize="14px" fontStyle="normal" stroke-width="1px" dy=".3em">{surah.id}</text>
                </svg>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col justify-center">
                    <h1 className="text-lg font-semibold">{surah.name_complex}</h1>
                    <div className="flex gap-3 text-[#8789A3]">
                        <p className="text-xs">{surah.revelation_place.toUpperCase()}</p>
                        <p className="text-xs">{surah.verses_count} Ayat</p>
                    </div>
                </div>
                <div>
                    <p className="text-2xl text-[#863ED5]">
                        {surah.name_arabic}
                    </p>
                </div>
            </div>
        </div>
    );
}
