const SETPROJECTS = "SET-PROJECTS";
let initialState = {
  projects: [
    {
      projectID: 1,
      projectName: "Korean online clothing store",
      tasks: [
        {
          id: "1",
          taskNumber: 1,
          taskName: "Create main page",
          taskDescr: "",
          start: "",
          inWork: "",
          end: "",
          priority: 1,
          files: {},
          status: "Queue"
        },
        {
          id: "2",
          taskNumber: 2,
          taskName: "Fix colors",
          taskDescr: "",
          start: "",
          inWork: "",
          end: "",
          priority: 2,
          files: {},
          status: "Done"
        }
      ]
    },
    {
      projectID: 2,
      projectName: "Streaming service for movies and TV series",
      tasks: [
        {
          id: "1",
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
    ...state,
    projects: [...state.projects]
  };
  switch (action.type) {
    case SETPROJECTS: {
      return {
        ...stateCopy,
        projects: [...action.projects]
      };
    }
    default:
      return stateCopy;
  }
};
export const setProjectsActionCreator = (projects) => ({
  type: SETPROJECTS,
  projects
});

export default mainReducer;
