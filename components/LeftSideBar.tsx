import { motion } from "framer-motion";

export default function LeftsideBar() {
    return (
        <div className="top-0 left-0   h-screen w-[1rem] bg-white shadow-md p-[25] flex flex-col">
            <div className="flex justify-between flex-col items-start text-black overflow-visible rotate-90 ">
                <motion.div className="overflow-hidden w-64 cursor-pointer font-pixelify text-2xl">
                    <motion.span
                    >
                       </motion.span>
                    
                </motion.div>
            </div>
        </div>

    )
}