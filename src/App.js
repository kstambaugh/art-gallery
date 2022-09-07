import { useState, useEffect } from 'react'
import Gallery from './components/gallery'
import Button from './components/ButtonBar'


function App() {
  let [artId, setArtId] = useState(200)
  let [data, setData] = useState({})

  const handleIterate = (e) => {
    setArtId(data.objectId + Number(e.target.value))
  }


  useEffect(() => {
    document.title = 'Welcome to Art Gallery'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])
  return (
    <div>
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />

      <Button onClick={handleIterate}></Button>
    </div>
  )
}

export default App;
