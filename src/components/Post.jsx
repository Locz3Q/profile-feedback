import {useParams} from 'react-router-dom'

function Post() {
  const params = useParams()

  return (
    <div>
      <h1>Post {params.id}</h1>
      <p>
        <h2>Name {params.name}</h2>
      </p>
    </div>
  )
}

export default Post