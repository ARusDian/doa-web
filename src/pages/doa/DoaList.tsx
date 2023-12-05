import DoaTitle from '../../components/doa/Doa';
import AppLayout from "../../layouts/AppLayout";

const DoaList = () => {
    const doas = [
        {
          number: 1,
          title: 'Doa Sebelum Makan',
          arabicContent: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
          translation: 'Artinya: Dengan menyebut nama Allah yang Maha Pemurah lagi Maha Penyayang.',
          latinScript: "Latin: Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaa bannar",
          audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3',
        },
        {
          number: 2,
          title: 'Doa Setelah Makan',
          arabicContent: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ',
          translation: 'Artinya: Segala puji bagi Allah yang memberi kami makan dan minum, serta menjadikan kami sebagai orang-orang Islam.',
          latinScript: "Latin: Alhamdulillahil ladhi at'amana wa saqana wa ja'alana min-al-muslimin",
          audioSrc: '/assets/audiodoa/doa_setelah_makan.mp3',
        },
        {
          number: 3,
          title: 'Doa Masuk Rumah',
          arabicContent: 'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
          translation: 'Artinya: Dengan menyebut nama Allah, kami masuk, dengan menyebut nama Allah, kami keluar, dan kepada Allah, Tuhan kami, kami bertawakal.',
          latinScript: "Latin: Bismillahi walajna, Bismillahi kharajna, wa 'ala Allahi rabbina tawakalna",
          audioSrc: '/assets/audiodoa/doa_masuk_rumah.mp3',
        },
        {
          number: 4,
          title: 'Doa Keluar Rumah',
          arabicContent: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
          translation: 'Artinya: Dengan menyebut nama Allah, aku bertawakal kepada Allah. Tiada daya kekuatan melainkan dengan pertolongan Allah.',
          latinScript: "Latin: Bismillahi tawakaltu 'ala Allahi wa la hawla wa la quwwata illa billah",
          audioSrc: '/assets/audiodoa/doa_keluar_rumah.mp3',
        },
        {
          number: 5,
          title: 'Doa Sebelum Tidur',
          arabicContent: 'بِسْمِكَ اللَّهُمَّ أَحْيَا وَبِسْمِكَ أَمُوتُ',
          translation: 'Artinya: Dengan nama-Mu, ya Allah, aku hidup dan aku mati.',
          latinScript: 'Latin: Bismika allahumma ahyaa wa bismika amuut',
          audioSrc: '/assets/audiodoa/doa_sebelum_tidur.mp3',
        },
        {
          number: 6,
          title: 'Doa Bangun Tidur',
          arabicContent: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
          translation: 'Artinya: Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami dan hanya kepada-Nya kami dikembalikan.',
          latinScript: "Latin: Alhamdulillahil ladhi ahyanaa ba'da maa amaatanaa wa ilaihin nusyuur",
          audioSrc: '/assets/audiodoa/doa_bangun_tidur.mp3',
        },
        {
          number: 7,
          title: 'Doa Masuk Toilet',
          arabicContent: 'بِسْمِ اللَّهِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ',
          translation: 'Artinya: Dengan nama Allah. Ya Allah, aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.',
          latinScript: "Latin: Bismillah, Allahumma inni a'udhu bika minal khubutsi wal khabaits",
          audioSrc: '/assets/audiodoa/doa_masuk_toilet.mp3',
        },
        {
          number: 8,
          title: 'Doa Keluar Toilet',
          arabicContent: 'غُفْرَانَكَ',
          translation: 'Artinya: Aku mohon ampun kepada-Mu.',
          latinScript: 'Latin: Ghufraanak',
          audioSrc: '/assets/audiodoa/doa_keluar_toilet.mp3',
        },
        {
          number: 9,
          title: 'Doa Sebelum Belajar atau Bekerja',
          arabicContent: 'اللَّهُمَّ فَقِّهْنِي فِي الدِّينِ',
          translation: 'Artinya: Ya Allah, berikanlah aku pemahaman dalam agama.',
          latinScript: 'Latin: Allahumma faqqihni fi ad-dini',
          audioSrc: '/assets/audiodoa/doa_sebelum_belajar.mp3',
        },
        {
          number: 10,
          title: 'Doa Ketika Mendengar Petir',
          arabicContent: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ',
          translation: 'Artinya: Maha suci Allah yang petir bertasbih dengan pujian-Nya, dan malaikat karena ketakutannya.',
          latinScript: "Latin: Subhanalladhi yusabbihu ar-radu bi hamdihi wal-mala'ikaatu min kheefatihi",
          audioSrc: '/assets/audiodoa/doa_mendengar_petir.mp3',
        },
      ];

  return (
    <div>
      <AppLayout>
      <p className="mx-auto items-center text-5xl text-white font-bold flex justify-center mb-8 pt-2 pb-4 bg-brandPrimary">Doa Sehari-hari</p>
      {doas.map(({ number, title, arabicContent, translation, latinScript, audioSrc }) => (
        <DoaTitle
              key={number}
              doaNumber={number}
              doaTitle={title}
              arabicContent={arabicContent}
              latinScript={latinScript}
              translation={translation}
              audioSrc={audioSrc}/>
      ))}
      <p className="mt-12"></p>
      </AppLayout>
    </div>
  );
};

export default DoaList;
