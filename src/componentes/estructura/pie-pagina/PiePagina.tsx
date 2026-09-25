import Image from "next/image";

export function PiePagina() {
  return (
    <footer id="contacto" className="w-full">
      <div
        className="
          relative
          flex
          min-h-[290px]
          items-center
          overflow-hidden
          bg-[url('/imagenes/pie-pagina/fondo-pie-pagina.png')]
          bg-cover
          bg-center
          text-white
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(18,10,6,0.72),rgba(25,14,8,0.48),rgba(25,14,8,0.30))]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-[88%]
            grid-cols-1
            items-center
            gap-9
            py-12

            md:w-[90%]
            md:py-14

            lg:w-[92%]
            lg:max-w-[1700px]
            lg:grid-cols-[1fr_auto_1fr]
            lg:gap-[70px]
            lg:py-0
          "
        >
          <div
            className="
              flex
              flex-col
              items-center

              lg:justify-self-start
              lg:items-start
            "
          >
            <h2
              className="
                m-0
                max-w-[300px]
                text-center
                font-serif
                text-[34px]
                font-normal
                leading-[0.96]

                sm:text-[40px]

                lg:max-w-[430px]
                lg:text-left
                lg:text-[clamp(38px,3.2vw,58px)]
                lg:leading-[0.94]
              "
            >
              EL MEZCAL
              <br />
              TAMBIÉN ES
              <br />
              ENCUENTRO
            </h2>

            <div
              className="
                mt-5
                h-[3px]
                w-[55px]
                bg-[var(--color-oro-maguey)]

                lg:mt-[22px]
                lg:w-[60px]
              "
            />
          </div>

          <div
            className="
              relative
              z-20
              flex
              w-full
              items-center
              justify-center
              py-2

              lg:w-auto
              lg:justify-self-center
              lg:py-0
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-8

                sm:gap-10

                lg:gap-[30px]
              "
            >
              <a
                href="#"
                aria-label="Instagram de Campo Negro"
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  text-white
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:scale-110

                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white

                  lg:h-[26px]
                  lg:w-[26px]
                "
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="WhatsApp de Campo Negro"
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  text-white
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:scale-110

                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white

                  lg:h-[26px]
                  lg:w-[26px]
                "
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2a9.7 9.7 0 0 0-8.4 14.55L2.3 21.7l5.28-1.38A9.7 9.7 0 1 0 12 2Zm0 17.7a8 8 0 0 1-4.08-1.12l-.29-.17-3.13.82.84-3.05-.19-.31A8 8 0 1 1 12 19.7Zm4.4-6c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Facebook de Campo Negro"
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  text-white
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:scale-110

                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white

                  lg:h-[26px]
                  lg:w-[26px]
                "
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8h3.4Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-4

              lg:flex-row
              lg:justify-self-end
              lg:gap-7
            "
          >
            <div
              aria-hidden="true"
              className="
                h-px
                w-[120px]
                shrink-0
                bg-white/55

                lg:h-[130px]
                lg:w-px
              "
            />

            <div
              className="
                flex
                items-center
                justify-center
                gap-4

                lg:gap-7
              "
            >
              <Image
                src="/imagenes/marca/ivan-betancourt.png"
                alt="Iván Betancourt"
                width={260}
                height={110}
                className="
                  h-auto
                  w-[135px]
                  shrink-0
                  object-contain

                  sm:w-[165px]

                  lg:w-[250px]
                "
              />

              <Image
                src="/imagenes/marca/logo-principal.png"
                alt="Campo Negro 1430"
                width={130}
                height={130}
                className="
                  h-auto
                  w-[70px]
                  shrink-0
                  object-contain

                  sm:w-[85px]

                  lg:w-[130px]
                "
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="
          flex
          w-full
          items-center
          border-t
          border-[#c69c45]/20
          bg-[#0c0806]
          py-2
        "
      >
        <div
          className="
            mx-auto
            grid
            w-[92%]
            grid-cols-[auto_1fr]
            items-center
            gap-x-3
            gap-y-1

            sm:grid-cols-[auto_1fr_auto]

            lg:w-[96%]
            lg:max-w-[1760px]
            lg:gap-[14px]
          "
        >
          <Image
            src="/imagenes/marca/logo-principal.png"
            alt="Campo Negro"
            width={38}
            height={38}
            className="
              h-7
              w-7
              object-contain
            "
          />

          <p
            className="
              m-0
              text-[10px]
              leading-none
              text-white/60

              lg:text-[11px]
            "
          >
            © {new Date().getFullYear()} Campo Negro 1430
          </p>

          <p
            className="
              col-span-2
              m-0
              text-center
              text-[9px]
              leading-none
              text-white/50

              sm:col-span-1
              sm:text-right

              lg:text-[11px]
              lg:text-white/60
            "
          >
            Mezcal artesanal · Oaxaca, México
          </p>
        </div>
      </div>
    </footer>
  );
}