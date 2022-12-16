import CardComponent from "../../components/card/card"
import { openSavePinAction } from "../../store/actions"
import { useAppContext } from "../../store/AppContext"

export const CardContainer = (props) => {
    const { state, dispatch } = useAppContext()

    const handleClick = (pinId) => {
        dispatch(openSavePinAction(pinId))
    }
    
    return (
        <CardComponent {...props} onClick={handleClick} />
    )
}