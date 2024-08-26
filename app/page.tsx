import FirstSection from "@/components/firstSection";
import Header from "@/components/header";
import SecondSection from "@/components/secondSection";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <FirstSection />
      <SecondSection />
    </Fragment>
  );
}
