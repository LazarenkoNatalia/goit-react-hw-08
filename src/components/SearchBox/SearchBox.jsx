import stylSearch from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectNameFilter } from '../../redux/filters/selectors.js'
import { changeFilter } from '../../redux/filters/slice.js'

export default function SearchBox() {
  const dispatch = useDispatch()
  const filter =useSelector(selectNameFilter)


  return (
      <div>
          <p className={stylSearch.text}>Find contacts by name</p>
      <input type="text" className={stylSearch.text} value={filter}
        onChange={(event) => dispatch(changeFilter(event.target.value))} />
    </div>
  )
}

