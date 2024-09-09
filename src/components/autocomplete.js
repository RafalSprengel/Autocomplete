import "../style/autocomplete.scss"
import { useEffect, useState } from "react";

let Autocomplete = ({ data }) => {

    const [inputVal, setInputVal] = useState("");
    const [inputClear, setInputClear] = useState(true);
    const [activeEl, setActiveEl] = useState(0);
    const [suggClosed, setSuggClosed] = useState(false)
    let suggLength;

    let handleInput = (e) => { setSuggClosed(false); setInputClear(false); setInputVal(e.target.value) }

    let handleKeyDown = (e) => {
        if (e.keyCode === 38) setActiveEl((prev) => (prev > 0) ? prev - 1 : suggLength - 1)  // pressed key UP
        if (e.keyCode === 40) setActiveEl((prev) => (prev < suggLength - 1) ? prev + 1 : 0) // pressed key DOWN
        if (e.keyCode === 13) {
            setInputVal(suggResults[activeEl].name);
            setSuggClosed(true);
        }
    }

    let Item = ({ countryName, inputLength, setInputVal, setInputClear, activeEl, index }) => {
        let handleClick = () => { setInputVal(countryName); setInputClear(true) }
        let BoldText = ({ text, end }) => {
            let bolded = text.slice(0, end);
            let rest = text.slice(end, text.length)
            return (
                <><b>{bolded}</b>{rest}</>
            )
        }

        return (
            <div className={"suggest-list__item" + (activeEl == index ? ' suggest-list__item--active' : '')} onClick={handleClick} >
                <BoldText text={countryName} end={inputLength} />
            </div>
        )
    }



    let suggResults = data.filter((el) => el.name.toLowerCase().search(inputVal.toLowerCase()) == ! -1 && inputVal !== "");
    suggLength = suggResults.length;
    let suggList = suggResults.map((el, index) => {
        return <Item
            countryName={el.name}
            inputLength={inputVal.length}
            setInputVal={setInputVal}
            setInputClear={setInputClear}
            activeEl={activeEl}
            key={index}
            index={index} />

    })

    useEffect(() => {
        let closeAllLists = () => setSuggClosed(true);
        document.addEventListener('click', closeAllLists);
        return () => document.removeEventListener('click', closeAllLists);
    })

    return (
        <div className='autocomplete'>
            <input
                placeholder="Country"
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                value={inputVal}
            />
            {(!inputClear && inputVal && !suggClosed &&
                <div className="suggest-list">
                    {suggList}
                </div>)}
        </div>
    )
}

export default Autocomplete;