const SETPROJECTS = "SET-PROJECTS";

let initialState = {
  projects: [
    {
      projectID: 1,
      projectName: "Movies to watch",
      tasks: [
        {
          id: "1",
          taskNumber: 1,
          taskName: "Titanic",
          taskDescr: "документальный, драма",
          start: "2022-11-25",
          priority: 1,
          status: "Queue"
        },
        {
          id: "2",
          taskNumber: 2,
          taskName: "Spider-Man: Into the Spider-Verse",
          taskDescr: "мультфильм, фантастика",
          start: "2022-11-26",
          priority: 2,
          status: "Done"
        },
        {
          id: "3",
          taskNumber: 3,
          taskName: "Hannibal",
          taskDescr: "детектив, триллер",
          start: "2023-01-25",
          priority: 3,
          status: "Development"
        },
        {
          id: "4",
          taskNumber: 4,
          taskName: "Puss in Boots",
          taskDescr: "мультфильм, фэнтези",
          start: "2023-01-30",
          priority: 4,
          status: "Done"
        },
        {
          id: "5",
          taskNumber: 5,
          taskName: "Split",
          taskDescr: "триллер, ужасы",
          start: "2022-10-14",
          priority: 5,
          status: "Development"
        },
        {
          id: "6",
          taskNumber: 6,
          taskName: "Mr. Robot",
          taskDescr: "триллер, драма",
          start: "2022-11-05",
          priority: 6,
          status: "Queue"
        }
      ]
    },
    {
      projectID: 2,
      projectName: "House works for week",
      tasks: [
        {
          id: "1",
          taskNumber: 1,
          taskName: "Dishers",
          taskDescr: "Washing the disher every day",
          start: "2023-03-20",
          priority: 1,
          status: "Queue"
        },
        {
          id: "2",
          taskNumber: 2,
          taskName: "Floor",
          taskDescr: "Washing the floor once a week",
          start: "2023-03-20",
          priority: 2,
          status: "Done"
        },
        {
          id: "3",
          taskNumber: 3,
          taskName: "Dust",
          taskDescr: "Wipe off the dust once a week",
          start: "2023-01-25",
          priority: 3,
          status: "Development"
        },
        {
          id: "4",
          taskNumber: 4,
          taskName: "Clothes",
          taskDescr: "Put the clothes in the closet then it everywhere",
          start: "2023-01-30",
          priority: 4,
          status: "Done"
        },
        {
          id: "5",
          taskNumber: 5,
          taskName: "Laundry",
          taskDescr: "Wash clothes once a week",
          start: "2023-03-14",
          priority: 5,
          status: "Development"
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
