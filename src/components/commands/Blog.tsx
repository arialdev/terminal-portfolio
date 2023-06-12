import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import { Link } from "../styles/Welcome.styled";

const Blog: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "blog" && currentCommand.length <= 1) {
    window.open("https://blog.arial.dev", "_blank");
  }

  return (
    <Wrapper>
      <Link
        href="https://blog.arial.dev"
        hrefLang="es"
        rel="author"
        target="_blank"
      >
        https://blog.arial.dev
      </Link>
    </Wrapper>
  );
};

export default Blog;
