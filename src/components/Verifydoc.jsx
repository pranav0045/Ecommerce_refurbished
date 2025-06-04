import { useParams } from "react-router-dom";

const Verifydoc = ({userItemState}) =>{

    return(
        <div className="w-full min-h-[800px] flex justify-center mt-24">

    <div className="w-[95%] flex justify-center bg-[#dadada] h-[90%]">
          
                  <img className="w-[60%] mt-10 min-h-[100%]" src={userItemState.document} alt="" />
            </div>

        </div>
    )
}

export default Verifydoc;