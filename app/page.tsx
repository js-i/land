
import { UiButton } from "./components/button";
import Image from "next/image";
import Union from '@/public/Union.svg'
import foto2 from '@/public/foto2.png'
import heart from '@/public/heart-rate-pulse-graph.svg'
import hands from '@/public/business-handshake--deal-contract-business-money-payment-agreement.svg'
import brain from '@/public/brain-cognitive--health-medical-brain-cognitive-specialities.svg'
import wave from '@/public/tidal-wave--nature-ocean-wave.svg'
import volc from '@/public/volcano--nature-eruption-erupt-mountain-volcano-lava-magma-explosion.svg'
import Slider from "./components/slider";
import whatsapp from '@/public/whatsapp.svg'

import foto3 from '@/public/foto3.png'
import fotomobile from '@/public/mobile-foto.png'
import Fotoinsquare from "./components/fotoinround";
import fotofooter from '@/public/mobil-foot.png'
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start w-full h-max mt-14 md:mt-40 container max-w-[1650px] mx-auto ">
      <section id="about" className="flex flex-col justify-center self-center p-4 md:flex-row md:gap-10 bg-white max-w-[1450px] w-full rounded-3xl overflow-hidden md:overflow-visible">
          <div className="order-1 md:hidden flex flex-col w-full items-center">
            <h2 className="whitespace-nowrap text-xl md:text-4xl pb-4 self-center">Георгий Меньшиков</h2>
            <h1 className="text-3xl font-bold text-[#31322C] tracking-[0.03em] ">ПСИХОТЕРАПЕВТ</h1>
            <h3 className="text-sm pb-12">с высшим медицинским образованием</h3>
          </div>
          <div className="flex flex-col order-3 md:order-1 w-full md:w-1/2 lg:w-3/5 items-start md:py-20 md:pl-3 md:pr-5 lg:pl-10 xl:pl-20 xl:pr-20">
            <h2 className="hidden md:block whitespace-nowrap text-2xl lg:text-4xl pb-9 self-center">Георгий Меньшиков</h2>
            <h1 className="hidden md:block md:text-2xl lg:text-6xl text-[#31322C] tracking-[0.03em] font-semibold">ПСИХОТЕРАПЕВТ</h1>
            <h3 className="hidden md:block text-2xl pb-12">с высшим медицинским образованием</h3>
            <p className="text-sm mt-8 mb-6 md:mt-0 md:pb-6 tracking-normal">Помогаю справляться с тревогой, стрессом и жизненными трудностями с опорой на научно обоснованные методы.<br/> Вместе мы найдем решения, которые приведут к лучшему качеству жизни.</p>
            <UiButton id='contacts' size="lg" variant="primary">Записаться на консультацию</UiButton>
          </div>
          <Fotoinsquare className='order-2 md:flex md:order-2 md:w-1/2 lg:w-2/5'/>
      </section>
      <section className="w-full mt-12 p-4 md:mt-0 md:mb-36 overflow-hidden">
        <div className="grid md:grid-cols-2 md:mt-36 md:mx-24 mb-6 md:mb-20 ">
          <h2 className="text-2xl text-[#31322C] mb-3 md:mb-0 md:text-3xl font-semibold">КАК Я РАБОТАЮ?</h2>
          <p className="text-xs tracking-tight md:text-2xl font-medium">Я провожу психотерапевтические сессии онлайн через видеозвонки, что позволяет вам работать с запросом в комфортных условиях. </p>
        </div>
        <div className="md:hidden relative border-l-2 border-dashed border-[#4C4E41] ml-2 pl-6">
            {[
              { title: "Бесплатная сессия", subtitle: "Короткое знакомство и определение запроса. (Длительность 15 минут)" },
              { title: "Вступительные сессии", subtitle: "Обсуждаем ситуацию, намечаем план работы. (1-3 встречи)" },
              { title: "Регулярные сессии", subtitle: "Глубокая проработка мыслей, эмоций и поведения." },
              { title: "Домашние задания", subtitle: "Техники и рекомендации для работы между встречами." },
              { title: "Оценка прогресса", subtitle: "Подводим итоги и закрепляем изменения, профилактические встречи." },
            ].map((item, index) => (
              <div key={index} className="relative mb-5 mr-4">
                <div className="absolute -left-9 top-0 w-6 h-6 bg-white text-[#6B8E4E] rounded-full flex items-center justify-center font-semibold">{index + 1}</div>
                <h3 className="text-[#31322C] font-semibold text-lg mt-[-3]">{item.title}</h3>
                <p className="text-xs text-[#31322C]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        <div className="hidden md:block">
          <div className="flex ml-24 gap-24">
            <div className="w-96"><h3 className="text-xl font-semibold">Бесплатная сессия</h3><p>Короткое знакомство и определение запроса. (Длительность 15 минут)</p></div>
            <div className="w-96"><h3 className="text-xl font-semibold">Регулярные сессии</h3><p>Глубокая проработка мыслей, эмоций и поведения.</p></div>
            <div className="w-96"><h3 className="text-xl font-semibold">Оценка прогресса</h3><p>Подводим итоги и закрепляем изменения, профилактические встречи.</p></div>
          </div>
          <Image src={Union} alt="way of psyhotherapy" loading="lazy"/>
          <div className="flex justify-center gap-24">
            <div className="w-96"><h3 className="text-xl font-semibold">Вступительные сессии</h3><p>Обсуждаем ситуацию, намечаем план работы. (1-3 встречи)</p></div>
            <div className="w-96"><h3 className="text-xl font-semibold">Домашние задания</h3><p>Техники и рекомендации для работы между встречами.</p></div>
          </div>
        </div>
      </section>
      <section id='education' className="w-full flex md:gap-5 bg-white rounded-3xl p-4 mb-6 md:py-16 md:px-20">
        <div className="md:w-1/2">
          <h2 className="text-2xl text-[#31322C] md:text-3xl font-semibold mb-6">ОБО МНЕ</h2>
          <p className="text-xs md:text-2xl font-medium mb-2 md:mb-14">Я врач-психотерапевт с опытом работы более 8 лет в сфере ментального здоровья.</p>
          <Image src={fotomobile} className="md:hidden w-full mb-6" alt='foto of psychotherapy' priority/>
          <div className="relative ml-3 md:ml-0 border-l border-black/50 pl-6">
            {[
              { year: "2009 - 2015", title: "Санкт-Петербургский Государственный Университет. Медицинский факультет", subtitle: "Лечебное дело" },
              { year: "2015 - 2016", title: "Северо-Западный Государственный Медицинский Университет им. И.И.Мечникова", subtitle: "Психиатрия" },
              { year: "2018", title: "Северо-Западный Государственный Медицинский Университет им. И.И.Мечникова", subtitle: "Наркология" },
              { year: "2020", title: "Межрегиональный институт дополнительного образования", subtitle: "Психотерапия" },
              { year: "2022", title: "Академия когнитивно-поведенческой психотерапии", subtitle: "Психотерапия" },
            ].map((item, index) => (
              <div key={index} className="relative md:mb-5 md:mr-16">
                <div className="absolute -left-9 top-0 w-6 h-6 bg-[#6B8E4E] rounded-full"></div>
                <p className="text-base text-start text-[#6B8E4E] font-medium">{item.year}</p>
                <h3 className="text-sm font-semibold leading-tight md:leading-normal text-black md:text-lg">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-2 mb-6">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative rounded-full w-full aspect-square bg-[#4C4E41] overflow-hidden">
            <Image loading="lazy" src={foto2} className="absolute object-cover w-[80%] left-24 -bottom-6" 
             alt='foto of psychotherapy'/>
          </div>
        </div>
      </section>
      <section id="problems" className="bg-[#F6F3EC] md:py-16 md:px-8 lg:px-20 overflow-hidden">
          <div className="md:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:mt-8">
              <div className="p-4 md:p-6">
                <h2 className="text-2xl text-[#31322C] md:text-3xl font-semibold md:mb-6">
                  КАКИЕ ЗАПРОСЫ Я ПОМОГАЮ РЕШАТЬ?
                </h2>
                <UiButton className="hidden md:block" size="lg" variant="primary">Записаться на консультацию</UiButton>
              </div>
              {[
                {
                  title: "ТРЕВОГА И ПАНИЧЕСКИЕ АТАКИ",
                  description:
                    "Избавление от навязчивых переживаний, снижение уровня тревожности и обучение стратегиям саморегуляции.",
                  icon: heart,
                  highlighted: false,
                },
                {
                  title: "ЭМОЦИОНАЛЬНОЕ ВЫГОРАНИЕ",
                  description:
                    "Помощь в восстановлении ресурсов, снижении стресса и поиске баланса между работой и личной жизнью.",
                  icon: volc,
                  highlighted: true,
                },
                {
                  title: "СЛОЖНОСТИ В ОТНОШЕНИЯХ",
                  description:
                    "Разбор деструктивных сценариев, улучшение коммуникации и построение здоровых границ.",
                  icon: hands,
                  highlighted: false,
                },
                {
                  title: "НИЗКАЯ САМООЦЕНКА",
                  description:
                    "Формирование уверенности в себе, работа с внутренним критиком и развитие самопринятия.",
                  icon: brain,
                  highlighted: false,
                },
                {
                  title: "ДЕПРЕССИВНЫЕ СОСТОЯНИЯ",
                  description:
                    "Выход из состояния апатии, восстановление мотивации и возвращение к активной жизни.",
                  icon: wave,
                  highlighted: false,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`mx-4 md:mx-0 p-6 rounded-xl ${
                    item.highlighted
                      ? "bg-[#4C4E41] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <span className="text-3xl"><Image src={item.icon} alt="icon"/></span>
                  <h3 className="font-semibold text-lg mt-3">{item.title}</h3>
                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
              ))}
              <UiButton id='contacts' className="md:hidden mx-4" size="lg" variant="primary">Записаться на консультацию</UiButton>
          </div>
        </div>
      </section>
      <section id="review" className="bg-[#F6F3EC] md:px-8 lg:px-20 overflow-hidden">
        <Slider />
        {/* <SS /> */}
      </section>
      <section id='service' className="bg-[#F6F3EC]  md:py-16 md:px-8 lg:px-20">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3 md:mt-8">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 md:mb-6 text-[#31322C]">
                  УСЛУГИ И ЦЕНЫ
                </h2>
                <p className="text-xs tracking-tight font-medium">Выберите формат работы, который вам подходит: разовая консультация или регулярная терапия 
                по выгодному пакету.</p>
              </div>
              {[
                {
                  title: "Ознакомительная сессия",
                  description:
                    "Бесплатная 15-минутная встреча, чтобы познакомиться, определить ваш запрос и понять, комфортен ли вам формат работы.",
                  time: '15 МИНУТ',
                  price: 'БЕСПЛАТНО',
                },
                {
                  title: "Индивидуальная сессия",
                  description:
                    "Полноценная терапевтическая сессия, после которой вы получите домашние задания для проработки между встречами.",
                  time: "50 МИНУТ",
                  price: "3000 ₽",
                },
                {
                  title: "Пакет из 4 сессий на месяц",
                  description:
                    "Подходит для тех, кто посещает сессии регулярно. 4 индивидуальные встречи в течение месяца помогут глубже проработать запрос и закрепить результаты.",
                  time: "50 МИНУТ",
                  price: "10000 ₽",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`mx-4 md:mx-0 p-6 rounded-xl bg-white text-black`}
                >
                  <h3 className="font-semibold text-lg md:mt-3">{item.title.toUpperCase()}</h3>
                  <p className="mt-2 text-sm mb-6">{item.description}</p>
                  <div className="flex justify-between">
                    <div>{item.time.toUpperCase()}</div>
                    <div className="text-white bg-[#6B8E4E] px-4 py-2 rounded-3xl">{item.price.toUpperCase()}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section id='contacts' className="w-full pt-12 md:py-16 px-4 md:px-8 lg:px-20 flex justify-center">
        <div className="md:w-3/5 flex flex-col-reverse items-center justify-center md:flex-col">
          <Image className="md:hidden mb-12" src={fotofooter} alt='foto' />
          <div className="text-xs tracking-tight font-medium md:w-1/2 bg-white p-6 md:ml-9 mt-10 md:mb-20 rounded-lg">
              <p>Если у вас остались вопросы или вы хотите записаться на сессию, мы можем связаться любым удобным для вас способом</p>
          </div>
          <div className="flex justify-center md:bg-primary w-full rounded-lg md:p-10">
              <div className="flex flex-col items-center gap-6 md:gap-12 md:w-1/2">
                <h2 className="text-3xl font-semibold text-nowrap md:text-white">СПОСОБЫ СВЯЗИ</h2>
                <div className="w-full md:w-auto">
                  <Link href='https://wa.me/message/UH6UEJ2QPWAGD1' className="w-full mb-12 flex justify-center text-2xl font-semibold bg-primary text-white px-6 py-3 rounded-full outline transition-colors hover:scale-110">
                    <Image className="mr-3" src={whatsapp} alt='whatsapp' />
                    WhatsApp
                  </Link>
                  <Link href='https://t.me/cbt_doc' className="w-full flex justify-center items-center text-2xl font-semibold bg-primary text-white md:text-primary md:bg-white px-6 py-3 rounded-full hover:scale-110">
                    <svg className='fill-white md:fill-primary mr-3' width="23" height="19" viewBox="0 0 23 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.45379 7.84883C8.35936 5.27585 12.2973 3.57959 14.2677 2.76003C19.8935 0.420046 21.0625 0.0135654 21.8244 0.000143111C21.992 -0.00280896 22.3667 0.0387227 22.6094 0.235669C22.8144 0.401967 22.8708 0.626612 22.8978 0.78428C22.9247 0.941949 22.9583 1.30112 22.9316 1.58177C22.6268 4.78504 21.3076 12.5585 20.6365 16.1462C20.3525 17.6643 19.7934 18.1733 19.2521 18.2231C18.0757 18.3314 17.1824 17.4457 16.0429 16.6988C14.26 15.53 13.2527 14.8025 11.5221 13.662C9.52199 12.3439 10.8186 11.6195 11.9584 10.4356C12.2567 10.1258 17.44 5.41117 17.5403 4.98348C17.5529 4.92999 17.5645 4.7306 17.4461 4.62532C17.3276 4.52004 17.1528 4.55604 17.0266 4.58467C16.8478 4.62526 13.9995 6.50789 8.48176 10.2326C7.67328 10.7877 6.94099 11.0582 6.28488 11.044C5.56157 11.0284 4.17021 10.6351 3.13588 10.2988C1.86723 9.88646 0.858936 9.66842 0.946736 8.96806C0.992468 8.60326 1.49482 8.23019 2.45379 7.84883Z"/>
                    </svg>Telegram
                  </Link>
                </div>
              </div>
              <div className="hidden md:block md:relative w-full">
                <Image loading="lazy" className='hidden md:block absolute md:bottom-[-20] lg:bottom-[-22%]  xl:bottom-[-22.2%] 2xl:bottom-[-24.6%]' src={foto3} alt='profile'/>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}


