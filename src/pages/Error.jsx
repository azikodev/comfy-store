import { Link, useRouteError } from "react-router-dom"
function Error() {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <h1>Page not Found</h1>
    )
  }
  return (
    <div>
      <h1>Something went wrong !</h1>
    </div>
  )
}

export default Error