import { useState, useEffect } from "react";
import EmojiData from '../emoji.json';

function Emoji() {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [val, setVal] = useState(false);

  useEffect(() => {
    const newData = EmojiData.filter(
      emoji => emoji.keywords.toLowerCase().includes(search.toLowerCase())
    )
    if (newData.length == 0) {
      setVal(true);
    } else {
      setVal(false);
      setData(newData)
    }
    console.log("data: ", newData.length);
    // setData(newData);
  }, [search])

  return (
    <div className="div">
      
      <h1> 😺Emoji Search 😸</h1>
      
      <input type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search} />

      <ul>
        {
          val ? (<li>No Emoji Found</li>)
            : (data.map((item, e) =>
              <li key={e}> {item.symbol}{item.title}</li>
            ))
        }
      </ul>
    </div>
  )
}
export default Emoji;