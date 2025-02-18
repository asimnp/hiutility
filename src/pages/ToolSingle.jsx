import { useParams } from "react-router";

export default function ToolSingle() {
  const { toolSlug } = useParams();

  return <h1>{toolSlug}</h1>;
}
