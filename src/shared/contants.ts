import { portfolioInfo, section } from "./interfaces";

const work: section = {
    header: "Work History",
    topics: [{
        title: 'Wellington Management',
        subTitle: 'Software Engineer',
        points: ["work", "Computers"]
    }]
}

const education: section = {
    header: "Education",
    topics: [{
        title: "FLorida Internation Unicersity",
        subTitle: "Bacherlors degree, 2020, compsci",
        points: ["java", "c", "c++", "tutor"]
    }]
}

export const testPortfolio: portfolioInfo = {
    name: "Malachi Williams",
    emails: ["malachiw95@hotmail.com", "malachiw95@gmail.com"],
    sections: [work, education]
}

