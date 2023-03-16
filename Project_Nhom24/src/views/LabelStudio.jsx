// components/LabelStudio.js
import { useRef, useEffect } from "react";
import LabelStudio from "@heartexlabs/label-studio";
import "@heartexlabs/label-studio/build/static/css/main.css";
export const LabelStudioReact = (props) => {
  const labelStudioContainerRef = useRef();
  const labelStudioRef = useRef();

  useEffect(() => {
    if (labelStudioContainerRef.current) {
      labelStudioRef.current = new LabelStudio(
        labelStudioContainerRef.current,
        props
      );
    }
  }, []);

  return (
    <div
      id="label-studio"
      ref={function (el) {
        labelStudioContainerRef.current = el;
      }}
    />
  );
};
