const CHARACTERS = [
  {
    id: "1001",
    name: "Mafia England",
    category: "Rare",
    image: {
      ariaLabel: "mafia-england-img",
      src: "/mafia-england.png",
    },
    price: 1200,
    author: {
      id: "author-id-123",
      name: "Author name 123",
      profilePic: {
        ariaLabel: "author-123-img",
        src: "",
      },
    },
  },
];

const ALL_CHARACTERS = [
  ...CHARACTERS,
  {
    id: "1002",
    name: "Basketball Girl",
    category: "Common",
    image: {
      ariaLabel: "basketball-girl-img",
      src: "/basketball-girl.png",
    },
    price: 1300,
    author: {
      id: "author-id-123",
      name: "Author name 123",
      profilePic: {
        ariaLabel: "author-123-img",
        src: "",
      },
    },
  },
];

module.exports = [
  {
    id: "get-characters", // route id
    url: "/api/characters", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: CHARACTERS, // body to send
        },
      },
      {
        id: "all", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_CHARACTERS, // body to send
        },
      },
      {
        id: "error", // variant id
        type: "json", // variant handler id
        options: {
          status: 400, // status to send
          // body to send
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-character", // route id
    url: "/api/characters/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: CHARACTERS[0], // body to send
        },
      },
      {
        id: "id-3", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_CHARACTERS[2], // body to send
        },
      },
      {
        id: "real", // variant id
        type: "middleware", // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const characterId = req.params.id;
            const character = CHARACTERS.find(
              (characterData) => characterData.id === Number(characterId),
            );
            if (character) {
              res.status(200);
              res.send(character);
            } else {
              res.status(404);
              res.send({
                message: "User not found",
              });
            }
          },
        },
      },
    ],
  },
];
