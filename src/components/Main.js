import React, { useState } from "react";
import Form from "./Form/Form";
import Paper from "./Paper/Paper";
import ExampleCV from "./ExampleCV";
import EmptyCV from "./EmptyCV";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [cv, setCv] = useState(EmptyCV);

  const loadExample = () => {
    setCv(ExampleCV);
  };

  const clearAll = () => {
    setCv(EmptyCV);
  };

  const changePersonal = (e) => {
    const { name, value } = e.target;
    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const changeExperience = (e, id) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const newExperience = prevState.experience.map((expItem) => {
        if (expItem.id === id) {
          return { ...expItem, [name]: value };
        }
        return expItem;
      });
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const addExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const deleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (expItem) => expItem.id !== id
      );
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const changeEducation = (e, id) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const newEducation = prevState.education.map((eduItem) => {
        if (eduItem.id === id) {
          return { ...eduItem, [name]: value };
        }
        return eduItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const addEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const deleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (eduItem) => eduItem.id !== id
      );
      return { ...prevState, education: [...newEducation] };
    });
  };

  return (
    <div>
      <div className="buttons">
        <button className="expBtn" onClick={loadExample}>
          Load Example
        </button>
        <button className="clearBtn" onClick={clearAll}>
          Clear All
        </button>
      </div>
      <main>
        <Form
          cv={cv}
          onChangePersonal={changePersonal}
          onChangeExperience={changeExperience}
          onChangeEducation={changeEducation}
          addExperience={addExperience}
          addEducation={addEducation}
          deleteExperience={deleteExperience}
          deleteEducation={deleteEducation}
        />
        <Paper cv={cv} />
      </main>
    </div>
  );
};

export default Main;
