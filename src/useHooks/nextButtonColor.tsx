const getNextButtonColor = (buttonColor: string): "red" | "blue" | "green" => {
  switch (buttonColor) {
    case "red":
      return "blue";
    case "blue":
      return "green";
    case "green":
      return "red";
    default:
      throw new Error("Invalid color");
  }
};

export default getNextButtonColor;
