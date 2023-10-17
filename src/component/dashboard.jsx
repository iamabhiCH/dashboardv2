import React from "react";
import DashboardNavigation from "./dashboardNavigation";
import DashboardHero from "./dashboardHero";

const dashboard = () => {
    return (
        <>
            <div className="dashboard flex h-screen">
                <DashboardNavigation />
                <DashboardHero />
            </div>
        </>
    );
};

export default dashboard;
