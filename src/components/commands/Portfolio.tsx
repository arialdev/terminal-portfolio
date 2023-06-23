import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import { Link } from "../styles/Welcome.styled";

const portfolioUrl = "https://alvarorivas.dev";

const Blog: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (
    rerender &&
    currentCommand[0] === "portfolio" &&
    currentCommand.length <= 1
  ) {
    window.open(portfolioUrl, "_blank");
  }

  return (
    <Wrapper>
      <Link href={portfolioUrl} hrefLang="en" rel="author" target="_blank">
        {portfolioUrl}
      </Link>
    </Wrapper>
  );
};

export default Blog;
