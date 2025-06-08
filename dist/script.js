
        document.getElementById("download-resume").addEventListener("click",()=>{
                console.log("clicked")
                const resumeUrl = "https://raw.githubusercontent.com/shivam3050/MyResume/main/SHIVAM_CV_NITP_2027.pdf";
                const a = document.createElement("a");
                a.href = resumeUrl;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
        })

    

