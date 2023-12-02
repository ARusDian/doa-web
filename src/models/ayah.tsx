export interface SurahAyah {
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
    tempatTurun: string;
    arti: string;
    deskripsi: string;
    audioFull: string;
    ayat: Array<Ayat>;
    suratSebelumnya: {
        nama: string;
        nomor: number;
        namaLatin: string;
        jumlahAyat: number;
    };
    suratSelanjutnya: {
        nama: string;
        nomor: number;
        namaLatin: string;
        jumlahAyat: number;
    };
}

export interface Ayat {
    nomorAyat: number;
    teksArab: string;
    teksLatin: string;
    teksIndonesia: string;
    audio: Array<{
        "string" : string;
    }>;
    
}
