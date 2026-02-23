import { FilterBar } from "../components/FilterBar";
import { MenuTask } from "../components/MenuTask";
import { Kanban } from "../components/Kanban";

export function HomePage(){
    return(
        <div className="min-h-screen flex flex-col p-6 bg-[#f3f4ef]">
            <FilterBar/>
            <Kanban/>
            <MenuTask/>
        </div>
    )
}