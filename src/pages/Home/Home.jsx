import "./home.css";
//import Sidebar from "../../components/sidebar/Sidebar";
//import DogsContainer from "../../components/DogsContainer/DogsContainer";
//import { motion } from "framer-motion";
//import Downshift from "downshift";
//import { DoggosBreedListApi } from "../../services/api/Apis";
import { useEffect, useState, useContext, useRef } from "react";
import { DoggosContext } from "../../context/context";
//import DoggosPagination from "../../components/pagination/Pagination";
import Navbar from "../../components/Navbar";
//import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
//import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
//import PopoverSetting from "../../components/popover/PopoverSetting";
//import SyncIcon from "@mui/icons-material/Sync";
//import { getLoggedInUser } from "../../services/utilityFunctions";
const Home = () => {
  const { dispatch } = useContext(DoggosContext);

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home_container">
          <div className="home_header"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
