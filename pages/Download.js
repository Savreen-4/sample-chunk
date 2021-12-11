import React, { useState } from "react";
import { FadeLoader } from "react-spinners";
import { Button } from "@material-ui/core";
import swal from "sweetalert";

function DownloadFile() {
const [loader, setLoader] = useState(false);

const createElement = (link, type) => {
  let element = document.createElement('a');
  element.setAttribute('href', link);
  element.setAttribute('download', type);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
const downloadFile = () => {
  setLoader(true);
  const filePath = 'http://f26166ca1865.ngrok.io/api/Containers/images/download/audio.mp3';
  fetch(filePath)
  .then(res => res.blob())
  .then(res => {
      setLoader(false);
      let url = window.URL.createObjectURL(res);
      let type = res.type;
      createElement(url, type);
  })
  .catch(err => {
      setLoader(false);
      swal('Something went wrong', {
          icon: 'warning',
          closeOnClickOutside: false,
          closeOnEsc: false
      });
      console.log(err);
  })
}

// const createElement = (link) => {
//   let filename = link.split("//").pop().split("/").pop();
//   let element = document.createElement("a");
//   element.setAttribute("href", link);
//   console.log(element.href);
//   element.setAttribute("download", filename);
//   element.style.display = "none";
//   document.body.appendChild(element);
//   element.click();
//   document.body.removeChild(element);
// };
// // http://f26166ca1865.ngrok.io/downloadFile
// const downloadFile = () => {
// const filePath = 'http://f26166ca1865.ngrok.io/api/Containers/images/download/audio.mp3';
//   setLoader(true);
//   fetch(filePath)
//     .then((res) => res.blob())
//     .then((res) => {
//       console.log(res);
//       setLoader(false);
//       // if (res.status === 200) {
//       //   createElement(res.filePath);
//       // }
//       let url = window.URL.createObjectURL(res)
//       createElement(url);
//     })

//     .catch((err) => {
//       setLoader(false);
//       swal("Something went wrong", {
//         icon: "warning",
//         closeOnClickOutside: false,
//         closeOnEsc: false,
//       });
//       console.log(err);
//     });
// };

  return (
    <div
    className="container"
    >
  
      {loader ? (
        <div className={`Loader Upload`}>
          <FadeLoader
            style={{ height: "15", width: "5", radius: "2" }}
            color={"#6FABF0"}
          />
        </div>
      ) : null}
    
        <div  className = "downloadButton">
        <Button  onClick={() => downloadFile()} >Download File</Button>
        </div>
     
    </div>
  );
}

export default DownloadFile;

