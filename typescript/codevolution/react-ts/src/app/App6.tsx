import { Button } from "../components/6-event_props/Button";
import { Input } from "../components/6-event_props/Input";
function App6() {
    return <div>
        <Button handleClick={(event, id)=>{
            console.log("클릭 이벤트 타입 지정", event, id)
        }} />
        <Input value="" handleChange={(event)=> console.log(event)} />
    </div>
}