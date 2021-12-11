import React, { useState } from "react";
import { FadeLoader } from "react-spinners";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { Button } from "@material-ui/core";
import swal from "sweetalert";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function DownloadFile() {
const [loader, setLoader] = useState(false);

const createElement = (link) => {
  let filename = link.split("//").pop().split("/").pop();
  let element = document.createElement("a");
  element.setAttribute("href", link);
  console.log(element.href);
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const downloadFile = () => {
const filePath = 'http://33519e10be6c.ngrok.io/api/Containers/images/download/audio.mp3';
  setLoader(true);
  fetch(filePath)
    .then((res) => res.blob())
    .then((res) => {
      console.log(res);
      setLoader(false);
      // if (res.status === 200) {
      //   createElement(res.filePath);
      // }
      let url = window.URL.createObjectURL(res)
      createElement(url);
    })

    .catch((err) => {
      setLoader(false);
      swal("Something went wrong", {
        icon: "warning",
        closeOnClickOutside: false,
        closeOnEsc: false,
      });
      console.log(err);
    });
};


// //prshant
// const createElement = (link, type) => {
//   let element = document.createElement('a');
//   element.setAttribute('href', link);
//   element.setAttribute('download', type);
//   element.style.display = 'none';
//   document.body.appendChild(element);
//   element.click();
//   document.body.removeChild(element);
// }
// const downloadFile = () => {
//   setLoader(true);
//   const filePath = 'http://33519e10be6c.ngrok.io/api/Containers/images/download/audio.mp3';
//   fetch(filePath)
//   .then(res => res.blob())
//   .then(res => {
//       setLoader(false);
//       let url = window.URL.createObjectURL(res);
//       let type = res.type;
//       createElement(url, type);
//   })
//   .catch(err => {
//       setLoader(false);
//       swal('Something went wrong', {
//           icon: 'warning',
//           closeOnClickOutside: false,
//           closeOnEsc: false
//       });
//       console.log(err);
//   })
// }

// const createElement = (link) => {
//   let filename = link.split("//").pop().split("/").pop();
//   let element = document.createElement("a");
//   element.setAttribute("href", window.URL.createObjectURL(new Blob([link])));
//   console.log(element.href);
//   element.setAttribute("download", filename);
//   element.style.display = "none";
//   document.body.appendChild(element);
//   element.click();
//   document.body.removeChild(element);
// };
// http://6195e28776f2.ngrok.io/downloadFile
// const downloadFile = () => {
//   setLoader(true);
//   fetch("http://33519e10be6c.ngrok.io/api/Containers/images/download/audio.mp3")
//     .then((res) => res.blob())
//     .then((res) => {
//       console.log(res);
//       setLoader(false);
//       if (res.status === 200) {
//         createElement(res.filePath);
//       }
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

  // const downloadFile = () => {
  //   setLoader(true);
  //   fetch(" http://6513f9a50f17.ngrok.io/downloadFile")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setLoader(false);
  //       let link = res.filePath;
  //       const blob = new Blob([link]);
  //       let url = window.URL.createObjectURL(blob);
  //       let a = document.createElement("a");
  //       a.href = url;
  //       a.download = "audio.mp3";
  //       document.body.appendChild(a);
  //       a.click();
  //       a.parentNode.removeChild(a);
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
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "200px",
      // }}
    >
      <CloudUploadIcon />
      {loader ? (
        <div className={`Loader Upload`}>
          <FadeLoader
            style={{ height: "15", width: "5", radius: "2" }}
            color={"#6FABF0"}
          />
        </div>
      ) : null}
      {/* <div>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          startIcon={<CloudDownloadIcon />}
          onClick={() => downloadFile()}
        >
          Download
        </Button>
        </div> */}
        <div  className = "dropzone">
        <Button >Download File</Button>
        </div>
     
    </div>
  );
}

export default DownloadFile;


// const fileUrl = 'https://www.youtube.com/watch?v=QFaFIcGhPoM';
//   const createElement = (link) => {
//     let filename = link.split("//").pop().split("/").pop();  // To get only the file name, I'll use the split() and pop() functions.
//     let element = document.createElement("a");
//     element.setAttribute(
//       "href",
//       "data:charset=utf-8," + encodeURIComponent(link)
// //charset=UTF-8 stands for Character Set = Unicode Transformation Format-8. It is an octet (8-bit) lossless encoding of Unicode characters.
//     );
//     element.setAttribute("download", filename);
//     element.style.display = "none";
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };


//   const downloadFile = () => { 
//     setLoader(true);
//     fetch("http://09d7e73386bf.ngrok.io/downloadFile")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setLoader(false);
//         if (res.status === 200) {
//           createElement(res.filePath);
//         }
//       })
//       .catch((err) => {
//         setLoader(false);
//         swal("Something went wrong", {
//           icon: "warning",
//           closeOnClickOutside: false,
//           closeOnEsc: false,
//         });
//         console.log(err);
//       });
//   };




// import React, { useState } from 'react'
// import { FadeLoader } from "react-spinners"
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
// import { Button } from '@material-ui/core'
// // import swal from 'sweetalert'

// function DownloadFile () {
//     const [loader, setLoader] = useState(false);
//     const [bgFetch,setBgFetch] = useState("")
//     // const registration = await navigator.serviceWorker.ready;
//     // const bgFetchReg = await registration.backgroundFetch.fetch(id, requests, options);
//     // const createElement = (link) => {
//     //     let element = document.createElement('a');
//     //     element.setAttribute('href', link);
//     //     element.style.display = 'none';
//     //     document.body.appendChild(element);
//     //     element.click();
//     //     document.body.removeChild(element);
//     // }


//     const downloadFile = async() => {
//         if ('BackgroundFetchManager' in self) {
//             // This browser supports Background Fetch!
//             // bgFetchButton.addEventListener('click', async event => {
//             //     try {
//             //       event.target.disabled = true;
//             //       const registration = await navigator.serviceWorker.ready;
          
//             //       registration.backgroundFetch.fetch('my-fetch', [
//             //         'http://626ec992ba23.ngrok.io/downloadFile',
//             //         // 'https://www.bing.com/th?id=OIP.ugi6ka2-mACRREYtCh7KUAHaEK&w=308&h=160&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2'
//             //       ]);
//             //     } catch (err) {
//             //       alert(
//             //         'Please enable downloads for this website (click the icon on the right side of the address bar)'
//             //       );
//             //       console.error(err);
//             //     }
//             //   });
//             navigator.serviceWorker.ready.then(async (swReg) => {
//                await swReg.backgroundFetch.fetch('my-fetch', ['http://626ec992ba23.ngrok.io/downloadFile'], {
//                   title: 'Episode 5: Interesting things.',
//                 //   icons: [{
//                 //     sizes: '300x300',
//                 //     src: 'https://www.youtube.com/watch?v=dGcsHMXbSOA',
//                 //     type: 'all',
//                 //   }],
//                   downloadTotal: 60 * 1024 * 1024,
//                 });
//               });
//             //   setBgFetch(swareg);
//               console.log(bgFetch);
//           }
       
//         // setLoader(true);
//         // fetch('http://99deaedad36e.ngrok.io/tableauData/downloadFile')
//         // .then(res => res.json())
//         // .then(res => {
//         //     console.log(res);
//         //     setLoader(false);
//         //     if(res.status === 200) {
//         //         createElement(res.filePath);
//         //     }
//         // })
//         // .catch(err => {
//         //     setLoader(false);
//         //     swal('Something went wrong', {
//         //         icon: 'warning',
//         //         closeOnClickOutside: false,
//         //         closeOnEsc: false
//         //     });
//         //     console.log(err);
//         // })
//     }

//     return (
//         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
//             {loader ? (
//                 <div className={`Loader Upload`}>
//                     <FadeLoader 
//                         style={{ height: "15", width: "5", radius: "2" }}
//                         color={"#6FABF0"}
//                     />
//                 </div>
//             ) : null}
//             <div>
//                 <Button
//                     variant="contained"
//                     size="large"
//                     color="secondary" 
//                     startIcon={<CloudDownloadIcon />}
//                     onClick={() => downloadFile()}
//                 >
//                     Download
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default DownloadFile




// import React, { useState } from 'react'
// import { FadeLoader } from "react-spinners"
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
// import { Button } from '@material-ui/core'
// import swal from 'sweetalert'

// function DownloadFile() {
//     const [loader, setLoader] = useState(false);

//     const createElement = (link) => {
//         let filename = link.split("//").pop().split("/").pop();
//         let element = document.createElement("a");
//         element.setAttribute(
//             "href",
//             "data:charset=utf-8",
//             + encodeURIComponent(link)
//         );
//         element.setAttribute('download', filename);
//         element.style.display = 'none';
//         document.body.appendChild(element);
//         element.click();
//         document.body.removeChild(element);
//     };

//     const downloadFile = () => {
//         setLoader(true);
//         fetch('http://626ec992ba23.ngrok.io/downloadFile')
//         // download api http://99deaedad36e.ngrok.io/tableauData/downloadFile
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);
//             setLoader(false);
//             if(res.status === 200) {
//                 createElement(res.filePath);
//             }
//         })
//         .catch(err => {
//             setLoader(false);
//             swal('Something went wrong', {
//                 icon: 'warning',
//                 closeOnClickOutside: false,
//                 closeOnEsc: false
//             });
//             console.log(err);
//         });
//     };

//     return (
//         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
//             {loader ? (
//                 <div className={`Loader Upload`}>
//                     <FadeLoader 
//                         style={{ height: "15", width: "5", radius: "2" }}
//                         color={"#6FABF0"}
//                     />
//                 </div>
//             ) : null}
//             <div>
//                 <Button
//                     variant="contained"
//                     size="large"
//                     color="secondary"
//                     startIcon={<CloudDownloadIcon />}
//                     onClick={() => downloadFile()}
//                 >
//                     Download
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default DownloadFile




















// import React, { useState } from "react";
// import { FadeLoader } from "react-spinners";
// import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
// import { Button } from "@material-ui/core";
// import swal from "sweetalert";

// function DownloadFile() {
// const [loader, setLoader] = useState(false);
// const downFile = (filename) => {
//     setLoader(true);
//     fetch("http://09d7e73386bf.ngrok.io/downloadFile")
//       .then((res) => res.arrayBuffer())
//       .then((response) => {
//         let data  = new Uint8Array(response) ;
//         let file = new Blob([data], { type: "application/audio.mp3"});
//         let fileURL = URL.createObjectURL(file);
//         let link = document.createElement("a");
//         link.href = fileURL;
//         link.download = filename;
//         link.click();
//       })
//     //   .then((res)=>{
//     //       console.log(res);
//     //       setLoader(false);
//     //       if(res.status===200){
//     //           console.log(res.filePath);
//     //       }
//     //   })

//       .catch((err) => {
//         setLoader(false);
//         swal("Something went wrong", {
//           icon: "warning",
//           closeOnClickOutside: false,
//           closeOnEsc: false,
//         });
//         // console.log(err);
//       });
  
//   };

//   return (
//     <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "200px",
//     }}
//   >
//     {loader ? (
//       <div className={`Loader Upload`}>
//         <FadeLoader
//           style={{ height: "15", width: "5", radius: "2" }}
//           color={"#6FABF0"}
//         />
//       </div>
//     ) : null}
//     <div>
//       <Button
//         variant="contained"
//         size="large"
//         color="secondary"
//         startIcon={<CloudDownloadIcon />}
//         onClick={() => downFile()}
//       >
//         Download
//       </Button>
//     </div>
//   </div>
//   );
// }

// export default DownloadFile;