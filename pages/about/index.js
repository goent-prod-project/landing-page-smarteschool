import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import SelectShared from "../components/Shared/SelectShared/SelectShared";
import SearchCariSekolah from "../components/SearchCariSekolah/SearchCariSekolah";
import { FaFilter } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";
import Slider from "../components/Slider/Slider";

export default function Home({ nav, search }) {
  const router = useRouter();
  const [sliderWidth, setsliderWidth] = useState(0);
  const [collapseOpen, setcollapseOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(`/`);

  useEffect(() => {
    setsliderWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setsliderWidth(window.innerWidth);
    });
  }, []);

  const slider = [
    {
      desktopBsanner: "/img/banner-desktop.png",
      mobileBanner: "/img/banner-mobile.png",
    },
    {
      desktopBsanner: "/img/banner-desktop.png",
      mobileBanner: "/img/banner-mobile.png",
    },
    {
      desktopBsanner: "/img/banner-desktop.png",
      mobileBanner: "/img/banner-mobile.png",
    },
    {
      desktopBsanner: "/img/banner-desktop.png",
      mobileBanner: "/img/banner-mobile.png",
    },
  ];

  return (
    <Layout isIndex>
      <AnimatePage>
        <section id="hero-section-about-smarteschool">
          <div className="container">
            <div className="col-md-12"></div>
          </div>
        </section>
      </AnimatePage>
    </Layout>
  );
}

export async function getServerSideProps({ query: { nav, search } }) {
  return {
    props: {
      nav: nav || null,
      search: search || null,
    },
  };
}
