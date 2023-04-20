import React from "react";

import "./Welcome.css";
import { Login } from "../Login/Login";

export function Welcome() {
  const URL_BANNER =
    "https://firebasestorage.googleapis.com/v0/b/proyecto-scrum-momento-ll.appspot.com/o/banner.jpg?alt=media&token=53308081-a844-49d5-9a3b-fd0d5afd737d";
  const URL_BANNERR =
    "https://firebasestorage.googleapis.com/v0/b/proyecto-scrum-momento-ll.appspot.com/o/bannerRedesign.jpg?alt=media&token=cd908887-ac97-4c33-b888-8dab6e87117d";

  return (
    <>
      <img
        className="img-fluid w-100 banner "
        src={URL_BANNERR}
        alt="Banner Columbia"
      />

      <section>
        <div className="container">
          <Login />
        </div>
      </section>

      
     
    </>
  );
}
