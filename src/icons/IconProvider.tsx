import React from "react"
import {ICON_TYPES} from "../types"

export const IconProvider = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
            <symbol id={ICON_TYPES.chevronDown} viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.chevronRight} viewBox="0 0 24 24" fill="none">
                <path d="M8.25 18.75L15.75 12L8.25 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.plus} viewBox="0 0 16 16" fill="none">
                <path d="M7.75 0.75V14.75M0.75 7.75H14.75" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.eyeClose} viewBox="0 0 24 24" fill="none">
                <path d="M19.4996 16L17.0244 12.6038" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M12 17.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M4.5 16L6.96895 12.6124" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M3 8C6.6 16 17.4 16 21 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.eyeOpen} viewBox="0 0 19 14" fill="none">
                <path
                    d="M0.799805 8.79932C0.799805 8.79932 4.03055 12.7031 9.56898 12.5888C15.1074 12.4744 17.8766 8.79932 17.8766 8.79932"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                <path
                    d="M0.799805 4.5918C0.799805 4.5918 4.03055 0.688048 9.56898 0.80236C15.1074 0.916671 17.8766 4.5918 17.8766 4.5918"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                <circle cx="9.33887" cy="6.79932" r="3.25" stroke="currentColor" strokeWidth="1.5"/>
            </symbol>
            <symbol id={ICON_TYPES.info_filled} viewBox="0 0 20 20" fill="none">
                <rect x="3.49691e-06" width="20" height="20" rx="10" fill="currentColor"/>
                <path d="M10 14V9M10 6.2V6" stroke="none" strokeWidth="1.5" strokeLinecap="round"/>
            </symbol>
            <symbol id={ICON_TYPES.info} viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_6394_61337)">
                    <path d="M10 5.5V11M10 14.1V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path
                        d="M10 0.75C15.1086 0.75 19.25 4.89137 19.25 10C19.25 15.1086 15.1086 19.25 10 19.25C4.89137 19.25 0.750003 15.1086 0.750003 10C0.750003 4.89137 4.89137 0.75 10 0.75Z"
                        stroke="currentColor" strokeWidth="1.5"/>
                </g>
                <defs>
                    <clipPath id="clip0_6394_61337">
                        <rect x="3.49691e-06" width="20" height="20" rx="10" fill="none"/>
                    </clipPath>
                </defs>
            </symbol>
            <symbol id={ICON_TYPES.checkbox_filled} viewBox="0 0 18 18" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M1.68597 1.68597C0.373095 2.99884 0.275748 4.30684 0.0810531 6.92282C0.0305833 7.60095 0 8.30048 0 9C0 9.69952 0.0305834 10.399 0.0810532 11.0772C0.275748 13.6932 0.373095 15.0012 1.68597 16.314C2.99884 17.6269 4.30684 17.7243 6.92282 17.9189C7.60095 17.9694 8.30048 18 9 18C9.69952 18 10.399 17.9694 11.0772 17.9189C13.6932 17.7243 15.0012 17.6269 16.314 16.314C17.6269 15.0012 17.7243 13.6932 17.9189 11.0772C17.9694 10.399 18 9.69952 18 9C18 8.30048 17.9694 7.60095 17.9189 6.92282C17.7243 4.30684 17.6269 2.99884 16.314 1.68597C15.0012 0.373095 13.6932 0.275748 11.0772 0.0810531C10.399 0.0305833 9.69952 0 9 0C8.30048 0 7.60095 0.0305834 6.92282 0.0810532C4.30684 0.275748 2.99884 0.373095 1.68597 1.68597Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.checkbox_outline} viewBox="0 0 18 18" fill="none">
                <rect x="-0.5" y="0.5" width="17" height="17" rx="3.5" transform="matrix(-1 0 0 1 17 -5.96047e-08)"
                      stroke="currentColor"/>
                <path d="M13.5 6.75L9 11.25L4.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.arrowUp} viewBox="0 0 18 18" fill="none">
                <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="none" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.plus_filled} viewBox="0 0 22 22" fill="none">
                <path
                    d="M10.75 0C16.6871 0 21.5 4.81294 21.5 10.75C21.5 16.6871 16.6871 21.5 10.75 21.5C4.81294 21.5 0 16.6871 0 10.75C0 4.81294 4.81294 0 10.75 0ZM10.75 6C10.3358 6 10 6.33579 10 6.75V10H6.75C6.33579 10 6 10.3358 6 10.75C6 11.1642 6.33579 11.5 6.75 11.5H10V14.75C10 15.1642 10.3358 15.5 10.75 15.5C11.1642 15.5 11.5 15.1642 11.5 14.75V11.5H14.75C15.1642 11.5 15.5 11.1642 15.5 10.75C15.5 10.3358 15.1642 10 14.75 10H11.5V6.75C11.5 6.33579 11.1642 6 10.75 6Z"
                    fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.close_filled} viewBox="0 0 22 22" fill="none">
                <path
                    d="M10.75 0C16.6871 0 21.5 4.81294 21.5 10.75C21.5 16.6871 16.6871 21.5 10.75 21.5C4.81294 21.5 0 16.6871 0 10.75C0 4.81294 4.81294 0 10.75 0ZM14.1084 7.3916C13.8155 7.09871 13.3407 7.09871 13.0479 7.3916L10.75 9.68945L8.45117 7.3916C8.15827 7.09876 7.6835 7.09873 7.39062 7.3916C7.09811 7.6845 7.09791 8.15937 7.39062 8.45215L9.68945 10.75L7.39062 13.0479C7.09791 13.3406 7.09811 13.8155 7.39062 14.1084C7.6835 14.4013 8.15827 14.4012 8.45117 14.1084L10.75 11.8105L13.0479 14.1084C13.3407 14.4013 13.8155 14.4013 14.1084 14.1084C14.4012 13.8155 14.4012 13.3407 14.1084 13.0479L11.8105 10.75L14.1084 8.45215C14.4012 8.1593 14.4012 7.68451 14.1084 7.3916Z"
                    fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.asterisk} viewBox="0 0 24 24" fill="none">
                <rect x="4.19629e-06" width="24" height="24" rx="12" fill="currentColor"/>
                <path
                    d="M11.2993 16L11.4161 12.9444L8.70073 14.5833L8 13.4167L10.8613 12L8 10.5833L8.70073 9.41667L11.4161 11.0556L11.2993 8H12.7007L12.5839 11.0556L15.2993 9.41667L16 10.5833L13.1387 12L16 13.4167L15.2993 14.5833L12.5839 12.9444L12.7007 16H11.2993Z"
                    fill="none"/>
            </symbol>
            <symbol id={ICON_TYPES.warning_outline} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8V13.25M12 16.4V16.25" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.file_csv} fill="none">
                <path
                    d="M18.25 9.375V8.57843C18.25 8.04799 18.0393 7.53929 17.6642 7.16421L11.8358 1.33579C11.4607 0.960713 10.952 0.75 10.4216 0.75H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V20.25C0.75 21.3546 1.64543 22.25 2.75 22.25H16.625C17.5225 22.25 18.25 21.5225 18.25 20.625M17.75 7.75H13.25C12.1454 7.75 11.25 6.85457 11.25 5.75V1.75"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path
                    d="M10.0496 13.8331H9.05242C9.01407 13.62 8.94269 13.4325 8.83829 13.2706C8.73389 13.1087 8.60605 12.9712 8.45477 12.8583C8.30349 12.7454 8.1341 12.6602 7.9466 12.6026C7.76123 12.5451 7.56414 12.5163 7.35534 12.5163C6.97821 12.5163 6.64049 12.6112 6.3422 12.8008C6.04603 12.9904 5.81166 13.2685 5.63907 13.6349C5.46862 14.0014 5.38339 14.4489 5.38339 14.9773C5.38339 15.5099 5.46862 15.9595 5.63907 16.326C5.81166 16.6925 6.0471 16.9695 6.34539 17.157C6.64369 17.3445 6.97927 17.4382 7.35214 17.4382C7.55882 17.4382 7.75484 17.4105 7.94021 17.3551C8.12771 17.2976 8.2971 17.2134 8.44838 17.1026C8.59965 16.9918 8.72749 16.8565 8.8319 16.6967C8.93843 16.5348 9.01194 16.3494 9.05242 16.1406L10.0496 16.1438C9.99632 16.4656 9.89298 16.7617 9.73957 17.0323C9.58829 17.3008 9.39333 17.533 9.1547 17.729C8.91819 17.9229 8.64759 18.0732 8.34291 18.1797C8.03822 18.2862 7.70583 18.3395 7.34575 18.3395C6.77899 18.3395 6.27401 18.2053 5.83083 17.9368C5.38765 17.6662 5.03822 17.2795 4.78254 16.7766C4.52899 16.2738 4.40221 15.674 4.40221 14.9773C4.40221 14.2784 4.53005 13.6786 4.78573 13.1779C5.04142 12.6751 5.39085 12.2894 5.83403 12.021C6.27721 11.7504 6.78112 11.6151 7.34575 11.6151C7.69305 11.6151 8.01691 11.6651 8.31734 11.7653C8.6199 11.8633 8.89156 12.0082 9.13232 12.1999C9.37309 12.3896 9.57231 12.6218 9.72998 12.8967C9.88765 13.1694 9.99419 13.4815 10.0496 13.8331ZM14.8013 13.424C14.7672 13.1214 14.6266 12.8871 14.3794 12.7209C14.1322 12.5526 13.8212 12.4684 13.4462 12.4684C13.1777 12.4684 12.9454 12.511 12.7494 12.5962C12.5534 12.6793 12.4011 12.7944 12.2924 12.9414C12.1859 13.0863 12.1326 13.2514 12.1326 13.4368C12.1326 13.5923 12.1688 13.7266 12.2413 13.8395C12.3158 13.9524 12.4128 14.0472 12.5321 14.1239C12.6535 14.1985 12.7835 14.2614 12.922 14.3125C13.0605 14.3615 13.1937 14.402 13.3215 14.4339L13.9607 14.6001C14.1695 14.6513 14.3837 14.7205 14.6031 14.8079C14.8226 14.8952 15.0261 15.0103 15.2136 15.1531C15.4011 15.2958 15.5523 15.4727 15.6674 15.6836C15.7846 15.8945 15.8432 16.147 15.8432 16.4411C15.8432 16.8118 15.7473 17.141 15.5555 17.4286C15.3659 17.7163 15.09 17.9432 14.7278 18.1094C14.3677 18.2756 13.932 18.3587 13.4206 18.3587C12.9305 18.3587 12.5065 18.2809 12.1486 18.1254C11.7906 17.9698 11.5104 17.7493 11.308 17.4638C11.1056 17.1761 10.9937 16.8352 10.9724 16.4411H11.9632C11.9824 16.6776 12.0591 16.8746 12.1933 17.0323C12.3297 17.1879 12.5033 17.304 12.7143 17.3807C12.9273 17.4553 13.1606 17.4925 13.4142 17.4925C13.6933 17.4925 13.9415 17.4489 14.1589 17.3615C14.3783 17.272 14.5509 17.1484 14.6766 16.9908C14.8023 16.831 14.8652 16.6445 14.8652 16.4315C14.8652 16.2376 14.8098 16.0788 14.699 15.9553C14.5903 15.8317 14.4422 15.7294 14.2547 15.6484C14.0694 15.5675 13.8595 15.4961 13.6251 15.4343L12.8517 15.2234C12.3275 15.0806 11.9121 14.8707 11.6052 14.5938C11.3006 14.3168 11.1482 13.9503 11.1482 13.4943C11.1482 13.1172 11.2505 12.788 11.455 12.5067C11.6596 12.2255 11.9366 12.0071 12.286 11.8516C12.6354 11.6939 13.0296 11.6151 13.4685 11.6151C13.9117 11.6151 14.3027 11.6928 14.6415 11.8484C14.9824 12.0039 15.2508 12.218 15.4469 12.4908C15.6429 12.7614 15.7452 13.0724 15.7537 13.424H14.8013ZM17.5954 11.7045L19.4171 17.0355H19.4906L21.3124 11.7045H22.3798L20.0244 18.25H18.8834L16.5279 11.7045H17.5954Z"
                    fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.file_xls} viewBox="0 0 22 23" fill="none">
                <path
                    d="M18.25 9.375V8.57843C18.25 8.04799 18.0393 7.53929 17.6642 7.16421L11.8358 1.33579C11.4607 0.960713 10.952 0.75 10.4216 0.75H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V20.25C0.75 21.3546 1.64543 22.25 2.75 22.25H16.625C17.5225 22.25 18.25 21.5225 18.25 20.625M17.75 7.75H13.25C12.1454 7.75 11.25 6.85457 11.25 5.75V1.75"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path
                    d="M6.22314 11.7045L7.7892 14.2646H7.84033L9.40638 11.7045H10.5506L8.5115 14.9773L10.5633 18.25H9.41278L7.84033 15.7251H7.7892L6.21675 18.25H5.06618L7.15319 14.9773L5.07897 11.7045H6.22314ZM11.5301 18.25V11.7045H12.5177V17.3999H15.4836V18.25H11.5301ZM20.1802 13.424C20.1461 13.1214 20.0055 12.8871 19.7583 12.7209C19.5111 12.5526 19.2001 12.4684 18.8251 12.4684C18.5566 12.4684 18.3244 12.511 18.1283 12.5962C17.9323 12.6793 17.78 12.7944 17.6713 12.9414C17.5648 13.0863 17.5115 13.2514 17.5115 13.4368C17.5115 13.5923 17.5477 13.7266 17.6202 13.8395C17.6947 13.9524 17.7917 14.0472 17.911 14.1239C18.0324 14.1985 18.1624 14.2614 18.3009 14.3125C18.4394 14.3615 18.5726 14.402 18.7004 14.4339L19.3396 14.6001C19.5484 14.6513 19.7626 14.7205 19.982 14.8079C20.2015 14.8952 20.405 15.0103 20.5925 15.1531C20.78 15.2958 20.9312 15.4727 21.0463 15.6836C21.1635 15.8945 21.2221 16.147 21.2221 16.4411C21.2221 16.8118 21.1262 17.141 20.9344 17.4286C20.7448 17.7163 20.4689 17.9432 20.1067 18.1094C19.7466 18.2756 19.3109 18.3587 18.7995 18.3587C18.3094 18.3587 17.8854 18.2809 17.5275 18.1254C17.1695 17.9698 16.8893 17.7493 16.6869 17.4638C16.4845 17.1761 16.3726 16.8352 16.3513 16.4411H17.3421C17.3613 16.6776 17.438 16.8746 17.5722 17.0323C17.7086 17.1879 17.8822 17.304 18.0932 17.3807C18.3062 17.4553 18.5396 17.4925 18.7931 17.4925C19.0722 17.4925 19.3204 17.4489 19.5378 17.3615C19.7572 17.272 19.9298 17.1484 20.0555 16.9908C20.1812 16.831 20.2441 16.6445 20.2441 16.4315C20.2441 16.2376 20.1887 16.0788 20.0779 15.9553C19.9692 15.8317 19.8212 15.7294 19.6337 15.6484C19.4483 15.5675 19.2384 15.4961 19.004 15.4343L18.2306 15.2234C17.7065 15.0806 17.291 14.8707 16.9842 14.5938C16.6795 14.3168 16.5271 13.9503 16.5271 13.4943C16.5271 13.1172 16.6294 12.788 16.8339 12.5067C17.0385 12.2255 17.3155 12.0071 17.6649 11.8516C18.0143 11.6939 18.4085 11.6151 18.8474 11.6151C19.2906 11.6151 19.6816 11.6928 20.0204 11.8484C20.3613 12.0039 20.6297 12.218 20.8258 12.4908C21.0218 12.7614 21.1241 13.0724 21.1326 13.424H20.1802Z"
                    fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.file_pdf} viewBox="0 0 22 23" fill="none">
                <path
                    d="M18.25 9.375V8.57843C18.25 8.04799 18.0393 7.53929 17.6642 7.16421L11.8358 1.33579C11.4607 0.960713 10.952 0.75 10.4216 0.75H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V20.25C0.75 21.3546 1.64543 22.25 2.75 22.25H16.625C17.5225 22.25 18.25 21.5225 18.25 20.625M17.75 7.75H13.25C12.1454 7.75 11.25 6.85457 11.25 5.75V1.75"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path
                    d="M4.70641 18.25V11.7045H7.03951C7.54874 11.7045 7.97061 11.7972 8.30513 11.9826C8.63965 12.168 8.89 12.4215 9.0562 12.7433C9.22239 13.0629 9.30549 13.4229 9.30549 13.8235C9.30549 14.2262 9.22132 14.5884 9.053 14.9102C8.88681 15.2298 8.63539 15.4833 8.29874 15.6708C7.96422 15.8562 7.54341 15.9489 7.03631 15.9489H5.43191V15.1115H6.94682C7.26855 15.1115 7.52956 15.0561 7.72985 14.9453C7.93013 14.8324 8.07715 14.679 8.1709 14.4851C8.26465 14.2912 8.31152 14.0707 8.31152 13.8235C8.31152 13.5763 8.26465 13.3569 8.1709 13.1651C8.07715 12.9734 7.92907 12.8232 7.72665 12.7145C7.52637 12.6058 7.26216 12.5515 6.93404 12.5515H5.69398V18.25H4.70641ZM12.5822 18.25H10.4632V11.7045H12.6493C13.2907 11.7045 13.8414 11.8356 14.3017 12.0977C14.7619 12.3576 15.1145 12.7315 15.3596 13.2195C15.6067 13.7053 15.7303 14.288 15.7303 14.9677C15.7303 15.6495 15.6056 16.2354 15.3564 16.7255C15.1092 17.2156 14.7512 17.5927 14.2825 17.8569C13.8137 18.119 13.247 18.25 12.5822 18.25ZM11.4508 17.3871H12.5279C13.0265 17.3871 13.4409 17.2933 13.7711 17.1058C14.1014 16.9162 14.3485 16.6424 14.5126 16.2844C14.6767 15.9244 14.7587 15.4854 14.7587 14.9677C14.7587 14.4542 14.6767 14.0185 14.5126 13.6605C14.3507 13.3026 14.1088 13.0309 13.7871 12.8455C13.4654 12.6602 13.0659 12.5675 12.5886 12.5675H11.4508V17.3871ZM16.9584 18.25V11.7045H21.0173V12.5547H17.9459V14.549H20.7265V15.396H17.9459V18.25H16.9584Z"
                    fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.settings_adjust} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M9 13.75C7.75736 13.75 6.75 14.7574 6.75 16C6.75 17.2426 7.75736 18.25 9 18.25C10.2426 18.25 11.25 17.2426 11.25 16C11.25 14.7574 10.2426 13.75 9 13.75ZM5.25 16C5.25 13.9289 6.92893 12.25 9 12.25C11.0711 12.25 12.75 13.9289 12.75 16C12.75 18.0711 11.0711 19.75 9 19.75C6.92893 19.75 5.25 18.0711 5.25 16Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H6C6.41421 15.25 6.75 15.5858 6.75 16C6.75 16.4142 6.41421 16.75 6 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M11.25 16C11.25 15.5858 11.5858 15.25 12 15.25L21 15.25C21.4142 15.25 21.75 15.5858 21.75 16C21.75 16.4142 21.4142 16.75 21 16.75L12 16.75C11.5858 16.75 11.25 16.4142 11.25 16Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15 5.75C13.7574 5.75 12.75 6.75736 12.75 8C12.75 9.24264 13.7574 10.25 15 10.25C16.2426 10.25 17.25 9.24264 17.25 8C17.25 6.75736 16.2426 5.75 15 5.75ZM11.25 8C11.25 5.92893 12.9289 4.25 15 4.25C17.0711 4.25 18.75 5.92893 18.75 8C18.75 10.0711 17.0711 11.75 15 11.75C12.9289 11.75 11.25 10.0711 11.25 8Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H12C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M17.25 8C17.25 7.58579 17.5858 7.25 18 7.25L21 7.25C21.4142 7.25 21.75 7.58579 21.75 8C21.75 8.41421 21.4142 8.75 21 8.75H18C17.5858 8.75 17.25 8.41421 17.25 8Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.arrowRight} viewBox="0 0 25 24" fill="none">
                <path d="M1.3934 11.6066H22.6066M22.6066 11.6066L14.1029 3.10292M22.6066 11.6066L14.1029 20.1103"
                      stroke="currentColor" strokeWidth="2.4"/>
            </symbol>
            <symbol id={ICON_TYPES.dotsHorizontalBold} viewBox="0 0 24 24" fill="none">
                <circle cx="5.75" cy="12" r="1.25" stroke="currentColor" strokeWidth="1.40625"/>
                <circle cx="12" cy="12" r="1.25" stroke="currentColor" strokeWidth="1.40625"/>
                <circle cx="18.25" cy="12" r="1.25" stroke="currentColor" strokeWidth="1.40625"/>
            </symbol>
            <symbol id={ICON_TYPES.analytics} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M3.25 20C3.25 20.4142 3.58579 20.75 4 20.75H20C20.4142 20.75 20.75 20.4142 20.75 20C20.75 19.5858 20.4142 19.25 20 19.25H4.75V4C4.75 3.58579 4.41421 3.25 4 3.25C3.58579 3.25 3.25 3.58579 3.25 4V20Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M3.45285 17.013C3.73615 17.3151 4.21077 17.3304 4.51296 17.0472L11.9832 10.0438L14.4697 12.5303C14.7626 12.8232 15.2374 12.8232 15.5303 12.5303L20.0303 8.03033C20.3232 7.73743 20.3232 7.26256 20.0303 6.96967C19.7374 6.67677 19.2626 6.67677 18.9697 6.96967L15 10.9393L12.5303 8.46967C12.2441 8.18343 11.7824 8.17599 11.487 8.45284L3.48705 15.9528C3.18486 16.2361 3.16955 16.7108 3.45285 17.013Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.dashboard} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M8.25 8.60049C8.25 7.8549 8.85441 7.25049 9.6 7.25049H14.4C15.1456 7.25049 15.75 7.8549 15.75 8.60049V19.0005C15.75 19.4147 15.4142 19.7505 15 19.7505H9C8.58579 19.7505 8.25 19.4147 8.25 19.0005V8.60049ZM9.75 8.75049V18.2505H14.25V8.75049H9.75Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M8.25 4.99927C8.25 4.58505 8.58579 4.24927 9 4.24927H15C15.4142 4.24927 15.75 4.58505 15.75 4.99927C15.75 5.41348 15.4142 5.74927 15 5.74927H9C8.58579 5.74927 8.25 5.41348 8.25 4.99927Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.75 15.2493V18.2493H20.25V15.2493H15.75ZM14.25 15.0993C14.25 14.3537 14.8544 13.7493 15.6 13.7493H20.4C21.1456 13.7493 21.75 14.3537 21.75 15.0993V18.3993C21.75 19.1449 21.1456 19.7493 20.4 19.7493H15C14.5858 19.7493 14.25 19.4135 14.25 18.9993V15.0993Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.25 13.0995C2.25 12.3539 2.85441 11.7495 3.6 11.7495H8.4C9.14558 11.7495 9.75 12.3539 9.75 13.0995V18.9995C9.75 19.4137 9.41421 19.7495 9 19.7495H3.6C2.85442 19.7495 2.25 19.1451 2.25 18.3995V13.0995ZM3.75 13.2495V18.2495H8.25V13.2495H3.75Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.search} viewBox="0 0 24 24" fill="none">
                <path d="M17 17L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.link} viewBox="0 0 24 24" fill="none">
                <path
                    d="M14 11.9976C14 9.5059 11.683 7 8.85714 7C8.52241 7 7.41904 7.00001 7.14286 7.00001C4.30254 7.00001 2 9.23752 2 11.9976C2 14.376 3.70973 16.3664 6 16.8714C6.36756 16.9525 6.75006 16.9952 7.14286 16.9952"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M10 11.9975C10 14.4892 12.317 16.9951 15.1429 16.9951C15.4776 16.9951 16.581 16.9951 16.8571 16.9951C19.6975 16.9951 22 14.7576 22 11.9975C22 9.61908 20.2903 7.62872 18 7.12371C17.6324 7.04266 17.2499 6.99987 16.8571 6.99987"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.refresh} viewBox="0 0 24 24" fill="none">
                <path
                    d="M11.8889 10.1538L7 15.0769M7 15.0769L11.8889 20M7 15.0769H14C16.2091 15.0769 18 13.2861 18 11.0769V8C18 5.79086 16.2091 4 14 4H7"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.checkBold} viewBox="0 0 19 13" fill="none">
                <path d="M17.5996 1.1001L7.09961 11.6001L1.09961 5.6001" stroke="currentColor" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.trash} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M20.13 8.26121C20.538 8.33294 20.8105 8.7218 20.7388 9.12976L18.7438 20.476C18.7438 20.476 18.7438 20.476 18.7438 20.4761C18.5126 21.791 17.3704 22.7499 16.0354 22.7499H7.96486C6.62979 22.7499 5.4876 21.7909 5.25642 20.4761L3.26146 9.12976C3.18973 8.7218 3.46229 8.33294 3.87025 8.26121C4.2782 8.18948 4.66707 8.46205 4.73879 8.87L6.73375 20.2163C6.83885 20.814 7.35804 21.2499 7.96486 21.2499H16.0354C16.6422 21.2499 17.1614 20.814 17.2664 20.2163L17.2665 20.2163L19.2615 8.87C19.3332 8.46205 19.722 8.18948 20.13 8.26121Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.625 2.75C9.93464 2.75 9.375 3.30964 9.375 4V5.25H14.625V4C14.625 3.30964 14.0654 2.75 13.375 2.75H10.625ZM7.875 5.25V4C7.875 2.48122 9.10622 1.25 10.625 1.25H13.375C14.8938 1.25 16.125 2.48122 16.125 4V5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H7.875Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.checkDouble} viewBox="0 0 26 24" fill="none">
                <path d="M19.5 6.75L9 17.25L3 11.25" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M24 6.75L13.5 17.25M7.5 11.25L9 12.75" stroke="currentColor" strokeWidth="2.05"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.close} viewBox="0 0 24 24" fill="none">
                <path d="M6.34277 17.6567L17.6565 6.34303" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M6.34277 6.34326L17.6565 17.657" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.download} viewBox="0 0 24 24" fill="none">
                <path d="M4 18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18M12 16L17 11M12 16L7 11M12 16V2"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.fullscreen} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25H4C3.58579 3.25 3.25 3.58579 3.25 4V8C3.25 8.41421 3.58579 8.75 4 8.75C4.41421 8.75 4.75 8.41421 4.75 8V5.81066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L5.81066 4.75H8C8.41421 4.75 8.75 4.41421 8.75 4Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.25 4C15.25 3.58579 15.5858 3.25 16 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4V8C20.75 8.41421 20.4142 8.75 20 8.75C19.5858 8.75 19.25 8.41421 19.25 8V5.81066L15.5303 9.53033C15.2374 9.82322 14.7626 9.82322 14.4697 9.53033C14.1768 9.23744 14.1768 8.76256 14.4697 8.46967L18.1893 4.75H16C15.5858 4.75 15.25 4.41421 15.25 4Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M8.75 20C8.75 20.4142 8.41421 20.75 8 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V16C3.25 15.5858 3.58579 15.25 4 15.25C4.41421 15.25 4.75 15.5858 4.75 16V18.1893L8.46967 14.4697C8.76256 14.1768 9.23744 14.1768 9.53033 14.4697C9.82322 14.7626 9.82322 15.2374 9.53033 15.5303L5.81066 19.25H8C8.41421 19.25 8.75 19.5858 8.75 20Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.25 20C15.25 20.4142 15.5858 20.75 16 20.75H20C20.4142 20.75 20.75 20.4142 20.75 20V16C20.75 15.5858 20.4142 15.25 20 15.25C19.5858 15.25 19.25 15.5858 19.25 16V18.1893L15.5303 14.4697C15.2374 14.1768 14.7626 14.1768 14.4697 14.4697C14.1768 14.7626 14.1768 15.2374 14.4697 15.5303L18.1893 19.25H16C15.5858 19.25 15.25 19.5858 15.25 20Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.arrowDown} viewBox="0 0 11 15" fill="none">
                <path d="M5.25 13.75L0.75 9.02273M5.25 13.75L9.75 9.02273M5.25 13.75L5.25 0.750001"
                      stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.checkMini} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M4.46978 12.4697C4.76268 12.1768 5.23755 12.1768 5.53044 12.4697L9.00011 15.9393L18.4698 6.46967C18.7627 6.17678 19.2375 6.17678 19.5304 6.46967C19.8233 6.76256 19.8233 7.23744 19.5304 7.53033L9.53044 17.5303C9.23755 17.8232 8.76268 17.8232 8.46978 17.5303L4.46978 13.5303C4.17689 13.2374 4.17689 12.7626 4.46978 12.4697Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.clockZero} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M12 7.5L12 11.8913L15 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.clockSeven} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M12 9L12 14.2675L15 16.1972" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.clockRefresh} viewBox="0 0 25 24" fill="none">
                <path
                    d="M3.2998 12C3.2998 7.02944 7.32924 3 12.2998 3C17.2704 3 21.2998 7.02944 21.2998 12C21.2998 16.9706 17.2704 21 12.2998 21C9.74457 21 7.43805 19.9351 5.7998 18.225M3.2998 12L6.2998 10.5M3.2998 12L0.799805 9.5"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.2998 7.5L12.2998 11.8913L15.2998 13.5" stroke="currentColor" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.youtube} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.002 15L15.198 12L10.002 9V15Z"
                      stroke="currentColor"
                      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z"
                      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.instagram} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M7.496 3H16.505C18.987 3 21 5.012 21 7.496V16.505C21 18.987 18.988 21 16.504 21H7.496C5.013 21 3 18.988 3 16.504V7.496C3 5.013 5.012 3 7.496 3V3Z"
                      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M16.9487 6.71304C16.7627 6.71404 16.6117 6.86504 16.6117 7.05104C16.6117 7.23704 16.7637 7.38804 16.9497 7.38804C17.1357 7.38804 17.2867 7.23704 17.2867 7.05104C17.2877 6.86404 17.1357 6.71304 16.9487 6.71304"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M14.546 9.45432C15.9519 10.8602 15.9519 13.1396 14.546 14.5455C13.1401 15.9514 10.8607 15.9514 9.45481 14.5455C8.04892 13.1396 8.04892 10.8602 9.45481 9.45432C10.8607 8.04843 13.1401 8.04843 14.546 9.45432"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.facebook} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z"
                      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.0996 12.8999H16.4996" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M16.5004 8.3999H15.5554C14.0894 8.3999 12.9004 9.5889 12.9004 11.0549V11.9999V20.9999"
                      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.bell} viewBox="0 0 24 24" fill="none">
                <path
                    d="M5.61845 7.91947C6.38133 5.02052 9.00235 3 12 3C14.9976 3 17.6187 5.02052 18.3815 7.91947L20.0147 14.1254C20.3091 15.244 20.4562 15.8033 20.3686 16.2526C20.2479 16.871 19.8429 17.3964 19.2756 17.6705C18.8634 17.8696 18.285 17.8696 17.1283 17.8696H6.8717C5.71499 17.8696 5.13664 17.8696 4.72445 17.6705C4.1571 17.3964 3.75208 16.871 3.63142 16.2526C3.54376 15.8033 3.69094 15.244 3.98532 14.1254L5.61845 7.91947Z"
                    stroke="currentColor" strokeWidth="1.6"/>
                <path
                    d="M15.521 17.4783C15.521 19.4233 13.9443 21 11.9993 21C10.0543 21 8.47754 19.4233 8.47754 17.4783"
                    stroke="currentColor" strokeWidth="1.6"/>
            </symbol>
            <symbol id={ICON_TYPES.user} viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_6394_61331)">
                    <circle cx="8.66677" cy="4.33328" r="3.61111" stroke="currentColor" strokeWidth="1.5"/>
                    <path
                        d="M8.66699 10.1111C5.76357 10.1111 3.30477 12.0147 2.47061 14.6419C2.13635 15.6947 3.06242 16.6111 4.16699 16.6111H13.167C14.2716 16.6111 15.1976 15.6947 14.8634 14.6419C14.0292 12.0147 11.5704 10.1111 8.66699 10.1111Z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_6394_61331">
                        <rect width="17.3333" height="17.3333" fill="none"/>
                    </clipPath>
                </defs>
            </symbol>
            <symbol id={ICON_TYPES.wallet} viewBox="0 0 24 24" fill="none">
                <path d="M18.5008 6.95397L16.136 3.80087C15.4991 2.9517 14.3098 2.74798 13.4266 3.33677L7.93066 7.00073"
                      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M18.499 11.4993H20.999C21.5513 11.4993 21.999 11.947 21.999 12.4993V15.4993C21.999 16.0516 21.5513 16.4993 20.999 16.4993H18.499C17.1183 16.4993 15.999 15.38 15.999 13.9993V13.9993C15.999 12.6186 17.1183 11.4993 18.499 11.4993V11.4993Z"
                      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.002 21.0015H18.502C19.8827 21.0015 21.002 19.8822 21.002 18.5015V16.5015"
                      stroke="currentColor"
                      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="5.99902" cy="18" r="4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                        strokeLinejoin="round"/>
                <path d="M7.3443 17.2078L5.6643 18.8868L4.6543 17.8798" stroke="currentColor" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M21.001 11.4985V9.49854C21.001 8.11782 19.8817 6.99854 18.501 6.99854H5.50098C4.12026 6.99854 3.00098 8.11782 3.00098 9.49854V11.9985"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.documentCertificate} viewBox="0 0 24 24" fill="none">
                <path d="M9 5.5H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M18 9H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M6 14.5H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M17.1213 12.8787C18.2929 14.0502 18.2929 15.9497 17.1213 17.1213C15.9497 18.2929 14.0502 18.2929 12.8787 17.1213C11.7071 15.9497 11.7071 14.0502 12.8787 12.8787C14.0502 11.7071 15.9497 11.7071 17.1213 12.8787"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 17.2202V21.9992L15 20.9992L13 21.9992V17.2202" stroke="currentColor" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M17 19H20C21.105 19 22 18.105 22 17V4C22 2.895 21.105 2 20 2H4C2.895 2 2 2.895 2 4V17C2 18.105 2.895 19 4 19H13"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.calendarClock} viewBox="0 0 24 24" fill="none">
                <circle cx="17.5" cy="16.5" r="4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                        strokeLinejoin="round"/>
                <path d="M3.40039 8.80005H17.6004" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M7.5 2V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M16.5 2V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M10 20H6C4.34315 20 3 18.6569 3 17V6.5C3 4.84315 4.34315 3.5 6 3.5H18C19.6569 3.5 21 4.84315 21 6.5V9"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 12.3999H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M10.5996 12.3999H11.5996" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M7 15.6001H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M17.3926 14.9836V16.7372L18.7748 17.5804" stroke="currentColor" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.like} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.94302 19.0007H5.05502C4.47202 19.0007 3.99902 18.5277 3.99902 17.9447V10.5567C3.99902 9.97373 4.47202 9.50073 5.05502 9.50073H6.94302C7.52602 9.50073 7.99902 9.97373 7.99902 10.5567V17.9447C7.99902 18.5277 7.52602 19.0007 6.94302 19.0007V19.0007Z"
                      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M8.00098 10.5728L11.65 5.8218C12.329 4.9368 13.655 4.9148 14.364 5.7758V5.7758C14.629 6.0968 14.773 6.5008 14.773 6.9168V10.1878H17.869C18.47 10.1878 19.031 10.4878 19.365 10.9868L19.694 11.4778C19.989 11.9188 20.075 12.4678 19.928 12.9768L18.569 17.6988C18.347 18.4698 17.642 19.0008 16.84 19.0008H10.551C10.051 19.0008 9.57298 18.7928 9.23298 18.4268L8.00098 17.1008"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.phone} viewBox="0 0 14 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M12.7002 15.6999C12.7002 17.3567 11.357 18.6999 9.7002 18.6999H3.7002C2.04334 18.6999 0.700195 17.3567 0.700195 15.6999V3.69999C0.700195 2.04315 2.04333 0.700004 3.70018 0.699996L9.70018 0.699966C11.357 0.699958 12.7002 2.04311 12.7002 3.69997V15.6999Z"
                      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.calendarMini} viewBox="0 0 22 22" fill="none">
                <path d="M14.3333 2V4.66667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M7.00033 2V4.66667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M2.66504 7.99913H18.665" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <rect x="2.66699" y="3.33325" width="16" height="15.3333" rx="2.66667" stroke="currentColor"
                      strokeWidth="1.33333"/>
                <path d="M7.33333 11.3333H6" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round"/>
                <path d="M11.3333 11.3333H10" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round"/>
                <path d="M15.3333 11.3333H14" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round"/>
                <path d="M7.33333 14.6667H6" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round"/>
                <path d="M11.3333 14.6667H10" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round"/>
                <path d="M15.3333 14.6667H14" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round"/>
            </symbol>
            <symbol id={ICON_TYPES.medal} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M14.6479 1.30821C14.2654 1.14912 13.8264 1.33017 13.6673 1.71262L12.6273 4.21262C12.4682 4.59506 12.6493 5.03406 13.0317 5.19316C13.4142 5.35225 13.8532 5.17119 14.0123 4.78875L15.0523 2.28875C15.2114 1.90631 15.0303 1.46731 14.6479 1.30821ZM18.3027 1.31457C17.9238 1.14728 17.481 1.31885 17.3137 1.69779L13.8642 9.51145C13.6677 9.45512 13.4676 9.40746 13.2643 9.36892L9.50886 1.67182C9.32723 1.29955 8.87821 1.145 8.50594 1.32663C8.13367 1.50826 7.97913 1.95728 8.16076 2.32955L11.5449 9.26577C10.8899 9.30935 10.2605 9.44638 9.6698 9.66362L5.67063 1.66527C5.48539 1.29479 5.03488 1.14462 4.6644 1.32986C4.29392 1.51511 4.14375 1.96561 4.32899 2.33609L8.32863 10.3354C6.47551 11.5387 5.24981 13.6265 5.24981 16.0007C5.24981 19.7286 8.27189 22.7507 11.9998 22.7507C15.7277 22.7507 18.7498 19.7286 18.7498 16.0007C18.7498 13.4515 17.3367 11.2324 15.2511 10.0839L18.6859 2.30358C18.8532 1.92465 18.6816 1.48186 18.3027 1.31457ZM12.6699 10.7931C15.253 11.1221 17.2498 13.3282 17.2498 16.0007C17.2498 18.9002 14.8993 21.2507 11.9998 21.2507C9.10032 21.2507 6.74981 18.9002 6.74981 16.0007C6.74981 13.1012 9.10032 10.7507 11.9998 10.7507C12.2268 10.7507 12.4505 10.7651 12.6699 10.7931Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M12.8364 12.8292C12.5823 12.7021 12.2782 12.7296 12.051 12.9L10.051 14.4C9.71961 14.6485 9.65245 15.1186 9.90098 15.45C10.1495 15.7814 10.6196 15.8485 10.951 15.6L11.751 15V18.5C11.751 18.9142 12.0868 19.25 12.501 19.25C12.9152 19.25 13.251 18.9142 13.251 18.5V13.5C13.251 13.2159 13.0905 12.9562 12.8364 12.8292Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.cloudUpload} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M11.4697 12.4697C11.7626 12.1768 12.2374 12.1768 12.5303 12.4697L16.0303 15.9697C16.3232 16.2626 16.3232 16.7374 16.0303 17.0303C15.7374 17.3232 15.2626 17.3232 14.9697 17.0303L12.75 14.8107V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V14.8107L9.03033 17.0303C8.73744 17.3232 8.26256 17.3232 7.96967 17.0303C7.67678 16.7374 7.67678 16.2626 7.96967 15.9697L11.4697 12.4697Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M7.39312 4.63587C6.76553 5.68186 6.75 6.97236 6.75 8C6.75 8.41421 6.41421 8.75 6 8.75C5.28668 8.75 4.20002 8.97016 3.31323 9.60865C2.46468 10.2196 1.75 11.2444 1.75 13C1.75 14.1955 2.08156 15.0384 2.53739 15.6393C2.99923 16.2481 3.62419 16.6545 4.27355 16.9089C4.65923 17.06 4.84941 17.4951 4.69833 17.8808C4.54726 18.2665 4.11213 18.4567 3.72645 18.3056C2.88209 17.9748 2.00705 17.4221 1.34232 16.5458C0.67158 15.6616 0.25 14.4934 0.25 13C0.25 10.7556 1.20198 9.2804 2.43677 8.39135C3.35065 7.73336 4.39099 7.41468 5.25627 7.30083C5.28248 6.32248 5.41727 5.01348 6.10688 3.86413C7.02939 2.32662 8.81736 1.25 12 1.25C15.1826 1.25 16.9706 2.32662 17.8931 3.86413C18.5827 5.01348 18.7175 6.32248 18.7437 7.30083C19.609 7.41468 20.6493 7.73336 21.5632 8.39135C22.798 9.2804 23.75 10.7556 23.75 13C23.75 14.4934 23.3284 15.6616 22.6577 16.5458C21.993 17.4221 21.1179 17.9748 20.2736 18.3056C19.8879 18.4567 19.4527 18.2665 19.3017 17.8808C19.1506 17.4951 19.3408 17.06 19.7264 16.9089C20.3758 16.6545 21.0008 16.2481 21.4626 15.6393C21.9184 15.0384 22.25 14.1955 22.25 13C22.25 11.2444 21.5353 10.2196 20.6868 9.60865C19.8 8.97016 18.7133 8.75 18 8.75C17.5858 8.75 17.25 8.41421 17.25 8C17.25 6.97236 17.2345 5.68186 16.6069 4.63587C16.0294 3.67338 14.8174 2.75 12 2.75C9.18264 2.75 7.97061 3.67338 7.39312 4.63587Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.calendar} viewBox="0 0 17 18" fill="none">
                <path
                    d="M10.75 2.41667V0.75M10.75 2.41667V4.08333M10.75 2.41667H7M0.75 7.41667V14.9167C0.75 15.8372 1.49619 16.5833 2.41667 16.5833H14.0833C15.0038 16.5833 15.75 15.8372 15.75 14.9167V7.41667H0.75Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.pencil} viewBox="0 0 19 19" fill="none">
                <path
                    d="M7.87162 4.16419L11.2858 0.74996L17.2607 6.72485L13.8465 10.1391M7.87162 4.16419L1.04317 10.9926C0.855636 11.1802 0.75028 11.4345 0.75028 11.6997L0.750284 17.2604L6.31096 17.2604C6.57618 17.2604 6.83053 17.1551 7.01807 16.9675L13.8465 10.1391M7.87162 4.16419L13.8465 10.1391"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.warningTriangle} viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_6394_61439)">
                    <path
                        d="M10.3762 5.8125C11.0979 4.5625 12.9021 4.5625 13.6238 5.8125L19.9025 16.6875C20.6242 17.9375 19.7221 19.5 18.2787 19.5H5.72132C4.27794 19.5 3.37583 17.9375 4.09752 16.6875L10.3762 5.8125Z"
                        stroke="currentColor" strokeWidth="1.6"/>
                    <path d="M12 9.6001V13.7251M12 16.2001V16.0822" stroke="currentColor" strokeWidth="1.4"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_6394_61439">
                        <rect width="24" height="24" fill="none"/>
                    </clipPath>
                </defs>
            </symbol>
            <symbol id={ICON_TYPES.growth} viewBox="0 0 19 12" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.4323 2.41165L18.75 0L16.6797 8.40916L14.0971 5.9298L9.93104 10.2694C9.78961 10.4167 9.59422 10.5 9.39 10.5C9.18578 10.5 8.99039 10.4167 8.84896 10.2694L5.79 7.08298L1.29104 11.7694C1.00419 12.0682 0.52941 12.0779 0.230602 11.791C-0.0682063 11.5042 -0.0778955 11.0294 0.20896 10.7306L5.24896 5.4806C5.39039 5.33328 5.58578 5.25 5.79 5.25C5.99422 5.25 6.18961 5.33328 6.33104 5.4806L9.39 8.66702L13.015 4.89101L10.4323 2.41165Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.edit} viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.25 21C2.25 20.5858 2.58579 20.25 3 20.25L21 20.25C21.4142 20.25 21.75 20.5858 21.75 21C21.75 21.4142 21.4142 21.75 21 21.75L3 21.75C2.58579 21.75 2.25 21.4142 2.25 21Z"
                      fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M20.5302 8.48004C20.8231 8.18714 20.8231 7.71227 20.5302 7.41938L15.5805 2.46963C15.2876 2.17674 14.8127 2.17674 14.5198 2.46963L6.08478 10.9047C5.75659 11.2328 5.57222 11.678 5.57222 12.1421L5.57222 16.6776C5.57222 17.0918 5.90801 17.4276 6.32222 17.4276L10.8577 17.4276C11.3219 17.4276 11.767 17.2433 12.0952 16.9151L20.5302 8.48004ZM18.9392 7.94971L17.1715 9.71747L13.2824 5.82839L15.0501 4.06062L18.9392 7.94971ZM12.2217 6.88905L16.1108 10.7781L11.0345 15.8544C10.9876 15.9013 10.9241 15.9276 10.8578 15.9276L7.07222 15.9276L7.07222 12.1421C7.07222 12.0758 7.09856 12.0122 7.14544 11.9653L12.2217 6.88905Z"
                      fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.golf} fill="none">
                <g clip-path="url(#clip0_6394_61490)">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11.25 3.41054C11.25 2.44135 12.241 1.78791 13.1318 2.16969L21.5758 5.78855C22.6434 6.2461 22.6731 7.74886 21.6244 8.24826L12.75 12.4742V18.0006C12.75 18.4148 12.4142 18.7506 12 18.7506C11.5858 18.7506 11.25 18.4148 11.25 18.0006V3.41054ZM12.75 10.8128L20.68 7.03659L12.75 3.63802V10.8128Z"
                          fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M7.38664 16.6959C6.19962 17.2895 5.75098 17.9706 5.75098 18.5C5.75098 19.0294 6.19962 19.7105 7.38664 20.3041C8.5288 20.8751 10.1592 21.25 12.001 21.25C13.8428 21.25 15.4732 20.8751 16.6153 20.3041C17.8023 19.7105 18.251 19.0294 18.251 18.5C18.251 17.9706 17.8023 17.2895 16.6153 16.6959C15.4732 16.1249 13.8428 15.75 12.001 15.75C10.1592 15.75 8.5288 16.1249 7.38664 16.6959ZM6.71582 15.3543C8.10716 14.6586 9.97679 14.25 12.001 14.25C14.0252 14.25 15.8948 14.6586 17.2861 15.3543C18.6326 16.0275 19.751 17.0964 19.751 18.5C19.751 19.9036 18.6326 20.9725 17.2861 21.6457C15.8948 22.3414 14.0252 22.75 12.001 22.75C9.97679 22.75 8.10716 22.3414 6.71582 21.6457C5.36934 20.9725 4.25098 19.9036 4.25098 18.5C4.25098 17.0964 5.36934 16.0275 6.71582 15.3543Z"
                          fill="currentColor"/>
                </g>
                <defs>
                    <clipPath id="clip0_6394_61490">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </symbol>
            <symbol id={ICON_TYPES.copy} viewBox="0 0 24 24" fill="none">
                <rect x="4" y="3" width="11.6664" height="13.3334" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path
                    d="M17.3338 6.33325C18.2542 6.33325 19.0004 7.07943 19.0004 7.99988V17.6666C19.0004 18.7712 18.105 19.6666 17.0004 19.6666H9.00065C8.08018 19.6666 7.33398 18.9204 7.33398 17.9999"
                    stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </symbol>
            <symbol id={ICON_TYPES.app} viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="8" height="8" rx="2" fill="currentColor"/>
                <rect x="14" y="2" width="8" height="8" rx="2" fill="currentColor"/>
                <rect x="2" y="14" width="8" height="8" rx="2" fill="currentColor"/>
                <rect x="14" y="14" width="8" height="8" rx="2" fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.menu} viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="4" rx="2" fill="currentColor"/>
                <rect x="2" y="18" width="20" height="4" rx="2" fill="currentColor"/>
                <rect x="2" y="10" width="20" height="4" rx="2" fill="currentColor"/>
            </symbol>
            <symbol id={ICON_TYPES.telegram} viewBox="0 0 24 24" fill="none">
                <path
                    d="M11.795 16.9066L9.72995 18.9156C9.37195 19.2636 8.77295 19.1096 8.62795 18.6316L7.25195 14.1016"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M14.1033 10.9275C14.1033 10.9275 11.5143 13.2635 10.1863 14.4625C9.78934 14.8205 9.82234 15.4505 10.2523 15.7675L15.6303 19.7405C16.1593 20.1315 16.9153 19.8445 17.0523 19.2005L19.6933 6.75348C19.8213 6.15148 19.2303 5.64848 18.6563 5.86948L3.14134 11.8535C2.68434 12.0295 2.70634 12.6825 3.17334 12.8285L7.25034 14.1005"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.lock} viewBox="0 0 24 24" fill="none">
                <path
                    d="M16 11H17.4C17.7314 11 18 11.2686 18 11.6V20.4C18 20.7314 17.7314 21 17.4 21H6.6C6.26863 21 6 20.7314 6 20.4V11.6C6 11.2686 6.26863 11 6.6 11H8M16 11V7C16 5.66667 15.2 3 12 3C8.8 3 8 5.66667 8 7V11M16 11H8"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.unlock} viewBox="0 0 24 24" fill="none">
                <path
                    d="M10.75 8.75H12.15C12.4814 8.75 12.75 9.01863 12.75 9.35V18.15C12.75 18.4814 12.4814 18.75 12.15 18.75H1.35C1.01863 18.75 0.75 18.4814 0.75 18.15V9.35C0.75 9.01863 1.01863 8.75 1.35 8.75H2.75M10.75 8.75V4.75C10.75 3.41667 9.95 0.75 6.75 0.75C3.55 0.75 2.75 3.41667 2.75 4.75V8.75M10.75 8.75H2.75"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id={ICON_TYPES.unlock} viewBox="0 0 24 24" fill="none">
                <path d="M11.5 11H6.6C6.26863 11 6 11.2686 6 11.6V20.4C6 20.7314 6.26863 21 6.6 21H17.4C17.7314 21 18 20.7314 18 20.4V17.5" stroke="#C38631" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.9995 11V7C15.9995 5.66667 15.1995 3 11.9995 3C11.2527 3 10.6366 3.14525 10.1309 3.38491" stroke="#C38631" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11H17.4C17.7314 11 18 11.2686 18 11.6V12" stroke="#C38631" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 7V7.5V11" stroke="#C38631" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 2L21 20" stroke="#C38631" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
        </svg>
    )
}
