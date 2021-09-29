import React from "react";
import { Question } from "../icons/icons";

const fakeCommunityData = [
  {
    questionText:
      "My dog is talking to me, but I cant understand? Next Line...",
    status_answered: false,
    owner: {
      name: "Lisa",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    answers: [
      {
        anserText: "Oh this is an Answer!",
        owner: {
          name: "Phil",
          avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        },
      },
    ],
  },
  {
    questionText:
      "My dog is talking to me, but I cant understand? Next Line...",
    status_answered: false,
    owner: {
      name: "Lisa",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    answers: [
      {
        anserText: "Oh this is an Answer!",
        owner: {
          name: "Phil",
          avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        },
      },
    ],
  },
  {
    questionText:
      "My dog is talking to me, but I cant understand? Next Line...",
    status_answered: false,
    owner: {
      name: "Lisa",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    answers: [
      {
        anserText: "Oh this is an Answer!",
        owner: {
          name: "Phil",
          avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        },
      },
    ],
  },
];

export default function CommunityPreview() {
  const CommunityCardElements = fakeCommunityData.map((question) => {
    return <CommunityPreviewCard questionData={question} />;
  });

  return (
    <div className="cp-section">
      <h2 className="community-section-header">Our Community</h2>

      <div className="community-card-container">{CommunityCardElements}</div>
      <button className="primary-button">See all Questions</button>
    </div>
  );
}

function CommunityPreviewCard({ questionData }) {
  return (
    <div className="community-card">
      <div className="community-category">
        <p>Question</p>
      </div>
      <div className="community-content">
        <img
          className="community-content-avatar"
          src={questionData.owner.avatar}
          alt={questionData.owner.name}
        />
        <div className="community-content-question">
          <span className="community-content-question-text">
            {questionData.questionText}
          </span>
          <div className="community-content-details-container">
            <span className="community-content-detail-text community-from-text">
              from {questionData.owner.name}
            </span>
            <span className="community-content-detail-text community-content-timestamp-text">
              3 hours ago
            </span>
            <span className="community-content-detail-text community-content-answerCounter-text">
              {questionData.answers.length} Answers
            </span>
          </div>
        </div>
      </div>
      <div className="community-actions">
        <button className="community-answer-button">
          <Question />
          <span>Answer</span>
        </button>
      </div>
    </div>
  );
}
