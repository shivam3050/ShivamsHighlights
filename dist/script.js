
document.getElementById("download-resume").addEventListener("click", () => {

        const resumeUrl = "https://raw.githubusercontent.com/shivam3050/MyResume/main/SHIVAM_CV_NITP_2027.pdf";
        const a = document.createElement("a");
        a.href = resumeUrl;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
})


const tabs_panel = document.getElementById("tabs-panel")
const tabsBtn = tabs_panel.children

const tabs_div = document.getElementById("container");
const tabs = tabs_div.children

for (let i = 0; i < tabsBtn.length; i++) {






        tabsBtn[i].onclick = (e) => {

                const activeTabId = tabsBtn[i].dataset.type

                const activetab = document.getElementById(activeTabId)

                for (let j = 0; j < tabs.length; j++) {


                        tabs[j].classList.remove("active")


                }
                for (let j = 0; j < tabsBtn.length; j++) {
                        tabsBtn[j].classList.remove("highlight")
                }
                activetab.classList.add("active")
                tabsBtn[i].classList.add("highlight")



        }

}




const socialsAccounsPanel = document.getElementById("social-accounts")
const socialUrls = {
        linkedin: "https://www.linkedin.com/in/shivam-kumar-4b938224a",
        github: "https://www.github.com/shivam3050/",
        instagram: "https://www.instagram.com/shivam30508",
}

for(let i=0;i<socialsAccounsPanel.children.length;i++){
        socialsAccounsPanel.children[i].onclick = () => {
                // window.location = socialUrls[socialsAccounsPanel.children[i].dataset.type]
                window.open(socialUrls[socialsAccounsPanel.children[i].dataset.type], '_blank');
        }
}






