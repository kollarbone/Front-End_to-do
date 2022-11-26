let initialState = {
  projects: [
    {
      projectID: 1,
      projectName: "",
      tasks: [
        {
          taskNumber: 1,
          taskName: "",
          taskDescr: "",
          start: "",
          inWork: "",
          end: "",
          priority: 1,
          files: {},
          status: "Queue"
        },
        {
          taskNumber: 2,
          taskName: "",
          taskDescr: "",
          start: "",
          inWork: "",
          end: "",
          priority: 2,
          files: {},
          status: "Queue"
        }
      ]
    },
    {
      projectID: 2,
      projectName: "",
      tasks: [
        {
          taskNumber: 1,
          taskName: "",
          taskDescr: "",
          start: "",
          inWork: "",
          end: "",
          priority: 1,
          files: {},
          status: "Queue"
        }
      ]
    }
  ]
};
const mainReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state
  };
};

export default mainReducer;
