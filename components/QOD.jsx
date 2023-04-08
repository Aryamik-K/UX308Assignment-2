// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
  const surveyJson = {
    elements: [
      {
        name: "looseClothing",
        title: "Is it okay to wear loose clothing or jewelry while operating machinery?",
        type: "radiogroup",
        choices: [
          { value: true, text: "Yes" },
          { value: false, text: "No" }
        ],
        correctAnswer: false,
        incorrectAnswer: "Incorrect. Loose clothing or jewelry can get caught in machinery and cause serious injury. The correct answer is 'No.'"
      },
      {
        name: "personalDevices",
        title: "Are employees allowed to use personal electronic devices while working with hazardous materials?",
        type: "radiogroup",
        choices: [
          { value: true, text: "Yes" },
          { value: false, text: "No" }
        ],
        correctAnswer: false,
        incorrectAnswer: "Incorrect. Personal electronic devices can generate sparks and ignite flammable materials. The correct answer is 'No.'"
      },
      {
        name: "liftingTechniques",
        title: "Is it necessary to use proper lifting techniques when moving heavy objects?",
        type: "boolean",
        correctAnswer: true,
        incorrectAnswer: "Incorrect. Improper lifting techniques can cause back injuries and other musculoskeletal disorders. The correct answer is 'Yes.'"
      },
      {
        name: "fireExtinguishers",
        title: "Should fire extinguishers be readily accessible and visible in the workplace?",
        type: "boolean",
        correctAnswer: true,
        incorrectAnswer: "Incorrect. Fire extinguishers can be life-saving tools in the event of a fire. The correct answer is 'Yes.'"
      },
      {
        name: "emergencyExits",
        title: "Is it important to know the location of emergency exits in the workplace?",
        type: "boolean",
        correctAnswer: true,
        incorrectAnswer: "Incorrect. Knowing the location of emergency exits can help ensure a safe evacuation in the event of an emergency. The correct answer is 'Yes.'"
      },
      {
        name: "hazardousSubstances",
        title: "Should hazardous substances be properly labeled and stored in the workplace?",
        type: "boolean",
        correctAnswer: true,
        incorrectAnswer: "Incorrect. Improper labeling and storage of hazardous substances can lead to accidents and injuries. The correct answer is 'Yes.'"
      },
      {
        name: "slipperyFloors",
        title: "Is it necessary to clean up spills and wet floors promptly in the workplace?",
        type: "boolean",
        correctAnswer: true,
        incorrectAnswer: "Incorrect. Wet floors can be slippery and increase the risk of slips, trips, and falls. The correct answer is 'Yes.'"
      },
      {
        name: "electricalSafety",
        title: "Is it important to follow electrical safety guidelines in the workplace?",
        type: "boolean",
        correctAnswer: true,
        incorrectAnswer: "Incorrect. Electrical hazards can cause serious injuries or even death. The correct answer is 'Yes.'"
      },
      {
        name: "workplaceViolence",
        title: "Should measures be taken to prevent workplace violence?",
        type: "boolean",
        correctAnswer: true,
        incorrectAnswer: "Incorrect. Workplace violence can lead to physical and psychological harm. The correct answer is 'Yes.'"
      },
      {
        name: "emergencyDrills",
        title: "Should emergency drills be conducted regularly in the workplace?",
        type: "boolean",
        correctAnswer: true,
        incorrectAnswer: "Incorrect. Regular emergency drills can help prepare employees for emergency situations and ensure a safe evacuation. The correct answer is 'Yes.'"
      }
    ]
  };

  const survey = new Model(surveyJson);

  survey.onComplete.add(function(result) {
    const correctAnswers = result.correctAnswerCount;
    const totalQuestions = result.visiblePages[0].elements.length;
    console.log(`You got ${correctAnswers} out of ${totalQuestions} questions correct!`);
  });

  return <Survey model={survey} />;
}

