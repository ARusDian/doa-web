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
        {
          number: 11,
          title: 'Doa Ketika Hujan Turun',
          arabicContent: 'اللَّهُمَّ صَيِّبًا نَافِعًا',
          translation: 'Artinya: Ya Allah, turunkanlah hujan yang bermanfaat.',
          latinScript: "Latin: Allahumma sayyiban naafi'an",
          audioSrc: '/assets/audiodoa/doa_hujan.mp3',
        },
        {
          number: 12,
          title: 'Doa Masuk dan Keluar Pasar',
          arabicContent: 'بِسْمِ اللَّهِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ',
          translation: 'Artinya: Dengan nama Allah. Ya Allah, aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.',
          latinScript: "Latin: Bismillah, Allahumma inni a'udhu bika minal khubutsi wal khabaits",
          audioSrc: '/assets/audiodoa/doa_masuk_pasar.mp3',
        },
        {
          number: 13,
          title: 'Doa Mendengar Adzan',
          arabicContent: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ',
          translation: 'Artinya: Ya Allah, Tuhan pemilik panggilan yang sempurna dan shalat yang didirikan, berikanlah kepada Muhammad kedudukan yang terpuji, sesuai dengan janji-Mu.',
          latinScript: "Latin: Allahumma rabb haadhihid da'watit taammati wassalaatil qaaimati aati Muhammadanil wasilata wal fadhiilata wab'ath-hu maqaaman mahmoodan allathee wa'adtahu",
          audioSrc: '/assets/audiodoa/doa_adzan.mp3',
        },
        {
          number: 14,
          title: 'Doa Masuk dan Keluar Rumah',
          arabicContent: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
          translation: 'Artinya: Dengan menyebut nama Allah, aku bertawakal kepada Allah. Tiada daya kekuatan melainkan dengan pertolongan Allah.',
          latinScript: "Latin: Bismillahi tawakaltu 'ala Allahi laa hawla walaa quwwata illa billah",
          audioSrc: '/assets/audiodoa/doa_masuk_keluar_rumah.mp3',
        },
        {
          number: 15,
          title: 'Doa Melihat Cermin',
          arabicContent: 'اللَّهُمَّ أَنْتَ حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي',
          translation: 'Artinya: Ya Allah, sesungguhnya Engkau telah cantikkan wajahku, maka cantikkanlah akhlakku.',
          latinScript: 'Latin: Allahumma anta hasanta kholqi fahas sin khuluqi',
          audioSrc: '/assets/audiodoa/doa_melihat_cermin.mp3',
        },
        {
          number: 16,
          title: 'Doa Ketika Sakit atau Ada Musibah',
          arabicContent: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ وَالْجُنُونِ وَالْجُذَامِ وَمِنْ سَيِّئِ الأَسْقَامِ',
          translation: 'Artinya: Ya Allah, aku berlindung kepada-Mu dari penyakit kusta, gila, kusta, dan penyakit buruk lainnya.',
          latinScript: "Latin: Allahumma inni a'udzu bika minal barasi wal junuuni wal judzaami wa min sayyil asqoom",
          audioSrc: '/assets/audiodoa/doa_sakit_musibah.mp3',
        },
        {
          number: 17,
          title: 'Doa Naik Kendaraan',
          arabicContent: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ',
          translation: 'Artinya: Maha suci Allah yang telah menundukkan untuk kami kendaraan ini, padahal sebelumnya kami tidak mampu untuk menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami.',
          latinScript: 'Latin: Subhanalladzi sakhkhara lana hadza wama kunna lahu muqriniin, wa inna ila rabbina lamunqalibuun',
          audioSrc: '/assets/audiodoa/doa_naik_kendaraan.mp3',
        },
        {
          number: 18,
          title: 'Doa Ketika Bercermin',
          arabicContent: 'اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي',
          translation: 'Artinya: Ya Allah, sebagaimana Engkau telah menciptakan tubuhku dengan baik, maka perbaikilah akhlakku.',
          latinScript: 'Latin: Allahumma kama hasanta kholqi fahas sin khuluqi',
          audioSrc: '/assets/audiodoa/doa_bercermin.mp3',
        },
        {
          number: 19,
          title: 'Doa Ketika Mimpi Buruk',
          arabicContent: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
          translation: 'Artinya: Aku berlindung dengan kalimat-kalimat Allah yang sempurna, dari kejahatan makhluk yang Dia ciptakan.',
          latinScript: "Latin: A'udhu bikalimatillahit-tammati min syarri maa khalaq",
          audioSrc: '/assets/audiodoa/doa_mimpi_buruk.mp3',
        },
        {
          number: 20,
          title: 'Doa Menyambut Bulan Ramadhan',
          arabicContent: 'اللَّهُمَّ سَلِّمْنِي لِرَمَضَانَ وَسَلِّمْ رَمَضَانَ لِي وَسَلِّمْهُ لِي مُتَقَبَّلاً',
          translation: 'Artinya: Ya Allah, selamatkan aku untuk menyambut bulan Ramadhan, selamatkan bulan Ramadhan untukku, dan terimalah bulan ini dariku dengan sebaik-baiknya.',
          latinScript: 'Latin: Allahumma sallimni liramadana wa sallim ramadana lii wa sallimhu lii mutaqabbala',
          audioSrc: '/assets/audiodoa/doa_ramadhan.mp3',
        },
        {
          number: 21,
          title: 'Doa Sebelum Wudhu',
          arabicContent: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
          translation: 'Artinya: Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang.',
          latinScript: 'Latin: Bismillahirrahmanirrahim',
          audioSrc: '/assets/audiodoa/doa_sebelum_wudhu.mp3',
        },
        {
          number: 22,
          title: 'Doa Sesudah Wudhu',
          arabicContent: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
          translation: 'Artinya: Aku bersaksi bahwa tidak ada tuhan selain Allah, Yang Maha Esa, tiada sekutu bagi-Nya, dan aku bersaksi bahwa Muhammad adalah hamba-Nya dan Rasul-Nya.',
          latinScript: "Latin: Ashhadu an laa ilaaha illallah, wahdahu laa syarika lah, wa asyhadu anna Muhammadan 'abduhu wa rasuluhu",
          audioSrc: '/assets/audiodoa/doa_sesudah_wudhu.mp3',
        },
        {
          number: 23,
          title: 'Doa Setelah Shalat Dhuha',
          arabicContent: 'اللَّهُمَّ بَارِكْ لِي فِيمَا رَزَقْتَنِي وَاقْضِ عَنِّي دَيْنِي وَاعْلُفْ بِيَدِكَ كُلَّ ذِي حَاجَةٍ إِلَيَّ',
          translation: 'Artinya: Ya Allah, berkahilah untukku dalam rezeki yang Engkau berikan kepadaku, lunasilah utangku, dan berilah shalawat atas setiap orang yang membutuhkanku dengan tangan-Mu.',
          latinScript: "Latin: Allahumma barik li fiima razaqtani waqdzi 'annii daynii wa'aluf biyadika kulla dzii haajatin ilayya",
          audioSrc: '/assets/audiodoa/doa_dhuha.mp3',
        },
        {
          number: 24,
          title: 'Doa Ketika Mimpi Baik',
          arabicContent: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
          translation: 'Artinya: Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami dan hanya kepada-Nya kami dikembalikan.',
          latinScript: "Latin: Alhamdulillahil ladhi ahyanaa ba'da maa amaatanaa wa ilaihin nusyuur",
          audioSrc: '/assets/audiodoa/doa_mimpi_baik.mp3',
        },
        {
          number: 25,
          title: 'Doa Menyambut Pagi',
          arabicContent: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
          translation: 'Artinya: Ya Allah, dengan-Mu kami memasuki waktu pagi, dengan-Mu kami memasuki waktu petang, dengan-Mu kami hidup, dengan-Mu kami mati, dan kepada-Mu kebangkitan.',
          latinScript: 'Latin: Allahumma bika ashbahnaa wa bika amsaynaa wa bika nahiya wa bika namuutu wa ilaikal nusyuur',
          audioSrc: '/assets/audiodoa/doa_pagi.mp3',
        },
        {
          number: 26,
          title: 'Doa Menyambut Petang',
          arabicContent: 'اللَّهُمَّ إِنَّا نَشْكُو إِلَيْكَ فَقْدَ نَبِيِّنَا وَكَثْرَةَ عَدُوِّنَا وَقِلَّةَ حِيلَتِنَا وَهَوَانَ عَدُوِّنَا',
          translation: 'Artinya: Ya Allah, sesungguhnya kami mengadukan kepada-Mu kehilangan nabi kami, banyaknya musuh kami, sedikitnya daya upaya kami, dan hinaannya musuh kami.',
          latinScript: "Latin: Allahumma innaa nasyku ilaika fakdaa nabiyyina wa kasrata 'aduwina wa qillata hilatina wa hawaana 'aduwina",
          audioSrc: '/assets/audiodoa/doa_petang.mp3',
        },
        {
          number: 27,
          title: 'Doa Masuk dan Keluar Kendaraan',
          arabicContent: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ',
          translation: 'Artinya: Maha suci Allah yang menundukkan kendaraan ini untuk kami, padahal sebelumnya kami tidak mampu untuk menguasainya, dan sesungguhnya kami akan kembali kepada Tuhan kami.',
          latinScript: 'Latin: Subhanalladzi sakhkhara lana haadzaa wa maa kunna lahu muqriniin wa inna ilaa rabbinaa lamunqalibuun',
          audioSrc: '/assets/audiodoa/doa_masuk_keluar_kendaraan.mp3',
        },
        {
          number: 28,
          title: 'Doa Mendapat Mimpi Baik',
          arabicContent: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ وَمِنْ نَفْسٍ لَا تَشْبَعُ وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا',
          translation: 'Artinya: Ya Allah, aku berlindung kepada-Mu dari ilmu yang tidak memberi manfaat, dari hati yang tidak khusyuk, dari jiwa yang tidak pernah puas, dan dari doa yang tidak pernah dikabulkan.',
          latinScript: "Latin: Allahumma inni a'udzu bika min 'ilmin laa yanfa'u wa min qalbin laa yakhsha'u wa min nafsin laa tashba'u wa min da'watin laa yustajaabu laha",
          audioSrc: '/assets/audiodoa/doa_mendapat_mimpi_baik.mp3',
        },
        {
          number: 29,
          title: 'Doa Masuk dan Keluar Kamar Mandi',
          arabicContent: 'بِسْمِ اللَّهِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ',
          translation: 'Artinya: Dengan nama Allah. Ya Allah, aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.',
          latinScript: "Latin: Bismillah, Allahumma inni a'udhu bika minal khubutsi wal khabaits",
          audioSrc: '/assets/audiodoa/doa_masuk_keluar_kamar_mandi.mp3',
        },
        {
          number: 30,
          title: 'Doa Ketika Mendapat Musibah',
          arabicContent: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
          translation: 'Artinya: Sesungguhnya kita adalah milik Allah dan kepada-Nya kita akan kembali.',
          latinScript: "Latin: Inna lillahi wa inna ilaihi raaji'uun",
          audioSrc: '/assets/audiodoa/doa_musibah.mp3',
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
