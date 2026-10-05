import { useState } from "react";
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import heroImg from "../assets/images/hero.jpg";
import pemandangan1 from "../assets/images/pemandangan1.jpg";
import pemandangan2 from "../assets/images/pemandangan2.jpg";

const btn =
  "relative z-1 mt-4 inline-block cursor-pointer rounded-3xl bg-[#2c2c2c] px-[2.2vh] py-[1.2vh] text-[0.65rem] font-semibold text-[#f0f0f0] no-underline transition-all duration-300 hover:scale-110 hover:bg-[#333] lg:text-[17px] lg:rounded-2xl lg:px-5 lg:py-[0.9rem]";

const quotes = [
  "Bumi bukan warisan dari nenek moyang kita, melainkan pinjaman dari anak cucu kita.",
  "Satu pohon, satu aksi, satu perubahan. Mari kita bersama bergerak, menjaga, dan melestarikan bumi tercinta.",
  "Satu langkah kecil untuk alam bisa jadi langkah besar untuk masa depan.",
  "Hutan yang kita jaga hari ini adalah napas yang akan menyelamatkan esok."
];

function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const nextQuote = () => setQuoteIndex((i) => (i + 1) % quotes.length);
  const quoteBefore = () =>
    setQuoteIndex((i) => (i - 1 + quotes.length) % quotes.length);

  return (
    <>
      <main className="mt-20">
        {/* Hero */}
        <section className="bg-[#ebebeb] px-[2vh] pt-[3.5vh] pb-[1vh]">
          <div
            data-aos="zoom-in"
            className="relative mb-[5vh] flex min-h-[40vh] w-full items-center overflow-hidden rounded-4xl bg-black lg:h-[50vh]"
          >
            <img
              src={heroImg}
              alt="Hutan hijau"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-left brightness-[0.9]"
            />
            <div className="relative flex w-full justify-center p-5 lg:justify-end lg:p-10">
              <div
                data-aos="fade-left"
                className="max-w-175 rounded-4xl px-4 py-4 shadow-[0_12px_32px_rgba(31,45,58,0.08)] lg:px-8 lg:py-[1.2rem]"
              >
                <p className="mb-4 text-[16px] font-semibold text-[#f0f0f0] lg:text-[1.7rem] lg:text-[#2c2c2c]">
                  Langkah kecil, perubahan besar untuk bumi.
                  <br />
                  Ayo bersama jaga hutan demi masa depan kita.
                </p>
                <a id="btnHero" className={btn}>
                  Jelajahi Tips &amp; Aksi
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Misi */}
        <section className="mt-4 grid grid-cols-1 gap-y-[3vh] p-[2vh] lg:grid-cols-2 lg:gap-x-[3vh] lg:px-70 lg:py-0">
          <div
            data-aos="fade-right"
            className="rounded-4xl bg-[#a8cba0] p-8 text-[#1b3a1a] lg:max-w-130 lg:p-12"
          >
            <div className="mb-2 text-2xl font-bold lg:text-4xl">
              <p>
                Our Mission
                <br />
                To Achieve
                <br />
                Peace
              </p>
            </div>
            <div className="text-left text-[13px] lg:text-[19px]">
              <p className="mt-0 mb-3">
                Misi kami adalah menginspirasi masyarakat untuk peduli
                lingkungan dengan memberikan edukasi, informasi, dan aksi nyata
                demi terciptanya bumi yang lebih hijau dan berkelanjutan.
              </p>
              <a id="btnMisi" className={btn}>
                Tips Dan Aksi Kami
              </a>
            </div>
          </div>

          {/* Kolom gambar */}
          <div
            data-aos="zoom-in"
            className="grid h-136 grid-rows-2 gap-y-[3vh] lg:h-auto lg:grid-rows-[1.2fr_0.8fr]"
          >
            <div
              className="rounded-4xl bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${pemandangan1})` }}
            ></div>

            <div className="grid grid-cols-1 grid-rows-2 gap-y-7.5 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-[3vh] lg:gap-y-0">
              <div
                className="rounded-4xl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${pemandangan2})` }}
              ></div>
              <div className="text-[0.5rem]">
                <p id="quote" className="text-[1rem] lg:text-[1rem]">"{quotes[quoteIndex]}"</p>
                <button className={`${btn} mr-2`} onClick={quoteBefore}>
                  <ChevronLeft />
                </button>
                <button className={btn} onClick={nextQuote}>
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Ajakan */}
        <section className="mt-20 p-8 lg:px-40 lg:py-0">
          <div>
            <div
              data-aos="fade-up"
              className="mb-8 text-center text-[2rem] font-bold lg:text-4xl"
            >
              Kenapa Harus Bertindak?
            </div>
            <div
              data-aos="fade-up"
              className="rounded-2xl bg-[#e8f7eb] p-8 mb-30 lg:mx-30"
            >
              <div>
                <h3 className="mb-2 text-base font-bold lg:text-3xl lg:p-4">
                  Lingkungan adalah warisan.
                </h3>
                <p className="text-[0.9rem] lg:text-[26px] lg:px-4">
                  Setiap pohon yang diselamatkan, setiap sampah yang dikurangi,
                  menjaga masa depan generasi berikutnya.
                </p>
              </div>
              <div>
                <p className="text-[0.9rem] mb-3 lg:text-[26px] lg:px-4">
                  Mulai dari hal kecil: membawa tas sendiri, memilah sampah,
                  ikut kegiatan penghijauan.
                </p>
                <a id="btnBawah" className={btn}>
                  Lihat Aksi Kami
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;