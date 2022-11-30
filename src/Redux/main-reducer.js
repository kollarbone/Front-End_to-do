import document_1 from "../Files/document_1.jpg";
import document_2 from "../Files/4-7.jpg";
import document_3 from "../Files/buymymag-image.jpg";
import document_4 from "../Files/technology.jpg";
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
          files: [
            { name: document_1, id: 1 },
            { name: document_2, id: 2 },
            { name: document_3, id: 3 },
            { name: document_4, id: 4 }
          ],
          status: "Queue",
          coments: "",
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
          files: [
            { name: document_1, id: 1 },
            { name: document_2, id: 2 },
            { name: document_3, id: 3 },
            { name: document_4, id: 4 }
          ],
          status: "Done",
          coments: "",
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
          id: "3",
          taskNumber: 3,
          taskName: "Create main page",
          taskDescr: "Create main page functional and design",
          start: "2022-11-25",
          inWork: "7 days",
          end: "2022-12-01",
          priority: 3,
          files: [
            { name: document_1, id: 1 },
            { name: document_2, id: 2 },
            { name: document_3, id: 3 },
            { name: document_4, id: 4 }
          ],
          status: "Development",
          coments: "",
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
          id: "4",
          taskNumber: 4,
          taskName: "Fix colors",
          taskDescr: "Find suitable colors that match each other",
          start: "2022-11-26",
          inWork: "3",
          end: "2022-11-28",
          priority: 4,
          files: [
            { name: document_1, id: 1 },
            { name: document_2, id: 2 },
            { name: document_3, id: 3 },
            { name: document_4, id: 4 }
          ],
          status: "Done",
          coments: "",
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
          id: "5",
          taskNumber: 5,
          taskName: "Create main page",
          taskDescr: "Create main page functional and design",
          start: "2022-11-25",
          inWork: "7 days",
          end: "2022-12-01",
          priority: 5,
          files: [
            { name: document_1, id: 1 },
            { name: document_2, id: 2 },
            { name: document_3, id: 3 },
            { name: document_4, id: 4 }
          ],
          status: "Development",
          coments: "",
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
          id: "6",
          taskNumber: 6,
          taskName: "Fix colors",
          taskDescr: "Find suitable colors that match each other",
          start: "2022-11-26",
          inWork: "3",
          end: "2022-11-28",
          priority: 6,
          files: [
            { name: document_1, id: 1 },
            { name: document_2, id: 2 },
            { name: document_3, id: 3 },
            { name: document_4, id: 4 }
          ],
          status: "Queue",
          coments: "",
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
          files: [
            { name: document_1, id: 1 },
            { name: document_2, id: 2 },
            { name: document_3, id: 3 },
            { name: document_4, id: 4 }
          ],
          status: "Queue",
          coments: "",
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
