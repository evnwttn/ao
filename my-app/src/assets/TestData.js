import { palette } from "./theme";

export const data = {
  sessionTitle: "the dark side of the moon",
  tracks: [
    "speak to me",
    "breathe (in the air)",
    "on the run",
    "time",
    "the great gig in the sky",
    "money",
    "us and them",
    "any colour you like",
    "brain damage",
    "eclipse",
  ],
  parameters: [
    "title",
    "vocals",
    "guitar",
    "bass",
    "drums",
    "piano",
    "guest players",
    "guest vocals",
    "fx",
    "mix",
    "master",
    "done",
  ],
};

export const dummyData = {
  id: "album",
  author: "evan123",
  tracks: {
    "speak to me": {
      title: "speak to me",
      vocals: { colour: palette.aoGrey },
      guitar: { colour: palette.aoGrey },
      bass: { colour: palette.aoGrey },
      drums: { colour: palette.aoGrey },
      piano: { colour: palette.aoGrey },
      guestPlayers: { colour: palette.aoGrey },
      guestVocals: { colour: palette.aoGrey },
      fx: { colour: palette.aoGrey },
      mix: { colour: palette.aoGrey },
      master: { colour: palette.aoGrey },
      done: { colour: palette.aoGrey },
    },
  },
};
