const daily = document.getElementById("daily-text");
const weekly = document.getElementById("weekly-text");
const monthly = document.getElementById("monthly-text");
const sectionGroups = document.querySelectorAll(".section_groups");
/*
SectionGroups[0],[3],[6],[9];[12],[15] --> Daily
SectionGroups[1],[4],[7],[10];[13],[16] --> Weekly
SectionGroups[2],[5],[8],[11];[14],[17] --> Weekly
*/

const dailyContent = [0, 3, 6, 9, 12, 15];
const weeklyContent = [1, 4, 7, 10, 13, 16];
const monthlyContent = [2, 5, 8, 11, 14, 17];

const showDaily = () => {
    for (sectionGroup in sectionGroups) {
        if (weeklyContent.includes(Number(sectionGroup)) || monthlyContent.includes(Number(sectionGroup))) {
            sectionGroups[sectionGroup].classList.add("weekly");
            weekly.classList.remove("view");

            sectionGroups[sectionGroup].classList.add("monthly");
            monthly.classList.remove("view");
        } else if (dailyContent.includes(Number(sectionGroup))) {
            sectionGroups[sectionGroup].classList.remove("daily");
            daily.classList.add("view")
        }
    }

}
const showWeekly = () => {
    for (sectionGroup in sectionGroups) {
        if (dailyContent.includes(Number(sectionGroup)) || monthlyContent.includes(Number(sectionGroup))) {
            sectionGroups[sectionGroup].classList.add("daily");
            daily.classList.remove("view");
            sectionGroups[sectionGroup].classList.add("monthly");
            monthly.classList.remove("view");
        } else if (weeklyContent.includes(Number(sectionGroup))) {
            sectionGroups[sectionGroup].classList.remove("weekly");
            weekly.classList.add("view");
        }
    }
}
const showMonthly = () => {
    for (sectionGroup in sectionGroups) {
        if (dailyContent.includes(Number(sectionGroup)) || weeklyContent.includes(Number(sectionGroup))) {
            sectionGroups[sectionGroup].classList.add("daily");
            daily.classList.remove("view");
            sectionGroups[sectionGroup].classList.add("weekly");
            weekly.classList.remove("view");
        } else if (monthlyContent.includes(Number(sectionGroup))) {
            sectionGroups[sectionGroup].classList.remove("monthly");
            monthly.classList.add("view");
        }
    }
}
daily.addEventListener("click", () => {
    showDaily();
})
weekly.addEventListener("click", () => {
    showWeekly();
})

monthly.addEventListener("click", () => {
    showMonthly();
})