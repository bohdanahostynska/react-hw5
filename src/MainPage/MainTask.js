import YourCards from "./YourCards";
import UseFetch from "./UseFetch";
import AddNewCard from "./AddNewCard";

const CARDS_BASE_URL =
  "https://my.api.mockaroo.com/cards/123.json?key=778301b0";
export function MainTask() {
  return (
    <div>
      <UseFetch
        url={CARDS_BASE_URL}
        getDataUrl={(cards) => <YourCards data={cards}/>}
      />
    </div>
  );
}

export default MainTask;
