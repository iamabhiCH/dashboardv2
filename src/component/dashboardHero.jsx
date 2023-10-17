import React from "react";
import CircleStats from '../assets/circle.png'

const dashboardHero = () => {
    return (
        <div className="py-8 px-10 w-full bg-gray-100">
            <div className="dashboardHeroUser flex justify-between">
                <div className="userName font-bold">
                    <p>Hello Shahrukh 👋🏻,</p>
                </div>
                <div className="searchBar flex relative items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-6 py-1 rounded-lg"
                    />
                    <div className="searchIcon w-6 absolute left-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 101"
                            id="search"
                            fill="#a0aec0"
                        >
                            <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="dataBox py-14">
                <div className="card flex py-6 px-3 gap-4 rounded-lg bg-white">
                    <div className="boxLeftSide w-20 rounded-full p-3 bg-green-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            id="Income"
                        >
                            <path
                                fill="#34a853"
                                fill-rule="evenodd"
                                d="M2 11.25C1.58579 11.25 1.25 11.5858 1.25 12V21C1.25 21.4142 1.58579 21.75 2 21.75H5C5.33979 21.75 5.63713 21.5216 5.72468 21.1932L7.72468 13.6932C7.81085 13.3701 7.67265 13.0289 7.38587 12.8569L6.66721 12.4257C5.38503 11.6564 3.91788 11.25 2.42262 11.25H2Z"
                                clip-rule="evenodd"
                                class="color000000 svgShape"
                            ></path>
                            <path
                                fill="#34a853"
                                fill-rule="evenodd"
                                d="M17.9481 16.4481C19.3174 15.9502 20.8511 16.2904 21.8813 17.3207L22.5303 17.9697C22.703 18.1424 22.7808 18.3883 22.7388 18.6289C22.6968 18.8695 22.5403 19.0746 22.3193 19.1786L15.7545 22.268C14.3465 22.9305 12.7529 23.0863 11.2432 22.7089L5.31809 21.2276C4.91625 21.1271 4.67193 20.7199 4.77239 20.3181C4.87285 19.9162 5.28005 19.6719 5.6819 19.7724L11.607 21.2537C12.7812 21.5472 14.0207 21.4261 15.1158 20.9107L20.7102 18.278C20.0962 17.7412 19.2347 17.5763 18.4607 17.8578L17.0219 18.381C15.4212 18.9631 13.705 19.1565 12.0148 18.9452L10.407 18.7442C9.99595 18.6928 9.70441 18.318 9.75579 17.907C9.80716 17.496 10.182 17.2044 10.593 17.2558L12.2009 17.4568C13.6552 17.6386 15.1319 17.4722 16.5093 16.9713L17.9481 16.4481Z"
                                clip-rule="evenodd"
                                class="color000000 svgShape"
                            ></path>
                            <path
                                fill="#34a853"
                                fill-rule="evenodd"
                                d="M6.25916 14.383C6.32377 13.9739 6.70781 13.6946 7.11696 13.7592L14.1476 14.8693C15.8262 15.1343 16.6197 17.0904 15.6 18.45L14.4 17.55C14.7414 17.0947 14.4757 16.4397 13.9136 16.3509L6.88302 15.2408C6.47387 15.1762 6.19456 14.7922 6.25916 14.383zM16.5 2.75C14.1528 2.75 12.25 4.65279 12.25 7 12.25 9.34721 14.1528 11.25 16.5 11.25 18.8472 11.25 20.75 9.34721 20.75 7 20.75 4.65279 18.8472 2.75 16.5 2.75zM10.75 7C10.75 3.82436 13.3244 1.25 16.5 1.25 19.6756 1.25 22.25 3.82436 22.25 7 22.25 10.1756 19.6756 12.75 16.5 12.75 13.3244 12.75 10.75 10.1756 10.75 7z"
                                clip-rule="evenodd"
                                class="color000000 svgShape"
                            ></path>
                            <path
                                fill="#34a853"
                                fill-rule="evenodd"
                                d="M16.5 3.25C16.9142 3.25 17.25 3.58579 17.25 4V4.25H17.5C17.9142 4.25 18.25 4.58579 18.25 5C18.25 5.41421 17.9142 5.75 17.5 5.75H16.5C16.3619 5.75 16.25 5.86193 16.25 6V6.25H17.5C17.9142 6.25 18.25 6.58579 18.25 7V8C18.25 8.6981 17.8412 9.30073 17.25 9.58159V10C17.25 10.4142 16.9142 10.75 16.5 10.75C16.0858 10.75 15.75 10.4142 15.75 10V9.75H15.5C15.0858 9.75 14.75 9.41421 14.75 9C14.75 8.58579 15.0858 8.25 15.5 8.25H16.5C16.6381 8.25 16.75 8.13807 16.75 8V7.75H15.5C15.0858 7.75 14.75 7.41421 14.75 7V6C14.75 5.3019 15.1588 4.69927 15.75 4.41841V4C15.75 3.58579 16.0858 3.25 16.5 3.25Z"
                                clip-rule="evenodd"
                                class="color000000 svgShape"
                            ></path>
                        </svg>
                    </div>
                    <div className="boxRightSide flex flex-col justify-center">
                        <p className="text-xs text-gray-400">Earning</p>
                        <p className="font-bold text-2xl">$198k</p>
                        <div className="profit flex">
                            <p className="text-sm flex">
                                <span className="text-green-600 flex font-bold">
                                    <span className="font-bold flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-3 rotate-180"
                                        >
                                            <path
                                                d="M11.293,22.707a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414L13,19.586V2a1,1,0,0,0-2,0V19.586L6.707,15.293a1,1,0,0,0-1.414,1.414Z"
                                                fill="#34a853"
                                            ></path>
                                        </svg>
                                    </span>
                                    37.8%
                                </span>
                                &nbsp;this month
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card flex py-6 px-3 gap-4 rounded-lg bg-white">
                    <div className="boxLeftSide w-20 rounded-full p-3 bg-purple-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 48 48"
                            id="Lastseenproduct"
                        >
                            <path
                                d="M13 26H31a1 1 0 000-2H13a1 1 0 000 2zM13 18H31a1 1 0 000-2H13a1 1 0 000 2zM21 32H13a1 1 0 000 2h8a1 1 0 000-2z"
                                fill="#34a853"
                                class="color000000 svgShape"
                            ></path>
                            <path
                                d="M37,29.08V9a3,3,0,0,0-3-3H27a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2H10A3,3,0,0,0,7,9V39a3,3,0,0,0,3,3H27.73A8,8,0,1,0,37,29.08ZM19,6h6V7h0V8H19ZM9,39V9a1,1,0,0,1,1-1h7a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2h7a1,1,0,0,1,1,1V28.26A8.24,8.24,0,0,0,33,28a8,8,0,0,0-6.92,12H10A1,1,0,0,1,9,39Zm24,3a5.94,5.94,0,0,1-4.18-1.71h0A6,6,0,1,1,33,42Z"
                                fill="#34a853"
                                class="color000000 svgShape"
                            ></path>
                            <path
                                d="M36,35H34V32a1,1,0,0,0-2,0v4a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2Z"
                                fill="#34a853"
                                class="color000000 svgShape"
                            ></path>
                        </svg>
                    </div>
                    <div className="boxRightSide flex flex-col justify-center">
                        <p className="text-xs text-gray-400">Orders</p>
                        <p className="font-bold text-2xl">$2.4k</p>
                        <div className="profit flex">
                            <p className="text-sm flex">
                                <span className="text-red-600 flex font-bold">
                                    <span className="font-bold flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-3 rotate-80"
                                        >
                                            <path
                                                d="M11.293,22.707a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414L13,19.586V2a1,1,0,0,0-2,0V19.586L6.707,15.293a1,1,0,0,0-1.414,1.414Z"
                                                fill="#FF0000"
                                            ></path>
                                        </svg>
                                    </span>
                                    2%
                                </span>
                                &nbsp;this month
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card flex py-6 px-3 gap-4 rounded-lg bg-white">
                    <div className="boxLeftSide w-20 rounded-full p-3 bg-blue-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 38 32"
                            id="Wallet"
                        >
                            <g fill="#34a853" class="color828282 svgShape">
                                <path
                                    d="M32.509 7.5a.5.5 0 0 0 .5-.5V5.335a1.64 1.64 0 0 0-1.638-1.638h-2.687l-.613-1.809a.5.5 0 0 0-.619-.318L12.899 5.994a.501.501 0 0 0 .292.957L27.28 2.667l1.343 3.965a.499.499 0 1 0 .947-.321l-.547-1.615h2.349c.352 0 .638.286.638.638V7c-.001.276.223.5.499.5z"
                                    fill="#4285f4"
                                    class="color000000 svgShape"
                                ></path>
                                <path
                                    d="M36.5 15a.5.5 0 0 0 0 1c.351 0 .5.149.5.5v6c0 .351-.149.5-.5.5h-8c-.351 0-.5-.149-.5-.5v-5c0-.351.149-.5.5-.5h6a.5.5 0 0 0 .5-.5v-6c0-.911-.589-1.5-1.5-1.5H3c-1.233 0-2-.767-2-2s.767-2 2-2h5.076l-3.026.998a.5.5 0 1 0 .313.949L23.482.974a.5.5 0 1 0-.314-.95l-12.1 3.99C11.045 4.01 11.024 4 11 4H3C1.206 4 0 5.206 0 7v22c0 1.794 1.206 3 3 3h30.5c.911 0 1.5-.589 1.5-1.5v-5a.5.5 0 0 0-1 0v5c0 .351-.149.5-.5.5H3c-1.233 0-2-.767-2-2V9.312c.513.433 1.192.688 2 .688h30.5c.351 0 .5.149.5.5V16h-5.5c-.911 0-1.5.589-1.5 1.5v5c0 .911.589 1.5 1.5 1.5h8c.911 0 1.5-.589 1.5-1.5v-6c0-.911-.589-1.5-1.5-1.5z"
                                    fill="#4285f4"
                                    class="color000000 svgShape"
                                ></path>
                                <circle
                                    cx="32"
                                    cy="20"
                                    r="1"
                                    fill="#4285f4"
                                    class="color000000 svgShape"
                                ></circle>
                            </g>
                        </svg>
                    </div>
                    <div className="boxRightSide flex flex-col justify-center">
                        <p className="text-xs text-gray-400">Balance</p>
                        <p className="font-bold text-2xl">$2.4k</p>
                        <div className="profit flex">
                            <p className="text-sm flex">
                                <span className="text-red-600 flex font-bold">
                                    <span className="font-bold flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-3 rotate-80"
                                        >
                                            <path
                                                d="M11.293,22.707a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414L13,19.586V2a1,1,0,0,0-2,0V19.586L6.707,15.293a1,1,0,0,0-1.414,1.414Z"
                                                fill="#FF0000"
                                            ></path>
                                        </svg>
                                    </span>
                                    2%
                                </span>
                                &nbsp;this month
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card flex py-6 px-3 gap-4 rounded-lg bg-white">
                    <div className="boxLeftSide w-20 rounded-full p-3 bg-red-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 512 512"
                            viewBox="0 0 512 512"
                            id="Shoppingbasket"
                        >
                            <path
                                fill="#fbbc05"
                                d="M434.631,488H77.369c-7.619,0-14.028-5.712-14.901-13.281L40,280h432l-22.468,194.719
	                            C448.659,482.288,442.25,488,434.631,488z"
                                class="colorf2d061 svgShape"
                            ></path>
                            <path
                                fill="#e6675c"
                                d="M474.225,288H37.775C30.167,288,24,281.833,24,274.225v-20.449C24,246.167,30.167,240,37.775,240h436.449
	                            c7.608,0,13.775,6.167,13.775,13.775v20.449C488,281.833,481.833,288,474.225,288z"
                                class="colore65c79 svgShape"
                            ></path>
                            <path
                                fill="#ea4335"
                                d="M261.705 456h-11.41c-5.686 0-10.295-4.609-10.295-10.295v-115.41c0-5.686 4.609-10.295 10.295-10.295h11.41c5.686 0 10.295 4.609 10.295 10.295v115.41C272 451.391 267.391 456 261.705 456zM334.571 456h-11.965c-5.754 0-10.321-4.843-9.983-10.587l6.824-116c.311-5.286 4.688-9.413 9.983-9.413h11.965c5.754 0 10.321 4.843 9.983 10.587l-6.824 116C344.243 451.873 339.866 456 334.571 456zM407.108 456h-11.862c-5.986 0-10.631-5.223-9.931-11.168l13.647-116c.592-5.036 4.861-8.832 9.931-8.832h11.862c5.986 0 10.631 5.223 9.931 11.168l-13.647 116C416.447 452.205 412.178 456 407.108 456zM177.429 456h11.965c5.754 0 10.321-4.843 9.983-10.587l-6.824-116c-.311-5.286-4.688-9.413-9.983-9.413h-11.965c-5.754 0-10.321 4.843-9.983 10.587l6.824 116C167.757 451.873 172.134 456 177.429 456zM104.892 456h11.862c5.986 0 10.631-5.223 9.932-11.168l-13.647-116c-.592-5.036-4.861-8.832-9.932-8.832H91.245c-5.986 0-10.631 5.223-9.932 11.168l13.647 116C95.553 452.205 99.822 456 104.892 456z"
                                class="colorb0475d svgShape"
                            ></path>
                            <path
                                fill="#4285f4"
                                d="M102.771,267.568l-7.748-1.993c-10.698-2.751-17.139-13.654-14.388-24.351l45.832-178.2
	                            c2.751-10.698,13.654-17.139,24.351-14.388l7.748,1.993c10.698,2.751,17.139,13.654,14.388,24.351L127.122,253.18
	                            C124.371,263.877,113.468,270.319,102.771,267.568z"
                                class="color4d96c1 svgShape"
                            ></path>
                            <circle
                                cx="97.506"
                                cy="256"
                                r="38.494"
                                fill="#34a853"
                                class="color3c7495 svgShape"
                            ></circle>
                            <circle
                                cx="97.506"
                                cy="256"
                                r="14.494"
                                fill="#255d34"
                                class="color25495d svgShape"
                            ></circle>
                            <path
                                fill="#4285f4"
                                d="M409.229,267.568l7.748-1.993c10.698-2.751,17.139-13.654,14.388-24.351l-45.832-178.2
	                            c-2.751-10.698-13.654-17.139-24.351-14.388l-7.748,1.993c-10.698,2.751-17.139,13.654-14.388,24.351l45.832,178.201
	                            C387.629,263.877,398.532,270.319,409.229,267.568z"
                                class="color4d96c1 svgShape"
                            ></path>
                            <circle
                                cx="414.494"
                                cy="256"
                                r="38.494"
                                fill="#34a853"
                                class="color3c7495 svgShape"
                            ></circle>
                            <circle
                                cx="414.494"
                                cy="256"
                                r="16"
                                fill="#255d34"
                                class="color25495d svgShape"
                            ></circle>
                            <path
                                fill="#fbbc05"
                                d="M263.927,27.715L263.927,27.715c5.003-6.003,14.605-4.482,17.508,2.773v0
	                            c2.394,5.983,9.625,8.332,15.078,4.899l0,0c6.614-4.163,15.275,0.25,15.794,8.048v0c0.428,6.43,6.579,10.899,12.826,9.319l0,0
	                            c7.576-1.916,14.45,4.958,12.534,12.534l0,0c-1.58,6.247,2.889,12.398,9.319,12.826h0c7.798,0.519,12.211,9.181,8.048,15.794l0,0
	                            c-3.433,5.453-1.083,12.684,4.899,15.078l0,0c7.255,2.904,8.776,12.505,2.773,17.508l0,0c-4.95,4.126-4.95,11.729,0,15.854l0,0
	                            c6.003,5.003,4.482,14.605-2.773,17.508h0c-5.983,2.394-8.332,9.625-4.899,15.078l0,0c4.163,6.614-0.25,15.275-8.048,15.794h0
	                            c-6.43,0.428-10.899,6.579-9.319,12.826l0,0c1.916,7.576-4.958,14.45-12.534,12.534l0,0c-6.247-1.58-12.398,2.889-12.826,9.319v0
	                            c-0.519,7.798-9.181,12.211-15.794,8.048l0,0c-5.453-3.433-12.684-1.083-15.078,4.899v0c-2.904,7.255-12.505,8.776-17.508,2.773l0,0
	                            c-4.126-4.95-11.729-4.95-15.854,0l0,0c-5.003,6.003-14.605,4.482-17.508-2.773l0,0c-2.394-5.983-9.625-8.332-15.078-4.899l0,0
	                            c-6.614,4.163-15.275-0.25-15.794-8.048v0c-0.428-6.43-6.579-10.899-12.826-9.319l0,0c-7.576,1.916-14.45-4.958-12.534-12.534v0
	                            c1.58-6.247-2.889-12.398-9.319-12.826h0c-7.798-0.519-12.211-9.181-8.048-15.794l0,0c3.433-5.453,1.083-12.684-4.899-15.078h0
	                            c-7.255-2.904-8.776-12.505-2.773-17.508l0,0c4.95-4.126,4.95-11.729,0-15.854l0,0c-6.003-5.003-4.482-14.605,2.773-17.508l0,0
	                            c5.983-2.394,8.332-9.625,4.899-15.078l0,0c-4.163-6.614,0.25-15.275,8.048-15.794h0c6.43-0.428,10.899-6.579,9.319-12.826v0
	                            c-1.916-7.576,4.958-14.45,12.534-12.534l0,0c6.247,1.58,12.398-2.889,12.826-9.319v0c0.519-7.798,9.181-12.211,15.794-8.048l0,0
	                            c5.453,3.433,12.684,1.083,15.078-4.899l0,0c2.903-7.255,12.505-8.776,17.508-2.773l0,0
	                            C252.199,32.665,259.801,32.665,263.927,27.715z"
                                class="colorf2d061 svgShape"
                            ></path>
                            <path
                                fill="#e6675c"
                                d="M210.403,192.226l-10.629-10.629c-3.313-3.313-3.313-8.685,0-11.998l89.825-89.825
	                            c3.313-3.313,8.685-3.313,11.998,0l10.629,10.629c3.313,3.313,3.313,8.685,0,11.998l-89.825,89.825
	                            C219.088,195.54,213.716,195.54,210.403,192.226z"
                                class="colore65c79 svgShape"
                            ></path>
                            <circle
                                cx="208"
                                cy="96"
                                r="16"
                                fill="#e6675c"
                                class="colore65c79 svgShape"
                            ></circle>
                            <circle
                                cx="304"
                                cy="176"
                                r="16"
                                fill="#e6675c"
                                class="colore65c79 svgShape"
                            ></circle>
                        </svg>
                    </div>
                    <div className="boxRightSide flex flex-col justify-center">
                        <p className="text-xs text-gray-400">Total Sales</p>
                        <p className="font-bold text-2xl">$89k</p>
                        <div className="profit flex">
                            <p className="text-sm flex">
                                <span className="text-green-600 flex font-bold">
                                    <span className="font-bold flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-3 rotate-180"
                                        >
                                            <path
                                                d="M11.293,22.707a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414L13,19.586V2a1,1,0,0,0-2,0V19.586L6.707,15.293a1,1,0,0,0-1.414,1.414Z"
                                                fill="#34a853"
                                            ></path>
                                        </svg>
                                    </span>
                                    11%
                                </span>
                                &nbsp;this week
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Section */}
            <div className="stats p-4 h-1/2 bg-white rounded-lg relative">
                <div className="stats-data">
                    <div className="stats-head flex justify-between w-2/3">
                        <div className="left-head">
                            <p className="font-bold text-lg">Overview</p>
                            <p className="text-gray-400 font-light">
                                Monthly Earning
                            </p>
                        </div>
                        <div className="right-head flex px-1 items-center">
                            <div className="content flex justify-between gap-2 bg-gray-100 px-5 py-1 rounded-md">
                                <p>Quaterly</p>
                                <div className="arrow flex items-center w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="arrow"
                                        x="0"
                                        y="0"
                                        version="1.1"
                                        viewBox="0 0 29 29"
                                        className="rotate-0"
                                        fill="#000"
                                    >
                                        <path
                                            fill="none"
                                            stroke="#000"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="10"
                                            stroke-width="2"
                                            d="m20.5 11.5-6 6-6-6"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stats-track flex items-end justify-between w-2/3 h-4/5 relative">
                        <div className="h-44 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">Jan</span>
                        </div>
                        <div className="h-32 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">Feb</span>
                        </div>
                        <div className="h-52 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">Mar</span>
                        </div>
                        <div className="h-40 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">Apr</span>
                        </div>
                        <div className="h-48 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">May</span>
                        </div>
                        <div className="h-24 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">Jun</span>
                        </div>
                        <div className="h-48 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">Jul</span>
                        </div>
                        <div className="h-56 w-10 bg-violet-800 rounded-md">
                            <span className="absolute px-1 -bottom-9">Aug</span>
                        </div>
                        <div className="h-52 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">Sep</span>
                        </div>
                        <div className="h-44 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">Oct</span>
                        </div>
                        <div className="h-40 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">Nov</span>
                        </div>
                        <div className="h-44 w-10 bg-gray-200 rounded-md">
                            <span className="absolute px-1 -bottom-9">Dec</span>
                        </div>
                    </div>
                </div>
                <div className="stats-circle p-4 absolute h-full w-2/6 bg-white right-0 top-0">
                    <div className="left-head">
                        <p className="font-bold text-lg">Customers</p>
                        <p className="text-gray-400 font-light">
                            Customers that buy products
                        </p>
                    </div>
                    <div className="statsCircle flex justify-center items-center mt-5">
                        <img src={CircleStats} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dashboardHero;
