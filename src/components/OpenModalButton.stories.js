import OpenModalButton from "./OpenModalButton";

export default {
  title: "OpenModalButton",
  component: OpenModalButton,
};

const title = "Hello World";

export const HelloButton = () => <OpenModalButton statement={title} />;
