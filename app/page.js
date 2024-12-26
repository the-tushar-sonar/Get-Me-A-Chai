import Image from "next/image";

export default function Home() {
  return (
    <>
  <div className="flex flex-col gap-4 justify-center items-center text-white h-[40vh] ">
    <div className="flex gap-2 font-bold text-5xl justify-center items-center">Buy Me a Chai <span><img src="/tea.gif" width={88}/></span></div>
    <p>A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</p>
    <div>
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
    </div>
  </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white container mx-auto py-32 pt-14">
      <h2 className="text-3xl font-bold text-center mb-14 ">Your Fans can buy you a Chai</h2>

      <div className="flex gap-5 justify-around">

        <div  className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt=""/>
          <p className="font-bold ">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>

        <div  className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt=""/>
          <p className="font-bold ">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
        
        <div  className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt=""/>
          <p className="font-bold ">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
      </div>

    </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white container mx-auto py-32 pt-14 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center mb-14 ">Learn more about us</h2>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=MVyjTRrZHVvwdVU-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
    
  </>
  );
}
