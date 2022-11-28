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
          taskDescr: "Create main page functional and design",
          start: "25.11.22",
          inWork: "7 days",
          end: "01.12.22",
          priority: 1,
          files: {},
          status: "Queue"
        },
        {
          id: "2",
          taskNumber: 2,
          taskName: "Fix colors",
          taskDescr: "Find suitable colors that match each other",
          start: "26.11.22",
          inWork: "3",
          end: "28.11.22",
          priority: 2,
          files: {},
          status: "Queue"
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
