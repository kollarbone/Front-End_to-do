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
          start: "2022-11-25",
          inWork: "7 days",
          end: "2022-12-01",
          priority: 1,
          files: {},
          status: "Queue",
          sub: [
            {
              id: 1,
              name: "do something 1"
            },
            {
              id: 2,
              name: "do something 2"
            },
            {
              id: 3,
              name: "do something 3"
            }
          ]
        },
        {
          id: "2",
          taskNumber: 2,
          taskName: "Fix colors",
          taskDescr: "Find suitable colors that match each other",
          start: "2022-11-26",
          inWork: "3",
          end: "2022-11-28",
          priority: 2,
          files: {},
          status: "Done",
          sub: [
            {
              id: 1,
              name: "do something 1"
            },
            {
              id: 2,
              name: "do something 2"
            },
            {
              id: 3,
              name: "do something 3"
            }
          ]
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
          status: "Queue",
          sub: [
            {
              id: 1,
              name: "do something 1"
            },
            {
              id: 2,
              name: "do something 2"
            },
            {
              id: 3,
              name: "do something 3"
            }
          ]
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
