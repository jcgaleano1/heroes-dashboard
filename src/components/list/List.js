import { Link } from "react-router-dom";
import Card from "../card/Card";
import Loading from "../loading/Loading"
import './list.css';

const PokeList = ({ list, loading }) => {

  return (
    <div className="list">
      {
        loading ? <Loading />
          :
          <>
            {list.map(item => (
              <Card key={item.id} name={item.name} location={item.location} img={item.img} id={item.id}></Card>
            ))}
            <div className="list-button">
              <Link className="link" to={'/heroes/statistics'}>Watch general statistics</Link>
            </div>
          </>
      }
    </div>
  )
}

export default PokeList