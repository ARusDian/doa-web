import { useEffect, useRef, useState } from "react";
import { Ayat } from "../../models/ayah";
import convertToArabicNumber from "../../utils/convertToArabicNumber";

interface AyahCardProps {
    ayat: Ayat;
}

export default function AyahCard({ ayat }: AyahCardProps) {
    const audioRef = useRef<HTMLAudioElement>(null);

    return (
        <div className="bg-[#FFF] my-3">
            <div className="h-12 bg-stone-200 text-sm flex justify-between p-2 rounded-md">
                <p className="my-auto">
                    {ayat.nomorAyat}
                </p>
                <div className="flex my-auto gap-12 mx-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" onClick={() => {
                        audioRef.current?.play();
                    }}>
                        <path d="M32.8125 17.5C32.8134 17.8714 32.7182 18.2367 32.5361 18.5603C32.354 18.884 32.0913 19.155 31.7734 19.3471L12.075 31.3975C11.7429 31.6008 11.3625 31.7119 10.9732 31.7191C10.5838 31.7263 10.1996 31.6294 9.86016 31.4385C9.52398 31.2505 9.24393 30.9764 9.04882 30.6443C8.8537 30.3123 8.75056 29.9342 8.75 29.549V5.45099C8.75056 5.06583 8.8537 4.68777 9.04882 4.35569C9.24393 4.02362 9.52398 3.7495 9.86016 3.56153C10.1996 3.3706 10.5838 3.27374 10.9732 3.28095C11.3625 3.28816 11.7429 3.39918 12.075 3.60255L31.7734 15.6529C32.0913 15.845 32.354 16.116 32.5361 16.4397C32.7182 16.7634 32.8134 17.1286 32.8125 17.5Z" fill="#9747FF" />
                    </svg>
                </div>
            </div>
            <div>
                <p className="text-4xl text-end p-3 flex justify-end gap-3">
                    <span className="text-[#863ED5] mt-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g clip-path="url(#clip0_141_977)">
                                <path d="M31.0781 12.6219V5.97656C31.0781 5.39409 30.6059 4.92188 30.0234 4.92188H23.3781L18.7442 0.307336C18.3326 -0.102445 17.6673 -0.102445 17.2557 0.307336L12.6219 4.92188H5.97656C5.39409 4.92188 4.92188 5.39409 4.92188 5.97656V12.6219L0.307336 17.2558C-0.102445 17.6674 -0.102445 18.3327 0.307336 18.7443L4.92188 23.3781V30.0234C4.92188 30.6059 5.39409 31.0781 5.97656 31.0781H12.6219L17.2557 35.6927C17.4615 35.8976 17.7308 36 18 36C18.2692 36 18.5385 35.8976 18.7442 35.6927L23.3781 31.0781H30.0234C30.6059 31.0781 31.0781 30.6059 31.0781 30.0234V23.3781L35.6927 18.7443C36.1024 18.3327 36.1024 17.6674 35.6927 17.2558L31.0781 12.6219ZM29.2761 22.1983C29.0793 22.396 28.9688 22.6635 28.9688 22.9425V28.9688H22.9425C22.6636 28.9688 22.396 29.0793 22.1984 29.2761L18 33.4569L13.8017 29.2761C13.604 29.0793 13.3365 28.9688 13.0575 28.9688H7.03125V22.9425C7.03125 22.6636 6.92072 22.396 6.72391 22.1984L2.54313 18L6.72391 13.8017C6.92072 13.604 7.03125 13.3365 7.03125 13.0575V7.03125H13.0575C13.3364 7.03125 13.604 6.92072 13.8016 6.72391L18 2.54313L22.1984 6.72391C22.3961 6.92072 22.6636 7.03125 22.9425 7.03125H28.9688V13.0575C28.9688 13.3364 29.0793 13.604 29.2761 13.8016L33.4569 18L29.2761 22.1983Z" fill="#994EF8" />
                            </g>
                            <defs>
                                <clipPath id="clip0_141_977">
                                    <rect width="36" height="36" fill="white" />
                                </clipPath>
                            </defs>
                            <text x="50%" y="50%" text-anchor="middle" fill="#240F4F" fontSize="14px" fontStyle="normal" stroke-width="1px" dy=".3em">{convertToArabicNumber(ayat.nomorAyat)}</text>
                        </svg>
                    </span>
                    {ayat.teksArab}
                </p>
                <p className="text-start text-xl p-3">
                    <span className="text-[#863ED5]">Arab-Latin: </span>{ayat.teksLatin}
                </p>
                <p className="text-start text-xl p-3">
                    {ayat.nomorAyat}. {ayat.teksIndonesia}
                </p>
                <audio
                    hidden
                    ref={audioRef}
                    src={ayat.audio["03"]}
                    controls
                    className="w-full"
                />
            </div>
        </div>
    )
}
