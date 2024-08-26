"use client";
import { Button } from "@/components/ui/button";
import Magnet from "./bits/magnet";
import { BlurText } from "./bits/blurText";

const Header = () => {
  return (
    <div className="flex items-start border-black border-b px-[20px]">
      <p className="font-major p-10 text-3xl border-r border-black">Menu</p>
      <div className="flex items-center justify-between w-full">
        <BlurText text="nexgen creAtive studios" className="font-major p-10 text-3xl font-bold" delay={50} />

        <Magnet padding={0} disabled={false}>
          <Button className="font-major text-white rounded-[900px] p-6 hover:bg-white hover:border-black hover:border hover:text-black hover:font-bold">
            entrar em contato
          </Button>
        </Magnet>
      </div>
    </div>
  );
};

export default Header;
