import { useEffect, useState } from "react";
import Card from "./Card"
import "./App.css"

function Home({ options }) {

    const [selection, setSelection] = useState({ letra: "", id: 0, selected: false }); // false
    const [selection2, setSelection2] = useState({ letra: "", id: 0, selected: false });
    const [ganador, setGanador] = useState(false);
    const [indexPick, setIndexPick] = useState(null);
    const [indexPick2, setIndexPick2] = useState(null);
    const [handlePick, setHandlePick] = useState(true);
    const [bol, setBol] = useState(false);

    function selectionHandle(e, i) {
        if(!options[i].selected){
            options[i].selected = true;
            //console.log(options)
            if (selection.letra == "") {
                setSelection({ letra: options[i].letra, id: options[i].id, selected: true })
            setIndexPick(i)
            }
            if (selection.letra !== "" && selection2.letra == "" && selection.id !== options[i].id) {
                setSelection2({ letra: options[i].letra, id: options[i].id, selected: true })
                setIndexPick2(i)
                setBol(true)
                setHandlePick(false)
            }
        }
    }
    useEffect(() => {
        function playValidate() {
           //console.log(options[indexPick])
            if (selection.letra == "" && selection2 == "") return
            if (!ganador) {
                if (selection.letra !== selection2.letra) {
                    setTimeout(() => {

                        options[indexPick].selected = false;
                        options[indexPick2].selected = false;
                        setSelection({ letra: "", id: 0, selected: false });
                        setSelection2({ letra: "", id: 0, selected: false });
                        setIndexPick(null)
                        setIndexPick2(null)
                        setHandlePick(true)
                    }, 1000);
                }
                if (selection.letra == selection2.letra) {
                    setSelection({ letra: "", id: 0, selected: false });
                    setSelection2({ letra: "", id: 0, selected: false });
                    setIndexPick(null)
                    setIndexPick2(null)
                    setHandlePick(true)
                }
                setBol(false)
            }
        }
        function winnerValidate() {
            if (!ganador) {
                for (let i = 0; i < options.length; i++) {
                    const element = options[i]
                    if (!element.selected) return
                }
                setGanador(true)
            }
        }
        playValidate()
        winnerValidate()
    }, [bol])

    return (
        <>
            <div className="grilla">
                {
                    ganador && (
                        <div classname="finish">
                            <h1>SE GANO</h1>
                            <img  src={"https://conexionpermanent.files.wordpress.com/2015/03/la-victoria-2.jpg?w=338&h=142"}/>
                        </div>
                    )
                }
                {
                    !ganador && options?.map((e, i) => {
                        return (
                            <div key={e.id} onClick={() => handlePick && selectionHandle(e, i)} id={e.id} className={e.selected ?  "pickcard" : "card"} >
                                
                                    <Card id={e.id} title={e.letra} selected={e.selected} picture={e.picture}/>
                                
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;