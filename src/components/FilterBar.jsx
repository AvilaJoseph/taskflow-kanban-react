import { FileDown, Settings, Moon } from 'lucide-react'
import { IconButton } from './IconButton'

export function FilterBar() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-500 font-medium">Task Schedule</span>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">Daily Operation</h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium">All</button>
                    <button className="px-4 py-2 rounded-full bg-white text-gray-500 text-sm font-medium border border-gray-200">To Do</button>
                    <button className="px-4 py-2 rounded-full bg-white text-gray-500 text-sm font-medium border border-gray-200">In Progress</button>
                    <button className="px-4 py-2 rounded-full bg-white text-gray-500 text-sm font-medium border border-gray-200">Done</button>
                </div>

                <div className="flex gap-2">
                    <IconButton><FileDown size={18} /></IconButton>
                    <IconButton><Moon size={18} /></IconButton>
                    <IconButton><Settings size={18} /></IconButton>
                </div>

            </div>
        </div>
    )
}