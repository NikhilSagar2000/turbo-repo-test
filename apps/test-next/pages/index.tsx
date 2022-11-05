import { CommonButton } from "test-ui";
import { CommonHeading } from "test-ui";
import { sayHello } from "test-utils";

export default function Web() {
  return (
    <div>
      <h2>{sayHello("Nikhil")}</h2>
      <CommonButton />
      <CommonHeading />
    </div>
  );
}
