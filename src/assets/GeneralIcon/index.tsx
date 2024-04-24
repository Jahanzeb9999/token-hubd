import { GeneralIconType } from "@/shared/types";
import { FC } from "react";
import Image from 'next/image';

interface GeneralIconProps {
  type: GeneralIconType;
  className?: string;
  pathClassName?: string;
  onClick?: () => void;
}

export const GeneralIcon: FC<GeneralIconProps> = ({
  type,
  className,
  pathClassName,
  onClick,
}) => {
  switch (type) {
    case GeneralIconType.Coreum:
      return (
        <svg className={className} onClick={onClick} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_12040_91751)">
            <rect width="19" height="19" rx="9.5" fill="#25D695"/>
            <path d="M9.49998 7.97998C9.19935 7.97998 8.90548 8.06913 8.65551 8.23615C8.40555 8.40317 8.21073 8.64056 8.09568 8.9183C7.98064 9.19605 7.95054 9.50167 8.00919 9.79652C8.06784 10.0914 8.2126 10.3622 8.42518 10.5748C8.63775 10.7874 8.90859 10.9321 9.20344 10.9908C9.4983 11.0494 9.80392 11.0193 10.0817 10.9043C10.3594 10.7892 10.5968 10.5944 10.7638 10.3444C10.9308 10.0945 11.02 9.80061 11.02 9.49998C11.02 9.09685 10.8598 8.71023 10.5748 8.42518C10.2897 8.14012 9.90311 7.97998 9.49998 7.97998Z" fill="white"/>
            <path d="M9.50001 3.41993C8.70142 3.41894 7.9105 3.57575 7.17269 3.88133C6.43488 4.18692 5.76471 4.63526 5.20068 5.20061L7.35149 7.35141C7.77652 6.92595 8.31819 6.63611 8.90797 6.51856C9.49776 6.40102 10.1092 6.46104 10.6648 6.69104C11.2205 6.92104 11.6955 7.31068 12.0296 7.81068C12.3638 8.31067 12.5422 8.89854 12.5422 9.49993C12.5422 10.1013 12.3638 10.6892 12.0296 11.1892C11.6955 11.6892 11.2205 12.0788 10.6648 12.3088C10.1092 12.5388 9.49776 12.5988 8.90797 12.4813C8.31819 12.3637 7.77652 12.0739 7.35149 11.6484L5.20068 13.7992C5.9077 14.5062 6.77816 15.0279 7.73496 15.3182C8.69176 15.6084 9.70536 15.6582 10.686 15.4631C11.6666 15.268 12.584 14.8341 13.3569 14.1998C14.1298 13.5655 14.7343 12.7504 15.117 11.8267C15.4996 10.9029 15.6485 9.8991 15.5505 8.90406C15.4525 7.90903 15.1107 6.95352 14.5552 6.12217C13.9997 5.29081 13.2478 4.60928 12.366 4.13793C11.4843 3.66658 10.4999 3.41996 9.50001 3.41993Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_12040_91751">
              <rect width="19" height="19" rx="9.5" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      );
    case GeneralIconType.Network:
      return (
        <svg className={className} onClick={onClick} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.15" d="M0 10.5C0 16.299 4.70101 21 10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5Z" fill="#25D695"/>
          <path d="M6.52525 4.925C6.19418 4.925 5.925 5.1943 5.925 5.52513C5.925 5.85633 6.19419 6.12538 6.52525 6.12538C11.1291 6.12538 14.8745 9.87103 14.8745 14.4749C14.8745 14.806 15.1437 15.075 15.4749 15.075C15.8059 15.075 16.0751 14.806 16.0751 14.4749C16.075 9.20902 11.7911 4.925 6.52525 4.925Z" fill="#25D695" stroke="#25D695" strokeWidth="0.15"/>
          <path d="M7.14811 8.77754C6.75043 8.77754 6.42708 9.10089 6.42708 9.49858C6.42708 9.89613 6.75042 10.2196 7.14811 10.2196C9.37448 10.2196 11.1856 12.0308 11.1856 14.2568C11.1856 14.6545 11.5088 14.9779 11.9066 14.9779C12.3043 14.9779 12.6275 14.6545 12.6275 14.2568C12.6274 11.2356 10.1695 8.77754 7.14811 8.77754Z" fill="#25D695" stroke="#25D695" strokeWidth="0.15"/>
          <path d="M9.00217 14.6729C9.00217 13.2922 7.88261 12.1729 6.50208 12.1729V14.6729H9.00217Z" fill="#25D695"/>
        </svg>
      );
    case GeneralIconType.CheckMark:
      return (
        <svg className={className} onClick={onClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.14673 15.3502C6.8791 15.3507 6.61401 15.2983 6.36669 15.196C6.11937 15.0938 5.89469 14.9436 5.70556 14.7543L1.90527 10.9547L2.86605 9.99322L6.66634 13.7935C6.79376 13.9209 6.96655 13.9924 7.14673 13.9924C7.3269 13.9924 7.49969 13.9209 7.62711 13.7935L17.135 4.28564L18.0957 5.24642L8.58789 14.7543C8.39876 14.9436 8.17408 15.0938 7.92676 15.196C7.67944 15.2983 7.41435 15.3507 7.14673 15.3502Z" fill="#25D695"/>
        </svg>
      );
    case GeneralIconType.Info:
      return (
        <svg className={className} onClick={onClick} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={pathClassName} d="M3.59452 12.4999C3.59452 7.85763 7.35779 4.09437 12 4.09437C16.6422 4.09437 20.4055 7.85763 20.4055 12.4999C20.4055 17.1421 16.6422 20.9054 12 20.9054C7.35779 20.9054 3.59452 17.1421 3.59452 12.4999ZM12 2.97129C6.73753 2.97129 2.47144 7.23738 2.47144 12.4999C2.47144 17.7623 6.73753 22.0284 12 22.0284C17.2625 22.0284 21.5286 17.7623 21.5286 12.4999C21.5286 7.23738 17.2625 2.97129 12 2.97129Z" fill="#5E6773" stroke="#5E6773" strokeWidth="0.2" strokeLinecap="round"/>
          <path className={pathClassName} d="M12.1333 10.712C12.1935 10.5574 12.1148 10.4665 12.0479 10.48C11.7387 10.5429 11.5505 10.9531 11.3971 10.9531C11.3369 10.9531 11.2856 10.8926 11.2856 10.8412C11.2856 10.6862 11.4325 10.6004 11.5434 10.4885C11.8853 10.1618 12.33 9.91224 12.826 9.91224C13.1933 9.91224 13.587 10.1359 13.2789 10.9704L11.4794 15.7557C11.4281 15.8846 11.3342 16.1 11.3342 16.2374C11.3342 16.2976 11.3682 16.3576 11.4368 16.3576C11.693 16.3576 11.8717 15.9447 11.9916 15.9447C12.0343 15.9447 12.0938 15.9963 12.0938 16.0737C12.0938 16.3228 11.3852 17.0716 10.5216 17.0716C10.2138 17.0716 10 16.9256 10 16.5984C10 16.1856 10.2908 15.4801 10.3506 15.3339L12.1333 10.712ZM12.8345 8.61672C12.8345 8.23826 13.1593 7.92871 13.5355 7.92871C13.8774 7.92871 14.1255 8.16076 14.1255 8.51348C14.1255 8.90929 13.8007 9.20167 13.4159 9.20167C13.0654 9.20167 12.8345 8.96935 12.8345 8.61672Z" fill="#5E6773"/>
        </svg>
      );
    case GeneralIconType.Error:
      return (
        <Image
          className={className}
          src="/images/error.png"
          width={18}
          height={18}
          alt="Error"
        />
      );
    case GeneralIconType.Close:
      return (
        <svg className={className} onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={pathClassName} fillRule="evenodd" clipRule="evenodd" d="M3.07486 2.18439C2.82901 1.93854 2.4304 1.93854 2.18455 2.18439C1.9387 2.43024 1.9387 2.82885 2.18455 3.0747L6.10985 7L2.18455 10.9253C1.9387 11.1712 1.9387 11.5698 2.18455 11.8156C2.4304 12.0615 2.82901 12.0615 3.07486 11.8156L7.00016 7.89031L10.9253 11.8155C11.1712 12.0613 11.5698 12.0613 11.8156 11.8155C12.0615 11.5696 12.0615 11.171 11.8156 10.9251L7.89047 7L11.8156 3.07485C12.0615 2.829 12.0615 2.4304 11.8156 2.18454C11.5698 1.93869 11.1712 1.93869 10.9253 2.18454L7.00016 6.10969L3.07486 2.18439Z" fill="#5E6773"/>
        </svg>
      );
    case GeneralIconType.Percentage:
      return (
        <svg className={className} onClick={onClick} width="354" height="48" viewBox="0 0 354 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="353" height="47" rx="9.5" stroke="#1B1D23"/>
          <path className={pathClassName} d="M28.368 24.272C28.368 25.5093 28.24 26.5653 27.984 27.44C27.728 28.3147 27.3173 28.9867 26.752 29.456C26.1973 29.9253 25.4667 30.16 24.56 30.16C23.2693 30.16 22.3147 29.6427 21.696 28.608C21.088 27.5627 20.784 26.1173 20.784 24.272C20.784 23.0347 20.9067 21.9787 21.152 21.104C21.408 20.2293 21.8133 19.5627 22.368 19.104C22.9227 18.6347 23.6533 18.4 24.56 18.4C25.84 18.4 26.7947 18.9173 27.424 19.952C28.0533 20.976 28.368 22.416 28.368 24.272ZM22.192 24.272C22.192 25.84 22.368 27.0133 22.72 27.792C23.0827 28.5707 23.696 28.96 24.56 28.96C25.4133 28.96 26.0213 28.576 26.384 27.808C26.7573 27.0293 26.944 25.8507 26.944 24.272C26.944 22.7147 26.7573 21.5467 26.384 20.768C26.0213 19.9893 25.4133 19.6 24.56 19.6C23.696 19.6 23.0827 19.9893 22.72 20.768C22.368 21.5467 22.192 22.7147 22.192 24.272Z" fill="#EEEEEE"/>
          <path className={pathClassName} d="M322.95 19.9799C322.95 18.432 323.999 17.5 325.38 17.5C326.778 17.5 327.81 18.432 327.81 19.9799C327.81 21.5444 326.778 22.4764 325.38 22.4764C323.999 22.4764 322.95 21.5444 322.95 19.9799ZM325.38 18.432C324.648 18.432 324.165 18.9313 324.165 19.9799C324.165 21.0118 324.648 21.5444 325.38 21.5444C326.112 21.5444 326.612 21.0118 326.612 19.9799C326.612 18.9313 326.112 18.432 325.38 18.432ZM324.431 29.3003L331.172 17.6831H332.67L325.929 29.3003H324.431ZM329.324 27.0035C329.324 25.439 330.356 24.5069 331.754 24.5069C333.136 24.5069 334.168 25.439 334.168 27.0035C334.168 28.5513 333.136 29.5 331.754 29.5C330.356 29.5 329.324 28.5513 329.324 27.0035ZM331.738 25.4556C331.005 25.4556 330.506 25.9549 330.506 27.0035C330.506 28.0354 331.005 28.5347 331.738 28.5347C332.47 28.5347 332.969 28.0354 332.969 27.0035C332.969 25.9549 332.47 25.4556 331.738 25.4556Z" fill="#5E6773"/>
        </svg>
      );
    case GeneralIconType.ArrowRight:
      return (
        <svg className={className} onClick={onClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={pathClassName} fillRule="evenodd" clipRule="evenodd" d="M7.80906 15.8943C8.088 16.1733 8.54026 16.1733 8.81921 15.8943L13.87 10.8436C14.3349 10.3787 14.3349 9.6249 13.87 9.15999L8.81921 4.10923C8.54026 3.83028 8.088 3.83028 7.80906 4.10923C7.53011 4.38817 7.53011 4.84043 7.80906 5.11938L12.6915 10.0018L7.80906 14.8842C7.53011 15.1631 7.53011 15.6154 7.80906 15.8943Z" fill="#5E6773"/>
        </svg>
      );
    default:
      return null;
  }
}
