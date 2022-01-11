import Image from "next/image";
import { Layout } from "../layouts";
import { MiniNavbar } from "./miniNavbar";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <Layout variant="home">
      <div className="relative mx-auto">
        <div className="absolute top-0 inset-x-0 bottom-0 h-1/2" />
        <div className="mx-auto">
          <div className="relative shadow-xl ">
            <div className="absolute top-0 inset-0 bg-black">
              <div className="md:w-full absolute z-20">
                <div className="max-w-5xl mx-auto px-4">
                  <MiniNavbar />
                  <Navbar />
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  alt="Mountains"
                  src={"/pexels-sora-shimazaki-5668481.jpg"}
                  layout="fill"
                  className="opacity-40 hidden md:block"
                  objectFit="cover"
                />
              </div>
              <div className="block md:hidden">
                <Image
                  alt="Mountains"
                  src={"/pexels-sora-shimazaki-mobil.jpg"}
                  layout="fill"
                  className="opacity-40 block md:hidden"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex pb-32 max-w-5xl mx-auto relative flex-col text-gray-200 text-left text-4xl justify-center h-screen px-8">
              <p className="text-base pb-4 text-gray-400">Faiz haramdır</p>
              <p>Haklının değil kanunun yanındayız</p>
              <p className="text-xl text-gray-400 py-2">
                Allah düşürmesin kimseyi bu yollara
              </p>
              <button className="text-lg bg-yellow-700 text-gray-100 bg-opacity-80 hover:bg-opacity-100 w-32 py-2">
                Bize yazın
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
