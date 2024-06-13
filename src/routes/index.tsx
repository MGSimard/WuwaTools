import { createFileRoute } from "@tanstack/react-router";

/**
 * HOME PAGE
 */
export const Home = () => {
  return (
    <>
      <h1>WuwaTools - Work In Progress</h1>
    </>
  );
};
export const Route = createFileRoute("/")({
  component: Home,
});
