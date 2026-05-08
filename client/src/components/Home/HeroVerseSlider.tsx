'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const verses = [
  {
    text: 'And the criminals will see the Fire and will be certain that they are to fall therein. And they will not find from it a way elsewhere.',
    reference: '[ Al-Kahf : 53 ]',
  },
  {
    text: 'And worship your Lord until there comes to you the certainty (death).',
    reference: '[ Al-Hijr : 99 ]',
  },
  {
    text: 'And Allah increases those who were guided, in guidance, and the enduring good deeds are better to your Lord for reward and better for recourse.',
    reference: '[ Maryam : 76 ]',
  },
  {
    text: 'And will drive the criminals to Hell in thirst',
    reference: '[ Maryam : 86 ]',
  },
  {
    text: 'My Lord, forgive me and my brother and admit us into Your mercy, for You are the most merciful of the merciful.',
    reference: "[ Al A'raf : 151 ]",
  },
  {
    text: 'It is the same [to Him] concerning you whether one conceals [his] speech or one publicizes it and whether one is hidden by night or conspicuous [among others] by day.',
    reference: '[ Ar Rad : 10 ]',
  },
  {
    text: 'But when He saves them, at once they commit injustice upon the earth without right. O mankind, your injustice is only against yourselves, [being merely] the enjoyment of worldly life. Then to Us is your return, and We will inform you of what you used to do.',
    reference: '[ Yunus : 23 ]',
  },
  {
    text: 'Allah keeps firm those who believe, with the firm word, in worldly life and in the Hereafter. And Allah sends astray the wrongdoers. And Allah does what He wills.',
    reference: '[ Ibrahim : 27 ]',
  },
  {
    text: 'The example of Paradise, which the righteous have been promised, is [that] beneath it rivers flow. Its fruit is lasting, and its shade. That is the consequence for the righteous, and the consequence for the disbelievers is the Fire.',
    reference: '[ Ar Rad : 35 ]',
  },
  {
    text: 'And you will see the criminals that Day bound together in shackles.',
    reference: '[ Ibrahim : 49 ]',
  },
  {
    text: 'But those who committed evil deeds and then repented after them and believed - indeed, your Lord, thereafter, is Forgiving and Merciful.',
    reference: "[ Al A'raf : 153 ]",
  },
  {
    text: "This [Qur'an] is notification for the people that they may be warned thereby and that they may know that He is but one God and that those of understanding will be reminded.",
    reference: '[ Ibrahim : 52 ]',
  },
];

const HeroVerseSlider = () => {
  return (
    <div className="mt-20 w-full max-w-170 overflow-hidden text-center">
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={900}
        slidesPerView={1}
        grabCursor={true}
        allowTouchMove={true}
        className="w-full cursor-pointer"
      >
        {verses.map((verse) => (
          <SwiperSlide key={verse.reference}>
            <div className="mx-auto flex min-h-35 flex-col items-center justify-center text-center">
              <p className="max-w-120 text-sm leading-8 text-accent">{verse.text}</p>
              <p className="mt-5 text-sm text-accent">{verse.reference}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroVerseSlider;
