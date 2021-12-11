
const downloadFile=()=>{
    let down = navigator.serviceWorker.ready.then(async (swReg) => {
        const bgFetch = await swReg.backgroundFetch.fetch('my-fetch', ['https://source.unsplash.com/user/erondu/1920x1080'], {
          title: 'image',
          icons: [{
            sizes: '300x300',
            src: 'https://source.unsplash.com/user/erondu/1920x1080',
            type: 'image/jpg',
          }],
          downloadTotal: 60 * 1024 * 1024,
        });
      });
}






// const createElement = (link) => {
//   let filename = link.split("//").pop().split("/").pop();
//   let element = document.createElement("a");
//   element.setAttribute(
//     "href", window.URL.createObjectURL(new Blob([link])));
//   element.setAttribute("download", filename);
//   element.style.display = "none";
//   document.body.appendChild(element);
//   element.click();
//   document.body.removeChild(element);
// };



  // const downloadFile = () => {
  //   setLoader(true);
  //   fetch("http://09d7e73386bf.ngrok.io/downloadFile")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setLoader(false);
  //       let link = res.filePath
  //       const blob = new Blob([link])
  //       let url = window.URL.createObjectURL(blob);
  //       let a = document.createElement('a');
  //       a.href = url;
  //       a.download = 'song mp3';
  //       document.body.appendChild(a);
  //       a.click();
  //       a.parentNode.removeChild(a)
  //       // if (res.status === 200) {
  //       //   createElement(res.filePath);
  //       // }
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




  //     const downloadFile = () => {
//     const method = "GET";
//     const url = "  //     const downloadFile = () => {
//     const method = "GET";
//     const url = "https://source.unsplash.com/user/erondu/1920x1080";

//     axios
//       .request({
//         url,
//         method,
//         responseType: "blob", //important
//       })
//       .then(({ data }) => {
//         const downloadUrl = window.URL.createObjectURL(new Blob([data]));
//         const link = document.createElement("a");
//         link.href = downloadUrl;
//         link.setAttribute("download", "file.jpg"); //any other extension
//         document.body.appendChild(link);
//         link.click();
//         link.remove();
//       });

// };";

//     axios
//       .request({
//         url,
//         method,
//         responseType: "blob", //important
//       })
//       .then(({ data }) => {
//         const downloadUrl = window.URL.createObjectURL(new Blob([data]));
//         const link = document.createElement("a");
//         link.href = downloadUrl;
//         link.setAttribute("download", "file.jpg"); //any other extension
//         document.body.appendChild(link);
//         link.click();
//         link.remove();
//       });

// };



  
  // const downloadFile = () => {
  //   setLoader(true);
  //   fetch(" http://6513f9a50f17.ngrok.io /downloadFile")
  //     .then((res) => res.json())
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




  

// const createElement = (link) => {
//     let filename = link.split("//").pop().split("/").pop();// To get only the file name, I'll use the split() and pop() functions.
//     let element = document.createElement("a");
//     element.setAttribute("href", window.URL.createObjectURL(new Blob([link])));
//     console.log(element.href);
//     element.setAttribute("download", filename);
//     element.style.display = "none";
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };