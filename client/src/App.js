import { response } from "express"
import React, { useEffect, useState } from "react"
function App() {

  const [backenddata, setbackenddata] = useState("")

  useEffect(() => {
    function fetchdata() {
      fetch("/api").then(
        response => response.text()
      ).then(
        data => {
          setbackenddata(data)
        }
      )
    }

  })

  const repeatfetchdata = setInterval(fetchdata, 2000)


  return (
    <div>
      <p>{backenddata}</p>
    </div>
  )
}
export default App