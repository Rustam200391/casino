import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  type Icon as LucideIcon,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  vk: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Frame 1321314639">
        <path
          d="M13.2166 19.0688C5.23951 19.0688 0.689583 13.6 0.5 4.5H4.49583C4.62708 11.1792 7.57284 14.0083 9.90618 14.5917V4.5H13.6688V10.2604C15.973 10.0125 18.3935 7.3875 19.2102 4.5H22.9728C22.3457 8.05833 19.7207 10.6833 17.854 11.7625C19.7207 12.6375 22.7104 14.9271 23.8479 19.0688H19.7061C18.8165 16.2979 16.6001 14.1542 13.6688 13.8625V19.0688H13.2166Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      />
    </svg>
  ),
  flag: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_2159_81836)">
        <path
          d="M1.56487 0.03125H26.4318C27.2771 0.03125 27.9655 0.737377 27.9655 1.60446V10.0001H0.03125V1.60446C0.03125 0.737377 0.719609 0.03125 1.56487 0.03125Z"
          fill="white"
        />
        <path
          d="M0.03125 10.0001H27.9705V18.3958C27.9705 19.2628 27.2822 19.969 26.4369 19.969H1.56487C0.719609 19.969 0.03125 19.2576 0.03125 18.3958V10.0001Z"
          fill="#D52B1E"
        />
        <path
          d="M0.03125 6.67725H27.9705V13.3231H0.03125V6.67725Z"
          fill="#0039A6"
        />
        <path
          d="M1.56487 0.03125H26.4318C27.2771 0.03125 27.9655 0.737377 27.9655 1.60446V18.3905C27.9655 19.2576 27.2771 19.9638 26.4318 19.9638H1.56487C0.719609 19.9638 0.03125 19.2524 0.03125 18.3905V1.60446C0.03125 0.737377 0.719609 0.03125 1.56487 0.03125Z"
          stroke="#CCCCCC"
          stroke-width="0.0606869"
          stroke-miterlimit="2.6131"
        />
      </g>
      <defs>
        <clipPath id="clip0_2159_81836">
          <rect width="28" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  group: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="83"
      viewBox="0 0 93 93"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_f_2159_81874)">
        <path
          d="M46.5 66C57.2696 66 66 57.2696 66 46.5C66 35.7304 57.2696 27 46.5 27C35.7304 27 27 35.7304 27 46.5C27 57.2696 35.7304 66 46.5 66Z"
          fill="url(#paint0_linear_2159_81874)"
        />
      </g>
      <path
        d="M46 67C57.0457 67 66 58.0457 66 47C66 35.9543 57.0457 27 46 27C34.9543 27 26 35.9543 26 47C26 58.0457 34.9543 67 46 67Z"
        fill="url(#paint1_linear_2159_81874)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.4064 37L36 40.4327V54.4627H41V57H43.8118L46.4682 54.4627H50.5318L56 49.2382V37H37.4064ZM54.1245 48.3436L50.9991 51.3282H46L43.3436 53.8655V51.3291H39.1255V38.7909H54.1245V48.3436ZM50.9991 42.2245V47.4427H49.1245V42.2245H51H50.9991ZM46 42.2245V47.4427H44.1255V42.2245H46Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_f_2159_81874"
          x="0.59375"
          y="0.59375"
          width="91.8125"
          height="91.8125"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="13.2031"
            result="effect1_foregroundBlur_2159_81874"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2159_81874"
          x1="32.7086"
          y1="32.7086"
          x2="60.2914"
          y2="60.2914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7500FF" />
          <stop offset="1" stop-color="#441081" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2159_81874"
          x1="46"
          y1="27"
          x2="46"
          y2="67"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C049DD" />
          <stop offset="1" stop-color="#6400F8" />
        </linearGradient>
      </defs>
    </svg>
  ),
  tg: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
       {...props}
    >
      <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="url     (#paint0_linear_2159_81871)"/>
      <defs>
        <linearGradient
          id="paint0_linear_2159_81871"
          x1="34.145"
          y1="5.85499"
          x2="5.85499"
          y2="34.145"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#33CCFF"/>
          <stop offset="1" stop-color="#337FFF"/>
          
      </linearGradient>
      </defs>
    </svg>
  ),
  youtube:({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 90 90"
      fill="none"
      {...props}
    >
    <g filter="url(#filter0_f_2159_81861)">
    <path d="M45.4961 64.3143C56.2678 64.3143 65 55.5135 65 44.6571C65 33.8008 56.2678 25 45.4961 25C34.7244 25 25.9922 33.8008 25.9922 44.6571C25.9922 55.5135 34.7244 64.3143 45.4961 64.3143Z" fill="url(#paint0_linear_2159_81861)"/>
     </g>
    <path d="M44.8441 65C55.8037 65 64.6882 56.0457 64.6882 45C64.6882 33.9543 55.8037 25 44.8441 25C33.8845 25 25 33.9543 25 45C25 56.0457 33.8845 65 44.8441 65Z" fill="url(#paint1_linear_2159_81861)"/>
    <path d="M55.9419 41.7933C55.9419 40.5417 55.4486 39.3413 54.5704 38.4562C53.6923 37.5712 52.5012 37.074 51.2593 37.074H39.2528C38.011 37.074 36.8199 37.5712 35.9418 38.4562C35.0636 39.3413 34.5703 40.5417 34.5703 41.7933V47.4135C34.5703 48.0332 34.6914 48.6469 34.9267 49.2195C35.1621 49.7921 35.507 50.3123 35.9418 50.7505C36.3766 51.1888 36.8928 51.5364 37.4609 51.7736C38.029 52.0107 38.6379 52.1328 39.2528 52.1328H51.2593C51.8743 52.1328 52.4832 52.0107 53.0513 51.7736C53.6194 51.5364 54.1356 51.1888 54.5704 50.7505C55.0052 50.3123 55.3501 49.7921 55.5855 49.2195C55.8208 48.6469 55.9419 48.0332 55.9419 47.4135V41.7933ZM48.8981 45.0471L43.5618 47.7362C43.3484 47.8437 42.6413 47.7362 42.6413 47.4538V41.9546C42.6413 41.7126 43.3617 41.5513 43.5618 41.6723L48.7113 44.4958C48.8847 44.5899 49.1115 44.9126 48.8981 45.0471Z" fill="white"/>
      <defs>
      <filter id="filter0_f_2159_81861" x="0.992188" y="0" width="89.0078" height="89.3143" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_2159_81861"/>
      </filter>
      <linearGradient id="paint0_linear_2159_81861" x1="59.2902" y1="30.7546" x2="31.486" y2="58.3421" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF0000"/>
        <stop offset="1" stop-color="#850000"/>
      </linearGradient>
      <linearGradient id="paint1_linear_2159_81861" x1="58.8788" y1="30.855" x2="30.5897" y2="58.9236" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF0000"/>
        <stop offset="1" stop-color="#850000"/>
      </linearGradient>
      </defs>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
  loading: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="loading"
      role="img"
      viewBox="0 0 152 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_2913_115205"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="-17"
        y="18"
        width="186"
        height="186"
      >
        <rect
          x="18"
          y="53"
          width="116"
          height="116"
          rx="58"
          stroke="url(#paint0_angular_2913_115205)"
          strokeWidth="69.6"
        />
      </mask>
      <g mask="url(#mask0_2913_115205)">
        <path
          d="M76.9854 150.177C77.5698 148.875 76.3144 147.616 75.0157 148.202C74.7343 148.332 74.5178 148.549 74.388 148.832C73.7819 150.134 75.059 151.393 76.3577 150.807C76.6391 150.676 76.8555 150.459 76.9854 150.177Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M42.6182 142.123C43.2026 140.821 41.9472 139.562 40.6485 140.148C40.3671 140.278 40.1506 140.495 40.0208 140.777C39.4147 142.079 40.6918 143.338 41.9905 142.752C42.2719 142.622 42.4883 142.405 42.6182 142.123Z"
          fill="#00D95F"
          fillOpacity="0.8"
        />
        <path
          d="M96.1491 110.223C96.735 108.921 95.4763 107.662 94.1741 108.248C93.892 108.378 93.6749 108.595 93.5447 108.877C92.9587 110.179 94.2175 111.438 95.5197 110.852C95.8018 110.722 96.0188 110.505 96.1491 110.223Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M148.353 142.002C148.937 140.7 147.682 139.441 146.383 140.027C146.101 140.158 145.885 140.375 145.755 140.657C145.149 141.959 146.426 143.218 147.725 142.632C148.006 142.502 148.223 142.285 148.353 142.002Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M124.115 171.123C123.508 169.821 124.786 168.562 126.084 169.148C126.366 169.278 126.582 169.495 126.712 169.777C127.296 171.079 126.041 172.338 124.742 171.752C124.461 171.622 124.244 171.405 124.115 171.123Z"
          fill="#00D95F"
          fillOpacity="0.8"
        />
        <path
          d="M51.6145 182.723C51.0085 181.421 52.2855 180.162 53.5842 180.748C53.8656 180.878 54.0821 181.095 54.212 181.377C54.7964 182.679 53.541 183.938 52.2423 183.352C51.9609 183.222 51.7444 183.005 51.6145 182.723Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M82.7823 45.777C83.3667 44.4748 82.1113 43.216 80.8126 43.802C80.5312 43.9322 80.3147 44.1493 80.1848 44.4314C79.5788 45.7336 80.8558 46.9924 82.1545 46.4064C82.4359 46.2762 82.6524 46.0591 82.7823 45.777Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M48.4151 37.7228C48.9995 36.4206 47.7441 35.1618 46.4454 35.7478C46.164 35.878 45.9475 36.0951 45.8177 36.3772C45.2116 37.6794 46.4887 38.9382 47.7874 38.3522C48.0687 38.222 48.2852 38.0049 48.4151 37.7228Z"
          fill="#00D95F"
          fillOpacity="0.8"
        />
        <path
          d="M129.919 66.7228C129.313 65.4206 130.59 64.1618 131.889 64.7478C132.17 64.878 132.387 65.0951 132.517 65.3772C133.101 66.6794 131.846 67.9382 130.547 67.3522C130.265 67.222 130.049 67.0049 129.919 66.7228Z"
          fill="#00D95F"
          fillOpacity="0.8"
        />
        <path
          d="M57.4192 78.3229C56.8132 77.0207 58.0902 75.7619 59.3889 76.3479C59.6703 76.4781 59.8868 76.6952 60.0166 76.9773C60.6011 78.2795 59.3456 79.5383 58.0469 78.9523C57.7656 78.8221 57.5491 78.605 57.4192 78.3229Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M3.35258 98.5023C3.937 97.2002 2.68156 95.9414 1.38283 96.5274C1.10144 96.6576 0.885035 96.8746 0.755162 97.1567C0.14909 98.4589 1.42611 99.7177 2.72484 99.1317C3.00623 99.0015 3.2227 98.7845 3.35258 98.5023Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M14.9541 156.502C15.5386 155.2 14.2831 153.941 12.9844 154.527C12.703 154.658 12.4866 154.875 12.3567 155.157C11.7507 156.459 13.0277 157.718 14.3264 157.132C14.6078 157.002 14.8243 156.785 14.9541 156.502Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M19.7084 63.7548C19.1239 62.4526 20.3793 61.1938 21.6781 61.7798C21.9594 61.91 22.1759 62.1271 22.3058 62.4092C22.9118 63.7114 21.6348 64.9701 20.3361 64.3842C20.0547 64.2539 19.8382 64.0369 19.7084 63.7548Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M34.2088 107.323C33.6228 106.021 34.8815 104.762 36.1837 105.348C36.4659 105.478 36.6829 105.695 36.8131 105.977C37.3991 107.279 36.1403 108.538 34.8381 107.952C34.556 107.822 34.339 107.605 34.2088 107.323Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M25.2198 179.823C25.8042 178.521 24.5487 177.262 23.25 177.848C22.9686 177.978 22.7522 178.195 22.6223 178.477C22.0163 179.779 23.2934 181.038 24.5921 180.452C24.8735 180.322 25.0899 180.105 25.2198 179.823Z"
          fill="#00D95F"
          fillOpacity="0.8"
        />
        <path
          d="M54.5131 110.155C53.9286 108.853 55.184 107.594 56.4827 108.18C56.7641 108.31 56.9806 108.527 57.1105 108.809C57.7165 110.111 56.4395 111.37 55.1407 110.784C54.8594 110.654 54.6429 110.437 54.5131 110.155Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M92.2088 182.723C91.6228 181.421 92.8815 180.162 94.1837 180.748C94.4659 180.878 94.6829 181.095 94.8131 181.377C95.3991 182.679 94.1403 183.938 92.8381 183.352C92.556 183.222 92.339 183.005 92.2088 182.723Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M112.513 133.423C111.927 132.121 113.186 130.862 114.488 131.448C114.771 131.578 114.988 131.795 115.118 132.077C115.704 133.379 114.445 134.638 113.143 134.052C112.861 133.922 112.644 133.705 112.513 133.423Z"
          fill="#00D95F"
          fillOpacity="0.8"
        />
        <path
          d="M65.4541 143.417C66.0386 142.115 64.7831 140.856 63.4844 141.442C63.203 141.572 62.9866 141.789 62.8567 142.071C62.2507 143.374 63.5277 144.632 64.8264 144.046C65.1078 143.916 65.3243 143.699 65.4541 143.417Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M31.0166 75.4227C31.6011 74.1205 30.3456 72.8618 29.0469 73.4478C28.7655 73.578 28.5491 73.795 28.4192 74.0771C27.8131 75.3793 29.0902 76.6381 30.389 76.0521C30.6704 75.9219 30.8868 75.7049 31.0166 75.4227Z"
          fill="#00D95F"
          fillOpacity="0.8"
        />
        <path
          d="M3.35258 37.6024C3.937 36.3003 2.68156 35.0415 1.38283 35.6275C1.10144 35.7577 0.885035 35.9747 0.755162 36.2568C0.14909 37.559 1.42611 38.8178 2.72484 38.2318C3.00623 38.1016 3.2227 37.8846 3.35258 37.6024Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M98.0134 78.3229C97.4275 77.0207 98.6862 75.7619 99.9884 76.3479C100.271 76.4781 100.488 76.6952 100.618 76.9773C101.204 78.2795 99.945 79.5383 98.6428 78.9523C98.3607 78.8221 98.1437 78.605 98.0134 78.3229Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M118.31 29.0229C117.724 27.7207 118.983 26.4619 120.285 27.0479C120.567 27.1781 120.784 27.3951 120.915 27.6772C121.501 28.9794 120.242 30.2382 118.94 29.6522C118.658 29.522 118.441 29.305 118.31 29.0229Z"
          fill="#00D95F"
          fillOpacity="0.8"
        />
        <path
          d="M71.251 39.017C71.8354 37.7148 70.58 36.456 69.2813 37.042C68.9999 37.1722 68.7835 37.3893 68.6536 37.6714C68.0475 38.9736 69.3246 40.2324 70.6233 39.6464C70.9047 39.5162 71.1211 39.2991 71.251 39.017Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M110.649 104.302C111.234 103 109.978 101.741 108.68 102.327C108.398 102.458 108.182 102.675 108.052 102.957C107.446 104.259 108.723 105.518 110.022 104.932C110.303 104.802 110.52 104.585 110.649 104.302Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M144.411 75.3549C143.827 74.0527 145.082 72.7939 146.381 73.3799C146.663 73.5101 146.879 73.7271 147.009 74.0093C147.615 75.3115 146.338 76.5702 145.039 75.9843C144.758 75.854 144.541 75.637 144.411 75.3549Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <path
          d="M147.31 136.323C146.724 135.021 147.983 133.762 149.285 134.348C149.567 134.478 149.784 134.695 149.915 134.977C150.501 136.279 149.242 137.538 147.94 136.952C147.658 136.822 147.441 136.605 147.31 136.323Z"
          fill="#00D95F"
          fillOpacity="0.4"
        />
        <g filter="url(#filter0_f_2913_115205)">
          <rect
            x="20.9"
            y="55.9"
            width="110.2"
            height="110.2"
            rx="55.1"
            stroke="url(#paint1_angular_2913_115205)"
            strokeWidth="5.8"
          />
          <rect
            x="20.9"
            y="55.9"
            width="110.2"
            height="110.2"
            rx="55.1"
            stroke="url(#paint2_angular_2913_115205)"
            strokeWidth="5.8"
          />
        </g>
      </g>
      <rect
        x="19.45"
        y="54.45"
        width="113.1"
        height="113.1"
        rx="56.55"
        stroke="url(#paint3_angular_2913_115205)"
        strokeWidth="2.9"
      />
      <defs>
        <filter
          id="filter0_f_2913_115205"
          x="0.599998"
          y="35.6"
          width="150.8"
          height="150.8"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="8.7"
            result="effect1_foregroundBlur_2913_115205"
          />
        </filter>
        <radialGradient
          id="paint0_angular_2913_115205"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(76 111) scale(78.1739)"
        >
          <stop offset="0.32379" stopColor="white" stopOpacity="0" />
          <stop offset="0.697471" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.5" />
        </radialGradient>
        <radialGradient
          id="paint1_angular_2913_115205"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(76 111) scale(78.1739)"
        >
          <stop offset="0.166667" stopColor="#00D95F" stopOpacity="0" />
          <stop offset="0.838542" stopColor="#00D95F" stopOpacity="0" />
          <stop offset="1" stopColor="#00D95F" stopOpacity="0.5" />
        </radialGradient>
        <radialGradient
          id="paint2_angular_2913_115205"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(76 111) scale(78.1739)"
        >
          <stop offset="0.166667" stopColor="#00D95F" stopOpacity="0" />
          <stop offset="0.838542" stopColor="#00D95F" stopOpacity="0" />
          <stop offset="1" stopColor="#00D95F" stopOpacity="0.5" />
        </radialGradient>
        <radialGradient
          id="paint3_angular_2913_115205"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(76 111) scale(78.1739)"
        >
          <stop offset="0.166667" stopColor="#00D95F" stopOpacity="0" />
          <stop offset="0.838542" stopColor="#00D95F" stopOpacity="0" />
          <stop offset="1" stopColor="#00D95F" stopOpacity="0.5" />
        </radialGradient>
      </defs>
    </svg>
  ),
};
