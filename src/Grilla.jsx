import { useEffect } from "react";
import Card from "./Card";

function Grilla({options, ganador, setSelection, setSelection2, selection, selection2}) {
    //console.log(options)
    
    function selectionHandle(e){
        console.log(e)
        if(Object.keys(selection).length !== 0 && selection !== e){
            setSelection2(e);
            const pick1 = document.getElementById(selection.id + 98);
            console.log(pick1);
            pick1.classList.add("pickcard");
            pick1.classList.remove("opencard");
        }
        else {
            setSelection(e);
            const pick2 = document.getElementById(selection2.id + 98);
            console.log(pick2);
            pick2.classList.add("pickcard");
            pick2.classList.remove("opencard");
        }
    }
   
    return(
        <div className="grilla">
                
                {
                    ganador && ( 
                        <div>se gano</div>
                    )
                }

                { 
              
                    !ganador && options?.map((e) => {
                        return (
                            <div id={e.id} className="card" >
                                <button  onClick={()=>selectionHandle(e)}>
                                    <Card id={e.id} title={e.letra} />
                                </button>
                            </div>
                        )
                    })
                }                
            </div>
    )
}
export default Grilla;