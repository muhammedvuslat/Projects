// src/utils/toastService.js

import { toast } from "react-toastify";

const Toastify = (type, msg) => {
  const config = {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  switch (type) {
    case "success":
      toast.success(msg, config);
      break;
    case "error":
      toast.error(msg, config);
      break;
    case "info":
      toast.info(msg, config);
      break;
    case "warn":
    case "warning":
      toast.warn(msg, config);
      break;
    default:
      toast(msg, config); // default plain toast
      break;
  }
};

export default Toastify;
