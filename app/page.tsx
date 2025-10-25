"use client";
import Image from "next/image";

import {motion} from "framer-motion";
export default function Home() {
  return (

    <div>
      <section>
        <header className="w-full flex justify-between bg-blue-700 w-full span" >
          <div className="items-start m-3 p-2">
            <h3>
              Title
            </h3>
          </div>
          <div className="flex items-stretch">

            <ul className="flex items-start justify-center m-3 p-2">
              <li className="">List 1</li>
              <li className="">List 2</li>
              <li className="">List 3</li>
            </ul>

          </div>
        </header>
      </section>
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
    </div>
  );
}
