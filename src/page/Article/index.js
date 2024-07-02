// import { useSearchParams, useParams } from "react-router-dom"
import { useParams } from "react-router-dom"
const Article = () => {
  // const [params] = useSearchParams()
  // const id = params.get('id')
  // const name = params.get('name')
  const params = useParams()
  const id = params.id
  const name = params.name
  // return <div>Article {id} {name} {id2}</div>
  return <div>Article {id} {name}</div>
}

export default Article