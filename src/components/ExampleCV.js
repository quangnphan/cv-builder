import { v4 as uuidv4 } from "uuid";

const ExampleCV = {
  personalInfo: {
    firstName: "Quang",
    lastName: "Phan",
    title: "Front-end Web Developer",
    address: "Example Street 1000",
    phoneNumber: "123456789",
    email: "quangphan@gmail.com",
    description:
      "A Computer Information Systems graduate and I love to code. Knowledge in database management, web development life cycle, in-depth understanding of building responsive websites using front-end frameworks. I desire to use my good work ethics, willingness to learn, and skills that I gained from education to grow as a developer.",
  },
  experience: [
    {
      id: uuidv4(),
      position: "Front-end Developer",
      company: "Google Inc.",
      city: "Mountain View",
      from: "2018",
      to: "2021",
    },
    {
      id: uuidv4(),
      position: "Junior Developer",
      company: "Facebook Inc.",
      city: "Menlo Park",
      from: "2015",
      to: "2018",
    },
  ],
  education: [
    {
        id: uuidv4(),
        universityName: "University of Houston",
        city: "Houston",
        degree: "Bachelor",
        subject: "Science",
        from: "2010",
        to: "2015",
      },
    {
      id: uuidv4(),
      universityName: "Houston Community College",
      city: "Houston",
      degree: "Associate",
      subject: "Science",
      from: "2008",
      to: "2010",
    },
  ],
};

export default ExampleCV;
