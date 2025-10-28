"use client";
import Image from "next/image";
import Footer from "@/components/FootSection"
import Header from "@/components/HeadSection"
import LeftsideBar from "@/components/LeftSideBar"
import { motion } from "framer-motion";
export default function Home() {
  return (

    <div className="flex flex-col">
      <div className="top-0 left-0   h-screen w-[1rem] bg-white shadow-md p-[25] flex flex-col">
      </div>

      <Header />


      <section>

        <div className="w-full flex items-center justify-center p-50 ">

          <div className="flex sm:h-[60vh] sm:w-[500wh] w-500 h-100 justify-center border-2 border-white-600  rounded
             bg-linear-to-tr from-blue-600 to-fuchsia-500
          ">
            <motion.div>


            </motion.div>

          </div>
          <div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
