import { createFileRoute } from "@tanstack/react-router";

/**
 * HOME PAGE
 */
export const Home = () => {
  return (
    <>
      <h1>WuwaTools - Work In Progress</h1>
      <h2>To Do:</h2>
      <ul>
        <li>- More stuff potentially</li>
        <li>- Mobile responsive</li>
      </ul>
    </>
  );
};
export const Route = createFileRoute("/")({
  component: Home,
});
