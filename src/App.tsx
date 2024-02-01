import { useState } from "react";
import data from "./data.json";
import Footer from "./Footer";

function App() {
  const [statsType, setStatsType] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

  return (
    <>
      <main className="w-screen px-6 max-lg:flex-col max-lg:flex grid grid-cols-4 grid-rows-2 max-lg:gap-6 gap-8 max-w-6xl max-lg:py-20 max-lg:max-w-xl max-[412px]:pb-24">
        <section className="bg-Dark-blue rounded-2xl row-span-2 ">
          <header className="flex flex-wrap flex-col max-lg:flex-row max-lg:justify-center bg-Blue p-8 max-lg:gap-4 gap-10 rounded-2xl pb-20 max-lg:pb-8">
            <img
              className="max-lg:w-16 w-[5.4rem] aspect-square border-[3px] rounded-full"
              src="image-jeremy.png"
              alt="Jeremy image"
            />
            <div>
              <p className="text-Pale-Blue text-sm max-lg:text-base">
                Report for
              </p>
              <h1 className="max-lg:whitespace-nowrap text-[2.5rem] max-lg:text-2xl leading-tight">
                Jeremy Robson
              </h1>
            </div>
          </header>
          <nav className="px-8 py-6">
            <ul className="flex flex-col max-lg:flex-row text-sl max-lg:text-lg gap-4 justify-between">
              <li
                className={
                  "hover:text-white " + (statsType === "daily" && " text-white")
                }
              >
                <button
                  onClick={() => {
                    setStatsType("daily");
                  }}
                >
                  Daily
                </button>
              </li>
              <li
                className={
                  "hover:text-white " +
                  (statsType === "weekly" && " text-white")
                }
              >
                <button
                  onClick={() => {
                    setStatsType("weekly");
                  }}
                >
                  Weekly
                </button>
              </li>
              <li
                className={
                  "hover:text-white " +
                  (statsType === "monthly" && " text-white")
                }
              >
                <button
                  onClick={() => {
                    setStatsType("monthly");
                  }}
                >
                  Monthly
                </button>
              </li>
            </ul>
          </nav>
        </section>
        {data.map((item) => (
          <div
            className={
              "rounded-2xl relative overflow-hidden z-0 cursor-pointer  " +
              (item.title == "Work"
                ? "bg-Light-red-(work)"
                : item.title == "Play"
                ? "bg-Soft-blue-(play)"
                : item.title == "Study"
                ? "bg-Light-red-(study)"
                : item.title == "Exercise"
                ? "bg-Lime-green-(exercise)"
                : item.title == "Social"
                ? "bg-Violet-(social)"
                : "bg-Soft-orange-(self-care)")
            }
            key={item.id}
          >
            <img
              className="absolute right-2 -top-3 z-10 "
              src={`icon-${item.title.toLowerCase().replace(/\s/g, "-")}.svg`}
              alt="icon"
            />
            <div className="relative h-full bg-Dark-blue rounded-2xl p-6 flex flex-col max-lg:gap-2 gap-3 mt-11 max-lg:mt-10 z-20 stats-container">
              <div className="flex justify-between items-center">
                <h2 className="text-base max-lg:text-lg font-[500]">
                  {item.title}
                </h2>
                <button className="ellipsis py-2">
                  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
                  </svg>
                </button>
              </div>
              <div className="flex gap-0 max-lg:gap-2 flex-col max-lg:flex-row max-lg:justify-between max-lg:items-center">
                <p className="text-[3.5rem] max-lg:text-3xl text-white">
                  {item.timeframes[statsType].current}hrs
                </p>
                <p className="text-base max-lg:text-sm">
                  Last{" "}
                  {statsType === "daily"
                    ? "day"
                    : statsType === "weekly"
                    ? "weak"
                    : "month"}{" "}
                  - {item.timeframes[statsType].previous}hrs
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
