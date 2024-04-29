import { ButtonIconColorScheme, ButtonIconType, WalletType } from "@/shared/types";
import { FC } from "react";

interface WalletIconProps {
  type: WalletType;
  className?: string;
}

export const WalletIcon: FC<WalletIconProps> = ({
  type,
  className,
}) => {
  switch (type) {
    case WalletType.Cosmostation:
    case WalletType.CosmostationMobile:
      return (
        <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="white"/>
          <path d="M30 2H2V30H30V2Z" fill="white"/>
          <path d="M22.2345 5.16821H13.2568C13.0331 5.16843 12.8134 5.22739 12.6197 5.3392C12.426 5.45101 12.265 5.61175 12.1529 5.80532L7.66401 13.5797C7.55178 13.7733 7.49268 13.9931 7.49268 14.2168C7.49268 14.4406 7.55178 14.6603 7.66401 14.8539L12.1529 22.6283L14.3604 21.3541L10.2415 14.2168L13.9935 7.71665H21.5009L25.623 14.8539L27.8305 13.5796L23.3382 5.80532C23.2264 5.61151 23.0656 5.45058 22.8718 5.33873C22.6781 5.22689 22.4582 5.16807 22.2345 5.16821Z" fill="#9C6CFF"/>
          <path d="M19.8207 9.39331L17.6132 10.6675L21.7353 17.8048L17.9833 24.3049H10.476L6.35395 17.1677L4.14648 18.4419L8.6354 26.2163C8.74725 26.41 8.90814 26.5709 9.10189 26.6828C9.29564 26.7946 9.51542 26.8535 9.73913 26.8534H18.717C18.9406 26.8532 19.1603 26.7942 19.354 26.6824C19.5477 26.5706 19.7086 26.4099 19.8207 26.2163L24.3096 18.4419C24.4219 18.2484 24.481 18.0286 24.481 17.8048C24.481 17.5811 24.4219 17.3613 24.3096 17.1677L19.8207 9.39331Z" fill="#05D2DD"/>
        </svg>
      );
    case WalletType.Keplr:
    case WalletType.KeplrMobile:
      return (
        <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_12041_109683)">
            <mask id="mask0_12041_109683" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
              <path d="M32 0H0V32H32V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_12041_109683)">
              <path d="M24.7272 0H7.27272C3.25611 0 0 3.25611 0 7.27272V24.7272C0 28.7439 3.25611 32 7.27272 32H24.7272C28.7439 32 32 28.7439 32 24.7272V7.27272C32 3.25611 28.7439 0 24.7272 0Z" fill="url(#paint0_linear_12041_109683)"/>
              <path d="M24.7272 0H7.27272C3.25611 0 0 3.25611 0 7.27272V24.7272C0 28.7439 3.25611 32 7.27272 32H24.7272C28.7439 32 32 28.7439 32 24.7272V7.27272C32 3.25611 28.7439 0 24.7272 0Z" fill="url(#paint1_radial_12041_109683)"/>
              <path d="M24.7272 0H7.27272C3.25611 0 0 3.25611 0 7.27272V24.7272C0 28.7439 3.25611 32 7.27272 32H24.7272C28.7439 32 32 28.7439 32 24.7272V7.27272C32 3.25611 28.7439 0 24.7272 0Z" fill="url(#paint2_radial_12041_109683)"/>
              <path d="M24.7272 0H7.27272C3.25611 0 0 3.25611 0 7.27272V24.7272C0 28.7439 3.25611 32 7.27272 32H24.7272C28.7439 32 32 28.7439 32 24.7272V7.27272C32 3.25611 28.7439 0 24.7272 0Z" fill="url(#paint3_radial_12041_109683)"/>
              <path d="M13.1446 24.58V17.1574L20.3568 24.58H24.3693V24.3869L16.0733 15.933L23.7308 7.91282V7.81812H19.6923L13.1446 14.9054V7.81812H9.89307V24.58H13.1446Z" fill="#EEEEEE"/>
            </g>
          </g>
          <defs>
            <linearGradient id="paint0_linear_12041_109683" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1FD1FF"/>
              <stop offset="1" stopColor="#1BB8FF"/>
            </linearGradient>
            <radialGradient id="paint1_radial_12041_109683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.52855 30.7875) rotate(-45.1556) scale(51.3179 52.0856)">
              <stop stopColor="#232DE3"/>
              <stop offset="1" stopColor="#232DE3" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="paint2_radial_12041_109683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.2765 31.8173) rotate(-138.45) scale(32.0866 48.9231)">
              <stop stopColor="#8B4DFF"/>
              <stop offset="1" stopColor="#8B4DFF" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="paint3_radial_12041_109683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.7334 0.237332) rotate(90) scale(25.2293 61.2132)">
              <stop stopColor="#24D5FF"/>
              <stop offset="1" stopColor="#1BB8FF" stopOpacity="0"/>
            </radialGradient>
            <clipPath id="clip0_12041_109683">
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      );
    case WalletType.Leap:
    case WalletType.LeapMobile:
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_12041_109711)">
            <mask id="mask0_12041_109711" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
              <path d="M16.1439 0.399902H3.8559C1.94721 0.399902 0.399902 1.94721 0.399902 3.8559V16.1439C0.399902 18.0526 1.94721 19.5999 3.8559 19.5999H16.1439C18.0526 19.5999 19.5999 18.0526 19.5999 16.1439V3.8559C19.5999 1.94721 18.0526 0.399902 16.1439 0.399902Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_12041_109711)">
              <mask id="mask1_12041_109711" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="14">
                <path d="M19.2137 0.829102H0.781738V13.1171H19.2137V0.829102Z" fill="white"/>
              </mask>
              <g mask="url(#mask1_12041_109711)">
                <path d="M17.3892 9.31013C17.3892 12.0164 14.1704 13.1161 10.1738 13.1161C6.17727 13.1161 2.91162 12.0164 2.91162 9.31013C2.91162 6.60391 6.15385 4.41406 10.1504 4.41406C14.147 4.41406 17.3892 6.60868 17.3892 9.31013Z" fill="#4BAF74"/>
                <path d="M16.6546 3.4181C16.6546 1.99326 15.5207 0.836182 14.1245 0.836182C13.3374 0.836182 12.6346 1.20434 12.1707 1.7781C11.5382 1.63466 10.8635 1.55338 10.1654 1.55338C9.46732 1.55338 8.79263 1.62988 8.1601 1.7781C7.69157 1.20434 6.98878 0.836182 6.20633 0.836182C4.81012 0.836182 3.67627 1.99326 3.67627 3.4181C3.67627 3.88667 3.7981 4.32176 4.00892 4.69949C3.80745 5.13937 3.69969 5.60794 3.69969 6.09562C3.69969 8.60584 6.59522 10.6379 10.1654 10.6379C13.7356 10.6379 16.6311 8.60584 16.6311 6.09562C16.6311 5.60794 16.5234 5.13937 16.3219 4.69949C16.5328 4.32176 16.6546 3.88667 16.6546 3.4181Z" fill="#32DA6D"/>
                <path d="M6.0027 4.8544C6.85661 4.8544 7.54884 4.14798 7.54884 3.27656C7.54884 2.40515 6.85661 1.69873 6.0027 1.69873C5.14879 1.69873 4.45654 2.40515 4.45654 3.27656C4.45654 4.14798 5.14879 4.8544 6.0027 4.8544Z" fill="#EEEEEE"/>
                <path d="M14.2527 4.8544C15.1066 4.8544 15.7988 4.14798 15.7988 3.27656C15.7988 2.40515 15.1066 1.69873 14.2527 1.69873C13.3988 1.69873 12.7065 2.40515 12.7065 3.27656C12.7065 4.14798 13.3988 4.8544 14.2527 4.8544Z" fill="#EEEEEE"/>
                <path d="M5.17713 12.9299C5.50978 12.9299 5.77217 12.6335 5.73467 12.2988C5.59879 11.1131 5.02251 8.54548 2.48776 7.00111C-0.885665 4.94513 1.78496 12.0215 1.78496 12.0215L1.08685 12.4327C0.852584 12.5713 0.950973 12.9299 1.21804 12.9299H5.17713Z" fill="#32DA6D"/>
                <path d="M15.2437 12.9299C14.9438 12.9299 14.7095 12.6335 14.7423 12.2988C14.8595 11.1178 15.3842 8.54548 17.6706 7.00111C20.7208 4.94513 18.3079 12.0215 18.3079 12.0215L18.9404 12.4327C19.1512 12.5713 19.0622 12.9299 18.8232 12.9299H15.2437Z" fill="#32DA6D"/>
                <path d="M6.00525 3.5552C6.1605 3.5552 6.28636 3.42677 6.28636 3.26832C6.28636 3.10988 6.1605 2.98145 6.00525 2.98145C5.84998 2.98145 5.72412 3.10988 5.72412 3.26832C5.72412 3.42677 5.84998 3.5552 6.00525 3.5552Z" fill="#0D0D0D"/>
                <path d="M14.2479 3.5552C14.4032 3.5552 14.529 3.42677 14.529 3.26832C14.529 3.10988 14.4032 2.98145 14.2479 2.98145C14.0927 2.98145 13.9668 3.10988 13.9668 3.26832C13.9668 3.42677 14.0927 3.5552 14.2479 3.5552Z" fill="#0D0D0D"/>
              </g>
              <path d="M19.5999 14.3765H0.399902V21.7703H19.5999V14.3765Z" fill="#AC4BFF"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_12041_109711">
              <rect width="19.2" height="19.2" fill="white" transform="translate(0.399902 0.399902)"/>
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return null;
  }
}
