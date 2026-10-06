import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { padding } from '@/lib/styles';
import heroImg from "../assets/hero.jpg";
import pemandangan1 from "../assets/pemandangan1.jpg";
import pemandangan2 from "../assets/pemandangan2.jpg";

const btn =
  "relative z-1 mt-3.5 inline-flex items-center justify-center gap-2 cursor-pointer border-3 border-foreground px-[2.2vh] py-[1.2vh] text-[0.65rem] font-semibold no-underline shadow-[4px_4px_0_#2b2118] transition-all duration-150 ease-out hover:translate-x-1 hover:translate-y-1 hover:bg-[#] hover:shadow-[0_0_0_#2b2118] active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-accent lg:text-[17px] lg:px-5 lg:py-[0.9rem]";

const quotes = [
  "Bumi bukan warisan dari nenek moyang kita, melainkan pinjaman dari anak cucu kita.",
  "Satu pohon, satu aksi, satu perubahan. Mari kita bersama bergerak, menjaga, dan melestarikan bumi tercinta.",
  "Satu langkah kecil untuk alam bisa jadi langkah besar untuk masa depan.",
  "Hutan yang kita jaga hari ini adalah napas yang akan menyelamatkan esok.",
];

function Beranda() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const nextQuote = () => setQuoteIndex((i) => (i + 1) % quotes.length);
  const quoteBefore = () =>
    setQuoteIndex((i) => (i - 1 + quotes.length) % quotes.length);

  return (
    <>
      <main className="mt-20 overflow-x-hidden bg-background">
        {/* Hero */}
        <section className={`overflow-hidden bg-[#ebebeb] px-4 pt-6 pb-2 ${padding}`}>
          <div className="grid-cols-1 block lg:grid lg:grid-cols-2 md:px-4">
            <div className="lg:py-15">
              <h1
                data-aos="fade-up"
                className="font-heading text-[#2e2e2e] uppercase wrap-break-word text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl"
              >
                <span>Jaga bumi, olah sampahmu.</span>
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="mt-3 text-base md:text-lg lg:mb-15"
              >
                Kurangi, gunakan ulang, dan daur ulang. Langkah kecil dari rumah
                untuk bumi yang lebih bersih.
              </p>
              <div data-aos="fade-up" data-aos-delay="200">
                <a className={`${btn} bg-secondary`}>Jelajahi Tips &amp; Aksi</a>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-5 pb-4 md:px-4"
            >
              <img
                src={heroImg}
                alt="Kondisi saat ini"
                className="mx-auto h-auto max-w-full md:mx-16 lg:mx-0 lg:pl-35"
              />
            </div>
          </div>
        </section>

        <div
          aria-hidden="true"
          className="border-y-4 border-black bg-foreground px-4 py-3 text-center font-heading text-sm uppercase text-[#fff8e7] sm:text-lg md:whitespace-nowrap md:text-2xl"
        >
          Pilah • Olah • Reduce • Reuse • Recycle
        </div>

        {/* Misi */}
        <section className="mt-4 grid grid-cols-1 gap-y-6 p-4 md:px-15 lg:grid-cols-2 lg:gap-x-6 lg:mt-6 lg:px-12 lg:py-0 xl:px-40 2xl:px-70">
          <div
            data-aos="fade-right"
            className="bg-primary border-3 border-black p-6 shadow-[4px_4px_0_#2b2118] text-background sm:p-8 lg:max-w-130 lg:p-12"
          >
            <div className="mb-2 text-2xl font-medium font-heading md:text-3xl">
              <p>
                Misi Kami
                <br />
                Untuk Memperoleh
                <br />
                Kedamaian
              </p>
            </div>
            <div className="text-left text-[13px] sm:text-sm md:text-base lg:text-[17px] xl:text-[19px]">
              <p className="mt-0 mb-3">
                Misi kami adalah menginspirasi masyarakat untuk peduli
                lingkungan dengan memberikan edukasi, informasi, dan aksi nyata
                demi terciptanya bumi yang lebih hijau dan berkelanjutan.
              </p>
              <a id="btnMisi" className={`${btn} bg-secondary text-foreground`}>
                Aksi Kami
              </a>
            </div>
          </div>

          {/* Kolom gambar */}
          <div
            data-aos="fade-left"
            className="grid grid-cols-1 gap-y-6 lg:grid-rows-[1.2fr_0.8fr]"
          >
            <div
              className="h-56 border-3 border-black shadow-[4px_4px_0_#2b2118] bg-cover bg-center bg-no-repeat sm:h-72 lg:h-auto lg:min-h-64"
              style={{ backgroundImage: `url(${pemandangan1})` }}
            ></div>

            <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6">
              <div
                className="h-48 border-3 border-black shadow-[4px_4px_0_#2b2118] bg-cover bg-center bg-no-repeat md:h-auto md:min-h-48"
                style={{ backgroundImage: `url(${pemandangan2})` }}
              ></div>
              <div className="text-[0.5rem]">
                <p id="quote" className="text-[1rem] lg:text-[1rem]">
                  "{quotes[quoteIndex]}"
                </p>
                <button className={`${btn} bg-muted text-background mr-2 mt-3`} onClick={quoteBefore}>
                  <ChevronLeft />
                </button>
                <button className={`${btn} bg-muted text-background mt-3`} onClick={nextQuote}>
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Ajakan */}
        <section className="bg-card border-t-4 border-black mt-20 p-6 sm:p-8 md:px-15 lg:px-16 lg:py-12 xl:px-40">
          <div>
            <div
              data-aos="fade-up"
              className="mb-8 font-heading text-center text-[2rem] font-medium lg:text-4xl"
            >
              Kenapa Harus Bertindak?
            </div>
            <div
              data-aos="fade-up"
              className="border-3 border-black shadow-[4px_4px_0_#2b2118] bg-background p-6 mb-20 sm:p-8 lg:mx-10 xl:mx-30"
            >
              <div>
                <h3 className="mb-2 font-heading text-base font-medium md:text-2xl lg:p-4 lg:text-3xl">
                  Lingkungan adalah warisan.
                </h3>
                <p className="text-[0.9rem] md:text-lg lg:px-4 lg:text-xl xl:text-[26px]">
                  Setiap pohon yang diselamatkan, setiap sampah yang dikurangi,
                  menjaga masa depan generasi berikutnya.
                </p>
              </div>
              <div>
                <p className="text-[0.9rem] mb-3 md:text-lg lg:px-4 lg:text-xl xl:text-[26px]">
                  Mulai dari hal kecil: membawa tas sendiri, memilah sampah,
                  ikut kegiatan penghijauan.
                </p>
                <a id="btnBawah" className={`${btn} bg-secondary`}>
                  Lihat Aksi Kami
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-secondary border-t-4 border-black px-6 py-2 sm:px-10 md:px-20 lg:px-24 xl:px-60 2xl:px-90">
          <div className="text-center lg:px-20">
            <div data-aos="zoom-in">
              <p className="inline-block font-heading font-medium text-[17px] uppercase rotate-4 border-[3px] border-[#2b2118] bg-background mt-12 px-4 py-2 shadow-[4px_4px_0_#2b2118]">
                Saatnya turun tangan
              </p>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-heading uppercase wrap-break-word text-3xl text-center px-2 pt-12 pb-6 text-foreground sm:px-9 md:text-4xl lg:text-5xl"
            >
              Sekolah bersih dimulai dari kamu
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center pb-3 md:text-base lg:text-[16px]"
            >
              Ajak teman sekelas, bicarakan dengan guru, dan mulai satu
              kebiasaan baik besok. Sekecil apa pun aksimu, lakukan
              bareng-bareng!
            </p>
            <div data-aos="fade-up" data-aos-delay="300">
              <a className={`${btn} bg-custom-purple text-background uppercase items-center mb-4`}>
                Gabung Gerakan!
              </a>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor-placement="top-bottom"
              className="font-heading font-medium text-lg text-center uppercase pb-4 sm:text-xl"
            >
              Satu tumbler, satu pilihan, satu langkah, lebih baik.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Beranda;
