import React from "react";

const dashboardNavigation = () => {
    return (
        <>
            <div className="w-80 bg-gray-400 navDash">
                <div className="dashboardTitle flex gap-3 py-8 px-5">
                    <div className="DashboardHeaderIcon w-7 flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 2"
                            viewBox="0 0 35 35"
                            id="setting"
                            style={{ fill: "white" }}
                        >
                            <path d="M24.5 32.849h-14a3.236 3.236 0 0 1-2.792-1.613l-7-12.124a3.231 3.231 0 0 1 0-3.223l7-12.125A3.234 3.234 0 0 1 10.5 2.151h14a3.234 3.234 0 0 1 2.793 1.612l7 12.125a3.231 3.231 0 0 1 0 3.223l-7 12.125a3.235 3.235 0 0 1-2.793 1.613Zm-14-28.2a.727.727 0 0 0-.627.363l-7 12.124a.725.725 0 0 0 0 .725l7 12.123a.727.727 0 0 0 .627.363h14a.726.726 0 0 0 .629-.364l7-12.123a.725.725 0 0 0 0-.725l-7-12.123a.725.725 0 0 0-.628-.363Z"></path>
                            <path d="M17.5 23.862a6.362 6.362 0 1 1 6.362-6.362 6.369 6.369 0 0 1-6.362 6.362Zm0-10.224a3.862 3.862 0 1 0 3.862 3.862 3.866 3.866 0 0 0-3.862-3.862Z"></path>
                        </svg>
                    </div>
                    <div className="DashboardHeadertitle text-2xl font-semibold text-white">
                        <h2 className="tracking-wide">Dashboard</h2>
                    </div>
                </div>
                <div className="py-5 px-5">
                    <div className="navBg flex items-center gap-3 rounded-lg p-2">
                        <div className="w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                id="key"
                                fill="white"
                            >
                                <path d="M43.61 4.39A15 15 0 0 0 19 20.49L1.46 38.12C-.38 40 0 41.53 0 47a1 1 0 0 0 1 1h7.5a2.5 2.5 0 0 0 2.5-2.5.5.5 0 0 1 .5-.5h1a2.5 2.5 0 0 0 2.5-2.5c0-2.56-.31-1.78 1.27-3.35.19-.2.19-.15 2.23-.15a2.5 2.5 0 0 0 2.5-2.5v-1.88c0-.29-.33.13 5.71-5.91.12-.13-.17-.13.82.25A14.88 14.88 0 0 0 33 30c13.43 0 20-16.26 10.61-25.61ZM19 36.5c0 .63-.55.5-2.38.5-1.24 0-1.76.72-2.89 1.85-1.52 1.52-.05 4.15-1.23 4.15h-1A2.5 2.5 0 0 0 9 45.5a.5.5 0 0 1-.5.5H2v-4.35c0-1.73-.36-.88 18-19.25a15.12 15.12 0 0 0 1.76 2.46L5.79 40.79a1 1 0 0 0 .71 1.71c.59 0-.69 1.11 16.64-16.22a14.65 14.65 0 0 0 1.8 1.36C18.31 34.28 19 32.83 19 36.5Zm23.19-12.31a13 13 0 1 1 0-18.38 13 13 0 0 1 0 18.38Z"></path>
                                <path d="M38 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"></path>
                            </svg>
                        </div>
                        <div className=" font-medium text-white">
                            <p className="tracking-wide">Dashboard</p>
                        </div>
                    </div>
                </div>

                <div className="subDashboardContent flex flex-col gap-5 font-normal">
                    <div className="dashboardContent flex justify-between px-5">
                        <div className="flex items-center gap-3 rounded-lg p-2">
                            <div className="dashboardContentIcon w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 16 16"
                                    id="cube"
                                >
                                    <path
                                        fill="#fff"
                                        d="M7.81635 1.03383C7.93558 0.98612 8.0686 0.986119 8.18784 1.03383L14.6879 3.63465C14.8778 3.7106 15.0022 3.89447 15.0022 4.09892C15.0022 4.11674 15.0013 4.13441 14.9994 4.15186C14.9996 4.15818 14.9998 4.16452 14.9998 4.1709L14.9998 11.8691C14.9998 12.0727 14.8763 12.256 14.6876 12.3325L8.19463 14.9649C8.12932 14.9913 8.06168 15.003 7.99544 15.0015C7.93136 15.0017 7.86696 14.9896 7.80585 14.9649L1.31288 12.3325C1.12419 12.256 1.00073 12.0727 1.00073 11.8691L1.00073 4.1709C1.00073 4.15527 1.00145 4.1398 1.00285 4.12454C1.00242 4.11604 1.0022 4.1075 1.0022 4.09892C1.00218 3.89447 1.12663 3.7106 1.31645 3.63465L7.81635 1.03383ZM8.49435 13.7643L13.9998 11.5323L13.9998 4.83827L8.50018 7.03736L8.49435 13.7643ZM2.00073 4.83672L2.00073 11.5323L7.49435 13.7595L7.50018 7.03585L2.00073 4.83672ZM8.0021 2.03659L2.84847 4.09872L8.00208 6.15956L13.1559 4.09872L8.0021 2.03659Z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="dashboardContentTag text-white">
                                <p className="tracking-wide text-md">Product</p>
                            </div>
                        </div>
                        <div className="arrow flex items-center w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="arrow"
                                x="0"
                                y="0"
                                version="1.1"
                                viewBox="0 0 29 29"
                                className="-rotate-90"
                            >
                                <path
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                    d="m20.5 11.5-6 6-6-6"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="dashboardContent flex justify-between px-5">
                        <div className="flex items-center gap-3 rounded-lg p-2">
                            <div className="dashboardContentIcon w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    id="user"
                                >
                                    <path
                                        fill="#fff"
                                        d="M5.143 2.25A2.896 2.896 0 0 0 2.25 5.143v5.714a2.897 2.897 0 0 0 2.893 2.895h5.714a2.899 2.899 0 0 0 2.893-2.895V5.143a2.896 2.896 0 0 0-2.893-2.893H5.143zm0 .5h5.714a2.397 2.397 0 0 1 2.395 2.393v5.714a2.38 2.38 0 0 1-.764 1.743c-.613-1.961-2.452-3.356-4.535-3.356a4.732 4.732 0 0 0-4.514 3.29 2.385 2.385 0 0 1-.689-1.677V5.143A2.395 2.395 0 0 1 5.143 2.75zm2.841 1.527a2.244 2.244 0 0 0-2.242 2.24A2.246 2.246 0 0 0 7.984 8.76a2.242 2.242 0 0 0 0-4.482zm0 .5a1.742 1.742 0 0 1 0 3.483c-.96 0-1.742-.782-1.742-1.742s.782-1.74 1.742-1.74zm-.03 4.967c1.923 0 3.617 1.324 4.11 3.168-.356.21-.764.34-1.205.34H5.143v-.002c-.475 0-.917-.143-1.29-.383a4.241 4.241 0 0 1 4.1-3.123z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="dashboardContentTag text-white">
                                <p className="tracking-wide text-md">
                                    Customers
                                </p>
                            </div>
                        </div>
                        <div className="arrow flex items-center w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="arrow"
                                x="0"
                                y="0"
                                version="1.1"
                                viewBox="0 0 29 29"
                                className="-rotate-90"
                            >
                                <path
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                    d="m20.5 11.5-6 6-6-6"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="dashboardContent flex justify-between px-5">
                        <div className="flex items-center gap-3 rounded-lg p-2">
                            <div className="dashboardContentIcon w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    id="saving"
                                    style={{ fill: "white" }}
                                >
                                    <path d="M28,15V12a3,3,0,0,0-3-3H24c0-.07,0-.13,0-.2A5.8,5.8,0,0,0,18.2,3,5.71,5.71,0,0,0,15,4a5.69,5.69,0,0,0-3.2-1A5.8,5.8,0,0,0,6,8.8c0,.07,0,.13,0,.2H5a3,3,0,0,0-3,3V26a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V23a2,2,0,0,0,2-2V17A2,2,0,0,0,28,15ZM22,8.8c0,.07,0,.13,0,.2h-4.4c0-.07,0-.13,0-.2a5.8,5.8,0,0,0-1.09-3.38A3.76,3.76,0,0,1,22,8.8ZM8,8.8a3.8,3.8,0,0,1,7.6,0c0,.07,0,.13,0,.2H8C8,8.93,8,8.87,8,8.8ZM26,26a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H25a1,1,0,0,1,1,1v3H21a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3h5Zm-5-5a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1h7v4Z"></path>
                                </svg>
                            </div>
                            <div className="dashboardContentTag text-white">
                                <p className="tracking-wide text-md">Income</p>
                            </div>
                        </div>
                        <div className="arrow flex items-center w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="arrow"
                                x="0"
                                y="0"
                                version="1.1"
                                viewBox="0 0 29 29"
                                className="-rotate-90"
                            >
                                <path
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                    d="m20.5 11.5-6 6-6-6"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="dashboardContent flex justify-between px-5">
                        <div className="flex items-center gap-3 rounded-lg p-2">
                            <div className="dashboardContentIcon w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    id="offer"
                                    fill="white"
                                >
                                    <path d="M12.327 8.38 8.38 12.327a.5.5 0 0 1-.707-.707l3.947-3.947a.5.5 0 0 1 .707.707Zm-3.703.244a.779.779 0 1 0-1.101 0 .779.779 0 0 0 1.101 0Zm2.752 2.751a.779.779 0 1 0 1.101 0 .779.779 0 0 0-1.101 0Zm5.801-.24a1.483 1.483 0 0 1-.958 1.172l-.977.364.28 1.004a1.5 1.5 0 0 1-1.847 1.847l-1.004-.28-.363.977a1.483 1.483 0 0 1-1.171.958 1.575 1.575 0 0 1-.242.02 1.482 1.482 0 0 1-1.17-.57l-.646-.817-.866.576a1.5 1.5 0 0 1-2.33-1.187l-.042-1.04-1.04-.042a1.5 1.5 0 0 1-1.187-2.33l.576-.866-.817-.647a1.5 1.5 0 0 1 .408-2.582l.977-.363-.28-1.004a1.5 1.5 0 0 1 1.847-1.848l1.004.28.363-.976a1.5 1.5 0 0 1 2.582-.408l.647.817.866-.576a1.5 1.5 0 0 1 2.33 1.187l.042 1.04 1.04.042a1.5 1.5 0 0 1 1.187 2.33l-.576.865.817.647a1.483 1.483 0 0 1 .55 1.41Zm-1.17-.625-1.179-.933a.5.5 0 0 1-.106-.669l.831-1.249a.5.5 0 0 0-.395-.777l-1.5-.061a.5.5 0 0 1-.479-.48l-.062-1.5a.5.5 0 0 0-.777-.394l-1.248.83a.499.499 0 0 1-.67-.105L9.49 3.994a.5.5 0 0 0-.86.136l-.524 1.407a.497.497 0 0 1-.603.307L6.057 5.44a.5.5 0 0 0-.617.616l.404 1.447a.5.5 0 0 1-.307.603L4.13 8.63a.5.5 0 0 0-.136.86l1.178.933a.5.5 0 0 1 .106.669l-.831 1.249a.5.5 0 0 0 .395.776l1.5.062a.5.5 0 0 1 .479.479l.062 1.5a.5.5 0 0 0 .777.395l1.248-.83a.5.5 0 0 1 .67.105l.932 1.178a.5.5 0 0 0 .86-.136l.524-1.407a.5.5 0 0 1 .603-.307l1.446.403a.497.497 0 0 0 .489-.128.491.491 0 0 0 .128-.488l-.404-1.447a.5.5 0 0 1 .307-.603l1.407-.523a.5.5 0 0 0 .136-.86Z"></path>
                                </svg>
                            </div>
                            <div className="dashboardContentTag text-white">
                                <p className="tracking-wide text-md">Promote</p>
                            </div>
                        </div>
                        <div className="arrow flex items-center w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="arrow"
                                x="0"
                                y="0"
                                version="1.1"
                                viewBox="0 0 29 29"
                                className="-rotate-90"
                            >
                                <path
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                    d="m20.5 11.5-6 6-6-6"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="dashboardContent flex justify-between px-5">
                        <div className="flex items-center gap-3 rounded-lg p-2">
                            <div className="dashboardContentIcon w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 25 25"
                                    id="question"
                                    fill="white"
                                >
                                    <path d="M17.5,3H7.5A4.505,4.505,0,0,0,3,7.5v10A4.505,4.505,0,0,0,7.5,22h10A4.505,4.505,0,0,0,22,17.5V7.5A4.505,4.505,0,0,0,17.5,3ZM21,17.5A3.5,3.5,0,0,1,17.5,21H7.5A3.5,3.5,0,0,1,4,17.5V7.5A3.5,3.5,0,0,1,7.5,4h10A3.5,3.5,0,0,1,21,7.5Zm-8-.435a.5.5,0,1,1-.5-.5A.5.5,0,0,1,13,17.065Zm2.677-6.454A3.8,3.8,0,0,1,14.049,13.4c-.563.51-1.049.95-1.049,1.479v.585a.5.5,0,1,1-1,0v-.585a3.116,3.116,0,0,1,1.378-2.22c.668-.606,1.3-1.178,1.3-2.047a2.177,2.177,0,1,0-4.354,0,.5.5,0,0,1-1,0,3.177,3.177,0,1,1,6.354,0Z"></path>
                                </svg>
                            </div>
                            <div className="dashboardContentTag text-white">
                                <p className="tracking-wide text-md">Help</p>
                            </div>
                        </div>
                        <div className="arrow flex items-center w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="arrow"
                                x="0"
                                y="0"
                                version="1.1"
                                viewBox="0 0 29 29"
                                className="-rotate-90"
                            >
                                <path
                                    fill="none"
                                    stroke="#fff"
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
        </>
    );
};

export default dashboardNavigation;
