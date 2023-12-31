import { Icon } from "@iconify/react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-50 via-gray-50 to-gray-300 dark:from-slate-950 dark:via-slate-950 dark:to-slate-800">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-4 lg:px-0 flex-col md:flex-row">
        <div className="flex flex-col justify-center pb-10 md:pb-0">
          <h2 className=" text-4xl sm:text-7xl font-bold text-slate-900 dark:text-white">
            Find Your Game Deal
          </h2>
          <p className="text-slate-800 dark:text-gray-300 py-4 max-w-md">
            Here you will be able to search for your PC games and see if there
            are any deals currently running on Steam, GamersGate, or
            GreenManGaming. Click below to begin!
          </p>
          <div>
            <Button className="group cursor-pointer" asChild>
              <Link to="/dealsearch">
                Deal Search
                <Icon
                  className="group-hover:translate-x-1 duration-300 ml-1"
                  icon="material-symbols:arrow-forward-ios-rounded"
                />
              </Link>
            </Button>
          </div>
        </div>
        <HomeCarousel />
      </div>
    </div>
  );
}
