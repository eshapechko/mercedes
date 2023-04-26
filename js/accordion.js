const lists = document.querySelectorAll(".feature-sub");
const btns = document.querySelectorAll(".feature__link");

const openTab = (tab, idx) => {
    tab.classList.add("feature__link_active");
    lists[idx].classList.remove("hidden");
};

const closeTab = (tab, idx) => {
    tab.classList.remove("feature__link_active");
    lists[idx].classList.add("hidden");
};

btns.forEach((btnItem, index) =>
    btnItem.addEventListener("click", () => {
        if (btnItem.classList.contains("feature__link_active")) {
            closeTab(btnItem, index);
        } else {
            openTab(btnItem, index);
        }

        btns.forEach((btnItem, idx) => {
            if (index !== idx) {
                btnItem.classList.remove("feature__link_active");
            }
        });

        lists.forEach((listItem, idx) => {
            if (index !== idx) {
                listItem.classList.add("hidden");
            }
        });
    })
);

// const featureLinks = document.querySelectorAll(".feature__link");

// featureLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//         let featureSub = link.nextElementSibling;

//         if (link.classList.contains("feature__link_active")) {
//             featureLinks.forEach((l) => {
//                 l.classList.remove("feature__link_active");
//                 l.nextElementSibling.classList.add("hidden");
//             });
//         } else {
//             featureLinks.forEach((l) => {
//                 l.classList.remove("feature__link_active");
//                 l.nextElementSibling.classList.add("hidden");
//             });
//             link.classList.add("feature__link_active");
//             featureSub.classList.remove("hidden");
//         }
//     });
// });
