import * as React from "react";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DispatchContext } from "../src/dispatch";
import { Spacer } from "./core";

export function SaveSelfScreen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const participant = JSON.parse(params.get("participant"));

  const [_, dispatch] = useContext(DispatchContext);
  const nav = useNavigate();

  useEffect(() => {
    // Save participant to local storage, then redirect to home screen.
    console.log("Save self", participant);
    dispatch({ type: "save-self", participant });
    nav("/");
  }, []);

  return (
    <div>
      <Spacer h={24} />
      <p>Saving...</p>
    </div>
  );
}