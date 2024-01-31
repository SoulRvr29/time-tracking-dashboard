import data from "./data.json";

console.log(data);
function App() {
  return (
    <>
      <main className="w-screen px-6 max-md:flex-col max-md:flex grid grid-cols-4 grid-rows-2 gap-6 max-w-[1110px] max-md:py-12 max-md:max-w-xl">
        <section className="bg-Dark-blue rounded-2xl row-span-2 ">
          <header className="flex flex-wrap flex-col max-md:flex-row max-md:justify-center bg-Blue p-8 gap-4  rounded-2xl mb">
            <img
              className="w-16 h-16 border-[3px] rounded-full"
              src="public\image-jeremy.png"
              alt="Jeremy image"
            />
            <div>
              <p className="text-Pale-Blue text-sm">Report for</p>
              <h1 className="max-md:whitespace-nowrap text-3xl max-md:text-xl">
                Jeremy Robson
              </h1>
            </div>
          </header>
          <nav className="px-8 py-6">
            <ul className="flex flex-col max-md:flex-row text-sm gap-4 justify-between">
              <li className="hover:text-white">
                <button>Daily</button>
              </li>
              <li className="hover:text-white">
                <button>Weekly</button>
              </li>
              <li className="hover:text-white">
                <button>Monthly</button>
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
          >
            {/* <svg
              className="absolute right-4 -top-3 z-10"
              width="79"
              height="79"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z"
                fill="#D96C47"
                fill-rule="nonzero"
                border-l-2
              />
            </svg> */}
            <img
              className="absolute right-2 -top-3 z-10 scale-75"
              src={`public/icon-${item.title
                .toLowerCase()
                .replace(/\s/g, "-")}.svg`}
              alt="icon"
            />
            <div
              className="relative h-full bg-Dark-blue rounded-2xl p-6 flex flex-col gap-4 mt-9 z-20 hover:bg-[--Desaturated-blue]"
              key={item.title}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-base font-[500]">{item.title}</h2>
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fill="#BBC0FF"
                    fillRule="evenodd"
                    className=""
                  />
                </svg>
              </div>
              <div className="flex gap-2 flex-col max-md:flex-row max-md:justify-between max-md:items-center">
                <p className="text-4xl max-md:text-3xl text-white">
                  {item.timeframes.weekly.current}hrs
                </p>
                <p className="text-xs">
                  Last Week - {item.timeframes.weekly.previous}hrs
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
