const { default: mongoose } = require("mongoose");

const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "question is required"],
    },
    intention: {
      type: String,
      required: [true, "intention is required "],
    },
    answer: {
      type: String,
      required: [true, "answer is required "],
    },
  },
  {
    _id: false,
  },
);
const behavioralQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, " question is required"],
    },
    intention: {
      type: String,
      required: [true, "intention is required "],
    },
    answer: {
      type: String,
      required: [true, "answer is required "],
    },
  },
  {
    _id: false,
  },
);
const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "skil is required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "severity is required"],
    },
  },
  {
    _id: false,
  },
);
const preparationPlanSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      required: [true, "day is required"],
    },
    focus: {
      type: String,
      required: [true, "focus is required"],
    },
    task: [
      {
        type: String,
        required: [true, "task is true"],
      },
    ],
  },
  {
    _id: false,
  },
);

const interviewReport = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "job description is required"],
    },
    resume: {
      type: String,
    },
    selfDescription: {
      type: String,
    },
    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },
    technicalQuestion: [technicalQuestionSchema],
    behavioralQuestion: [behavioralQuestionSchema],
    skillGap: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],
  },
  {
    timestamps: true,
  },
);

const interviewReportModel = mongoose.model("interviewReport", interviewReport);
module.exports = interviewReportModel;

