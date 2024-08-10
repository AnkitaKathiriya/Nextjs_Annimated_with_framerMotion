"use client";
import React from "react";
import { motion } from "framer-motion";
import Brain from "@/components/Brain";
import Image from "next/image";
export default function About() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="lg:flex bg-gradient-to-b from-blu-100 to-red-100  pb-40 md:pb-28 pt-10">
        {/* Text container */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:lg-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-3/3 lg:w-1/2 lg:pr-0">
          {/* Biography container*/}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl ">Biography</h1>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <span className="italic">The standard Lorem Ipsum passage, used since the 1500s</span>
            <div className="self-end">
            <svg
              width="100"
              height="70"
              viewBox="0 0 219 193"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 151C18.5032 163.076 23.885 183.084 34 191C36.3859 192.867 45.9583 180.955 47.5 178.944C51.7958 173.341 52.2485 167.834 52 161C51.4817 146.745 44.7001 131.494 39.6667 118.444C38.3008 114.903 37.5883 111.098 36.3889 107.5C34.6187 102.19 31.0166 97.8257 29.0556 92.5555C25.118 81.9733 20.1709 71.9281 16 61.4444C14.0474 56.5365 12.1233 51.4553 9.55557 46.8333C7.84343 43.7515 5.59528 41.516 5.00001 37.9444C4.57686 35.4055 3.95755 33.1942 2.22224 31.2222C1.94303 30.9049 7.98349 36.4279 9.22224 37.6667C26.6992 55.1436 42.6038 74.7179 59 93.2222C64.009 98.8752 69.0163 104.691 74.4445 109.944C76.7152 112.142 78.1871 114.641 80.2222 117C82.7036 119.876 86.272 121.373 89 124C93.3921 128.229 97.6328 132.633 101.944 136.944C103.118 138.118 109.453 143.336 104 141.778C97.7334 139.987 91.4011 130.322 87.7778 125.444C83.8964 120.22 77.158 114.78 71.4445 112C68.4397 110.538 52.3871 101.081 50 104.222C45.9193 109.592 39.9749 119.266 46 126C52.9677 133.787 61.4832 123.321 66.7778 118.222C69.2199 115.871 70.9339 110.585 74 109.222C79.2704 106.88 90.3357 114.731 95 117C99.2692 119.077 103.546 120.526 107.611 123C110.004 124.456 113.828 126.92 116.389 127.944C118.229 128.681 112.185 126.733 111.222 125C109.999 122.799 108.031 120.822 106.5 118.611C103.788 114.693 99 111.038 99 106C99 98.5899 105.487 96.6907 112 98.5C117.077 99.9102 121.099 102.399 125 106C128.529 109.257 133.161 110.463 136.944 113.111C139.032 114.572 145.185 119.089 143 117.778C139.673 115.782 137.855 111.982 135.556 109.056C130.507 102.631 125.5 95.6056 119.556 89.9444C105.152 76.2272 93.0963 58.5301 83 41.2222C79.0038 34.3716 74.9904 27.002 73.2222 19.2222C72.5295 16.1741 68.0644 -2.76605 74 2.99999C81.9676 10.7399 86.1317 21.512 92 30.7778C96.343 37.6352 100.101 44.8215 104.778 51.5555C108.824 57.3821 112.366 66.0246 114.778 72.7778C115.688 75.3253 117.515 78.01 118 80.5555C118.419 82.7541 119.424 84.9907 119.556 87.2222C119.657 88.9441 118.506 83.9237 118.222 82.2222C117.332 76.883 123.151 69.6933 128.444 73.2222C135.891 78.1863 137 78.3631 137 87.8889C137 91.2843 133.186 98 129.5 98C124.164 98 140.52 96.5845 145.5 98.5C150.781 100.531 162.516 101.304 163.944 93.4444C164.802 88.7295 161.607 87.5178 160.222 83.7778C159.067 80.6586 159.169 78.1691 156.556 75.5555C154.026 73.0262 151.281 70.0869 149.556 67C148.381 64.8988 144.859 58.0128 142.944 57.0555C141.796 56.4813 137.565 53.06 141 54.7778C143.896 56.2256 143.98 57.9679 145.556 60.4444C148.053 64.369 149.553 70.3498 153.611 73.0555C158.68 76.4346 163.345 80.3104 168.444 83.5555C175.014 87.7362 180.181 81.366 182 75C184.516 66.1939 177.416 59.9246 173.556 52.5555C172.236 50.0361 170.22 47.541 168 45.7778C165.91 44.118 164.76 42.3358 163.444 40.0555C161.838 37.2713 158.696 36.275 157.111 33.4444C153.942 27.7859 150.117 23.3684 146 18.2222C145.483 17.5761 139.772 10.1742 140.222 9.6111C142.982 6.16129 146.015 21.8214 146.222 22.5555C147.243 26.1731 150.317 32.2351 152.5 35.3889C156.557 41.2487 158.838 47.8383 163.944 52.9444C167.866 56.8663 171.538 60.0067 176.111 63.0555C181.259 66.4877 195.663 74.6306 200.778 68C205.609 61.7372 204.217 55.2167 199 50C196.497 47.4967 188.087 41.6655 184.778 43.6667C181.262 45.7923 170.86 57.928 181.222 59C186.662 59.5627 195.318 68.1142 201 63C204.122 60.1906 213.725 48.6388 207.222 45.7778C205.144 44.8635 201.163 40.5856 200.056 38.5555C199.059 36.7282 198.619 35.7511 201 38C204.458 41.2662 209.947 45.1321 212.222 49C213.298 50.8291 215.881 50.7939 217.389 52C217.849 52.3679 210.175 57.5125 209.556 57.9444C205.879 60.5097 202.041 62.6903 198.5 65.4444C196.223 67.2158 193.629 67.7668 191.222 69.2222C189.242 70.4197 188.248 72.5345 186.222 73.7778C181.256 76.825 176.34 79.8113 171.444 82.9444C160 90.2691 148.623 97.5712 137.444 105.556C126.045 113.698 116.493 122.507 106.556 132.444C102.123 136.877 97.4129 140.921 92.8889 145.222C90.4763 147.516 87.5073 148.703 84.8889 150.667C81.5629 153.161 78.9541 156.37 75.3889 158.556C70.7776 161.382 65.1753 164.684 61.6667 168.778C59.4941 171.312 67.7106 165.94 70.7222 164.5C79.5289 160.288 89.2178 157.865 98.3889 154.556C115.818 148.267 134.554 142.509 150.833 133.556C154.251 131.676 157.859 129.811 161.222 127.778C168.018 123.669 161.701 128.218 158.944 130.056C154.055 133.315 148.633 138.154 145 142.778C143.13 145.158 139.288 146.424 138 149"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
            </div>
          </div>
          {/* Skills container*/}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl ">Skills</h1>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">JavaScript</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">HTML</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">Css</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">SCSS</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">TailwindCss</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">React</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">Laravel</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">Grunt</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">NextJs</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">MongoDB</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">Webpack</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">ExpressJs</div>
              <div className="rounded text-sm p-2 bg-black hover:bg-white hover:text-black text-white cursor-pointer">Framer Motion</div>
            </div>
            </div>
          {/* Experiance container*/}
          <div className="flex flex-col gap-12 justify-cente">
            <h1 className="font-bold text-2xl ">Experiance</h1>
            <div className="">
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Next js Devloper</div>
                  <div className="p-3 text-sm italic">Now Deloping in Next js Projects and skill developed in this way more.</div>
                  <div className="p-3 text-red-400 text-s font-semibold">2024 presents</div>
                  <div className="px-3 py-1 rounded bg-white text-sm font-semibold">Proffestional</div>
                </div>
                {/* Center */}
                <div className="w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 ">
                </div>
                {/* Center */}
                <div className="w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Reactjs devloper</div>
                  <div className="p-3 text-sm italic">Now Deloping in Next js Projects and skill developed in this way more.</div>
                  <div className="p-3 text-red-400 text-s font-semibold">2022-2023</div>
                  <div className="px-3 py-1 rounded bg-white text-sm font-semibold">Proffestional</div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 ">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">javascript Devloper</div>
                  <div className="p-3 text-sm italic">Now Deloping in Next js Projects and skill developed in this way more.</div>
                  <div className="p-3 text-red-400 text-s font-semibold">2020-2022</div>
                  <div className="px-3 py-1 rounded bg-white text-sm font-semibold">Proffestional</div>
                </div>
                {/* Center */}
                <div className="w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                </div>
              </div>
            </div>
            </div>
        </div>
        {/* Svg container */}
        <div className="hidden lg:block sticky top-0 w-2/3 lg:w-1/2">
        <Image src="/human-brain.jpg" alt="" width={500} height={500}/>
        </div>
      </div>
    </motion.div>
  );
}
