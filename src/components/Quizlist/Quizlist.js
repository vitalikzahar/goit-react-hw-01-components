import { Description } from "components/Description/description"
import { Stats } from "components/Stats/stats"
import { Card } from "./Quizlist.styled"
export const Quizlist =({items})=> {    
    return (<Card>
        <Description items={items} />
        <Stats items={items} />
    </Card>);
    
}