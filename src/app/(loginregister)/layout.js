import Image from "next/image"

export default function RootLayout({ children }) {
    return (
        <div className="flex flex-col md:flex-row w-screen h-screen overflow-y-auto">
        <div className='flex w-full md:w-[55%] flex-shrink-0 h-full bg-green-200 flex-col justify-center items-center rounded-r-5xl'>
        <h1 className="font-poppins font-semibold md:font-bold text-6xl ">QRide</h1>
          <Image src="/images/qrphone.svg" width={300} height={400} alt="qr" />
        </div>
  
        <div className='flex flex-col flex-shrink-0 w-full md:w-[45%] h-full'>
          {children}
        </div>
      </div>
    )
  }
  